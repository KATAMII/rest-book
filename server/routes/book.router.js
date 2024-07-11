import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.post("/book", async (req, res) => {
  try {
    const { firstName, lastName, email, checkIn, checkOut, roomsBooked } =
      req.body;

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
    if (!checkIn)
      return res
        .status(400)
        .json({ success: false, message: "check in date is required" });
    if (!checkOut)
      return res
        .status(400)
        .json({ success: false, message: "check out date is required" });
    if (!roomsBooked)
      return res
        .status(400)
        .json({
          success: false,
          message: "number of booked rooms is required",
        });

    const newBooking = await prisma.book.create({
      data: {
        firstName,
        lastName,
        email,
        checkIn,
        checkOut,
        roomsBooked
      },
    });
    res.status(201).json({ success: true, message: newBooking });
  } catch (error) {
    res.status(500).json({success:false, message:error.message})
  }
});

export default router;
