import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = Router();
const prisma = new PrismaClient();

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

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
    if (!password)
      return res
        .status(400)
        .json({ success: false, message: "password is required" });
    const userWithEmail = await prisma.user.findFirst({
      where: { email: email },
    });
    if (userWithEmail)
      return res
        .status(400)
        .json({ success: false, message: "email already taken" });
    const userWithNumber = await prisma.user.findFirst({
      where: { phone: phone },
    });
    if (userWithNumber)
      return res
        .status(400)
        .json({ success: false, message: "Number already taken" });

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
      },
    });

    res.status(201).json({ success: true, message: newUser });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "An error occured in the server" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginUser = await prisma.user.findFirst({
      where: { email: email },
    });
    // res.json(loginUser)
    if (loginUser) {
      const matchedPassword = bcrypt.compareSync(password, loginUser.password);
      if (matchedPassword === true) {
        const payLoad = {
          id: loginUser.id,
          firstName: loginUser.firstName,
          lastName: loginUser.lastName,
          phone: loginUser.phone,
        };
        const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
          expiresIn: "10m",
        });
        res.cookie("access_token", token);
        res.status(200).json({ success: true, data: payLoad });
      } else {
        res
          .status(400)
          .json({ success: false, message: "wrong user credentials" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: "wrong username or password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
