import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName)
      return res
        .status(400)
        .json({ success: false, message: "firstName is required" });
    if (!lastName)
      return res
        .status(400)
        .json({ success: false, message: "lastName is required" });
    if (!email)
      return res
        .status(400)
        .json({ success: false, message: "email is required" });
    if (!phone)
      return res
        .status(400)
        .json({ success: false, message: "phone is required" });
    if (!message)
      return res
        .status(400)
        .json({ success: false, message: "message is required" });

    const newContact = await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        message,
      },
    });

    res.status(201).json({ success: true, message: newContact });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "An error occured in the server" });
  }
});
export default router;
