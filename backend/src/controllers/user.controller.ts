import { Request, Response, NextFunction } from "express";
import prisma from "../utils/prisma";
import bcrypt from "bcryptjs";
import {
  generateNumericOTP,
  capitalizeFirstLetter,
  getFirstName,
} from "../utils";
import { Sendmail } from "../utils/mailer";
import { compilerOtp } from "../compiler";
import jwt from "jsonwebtoken";

interface bodyProps {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

interface LoginProps {
  identifier: string;
  password: string;
}

const Register = async (req: Request, res: Response) => {
  const { fullName, username, email, password }: bodyProps = req.body;

  if (!fullName) {
    return res.status(400).json({ message: "Please enter your first name" });
  }
  if (!email) {
    return res.status(400).json({ message: "Please enter your email" });
  }
  if (!password) {
    return res.status(400).json({ message: "Please enter your password" });
  }
  if (!username) {
    return res.status(400).json({ message: "Please enter your username" });
  }

  try {
    const [existingUserByEmail, existingUserByUsername] = await Promise.all([
      prisma.user.findUnique({ where: { email } }),
      prisma.user.findUnique({ where: { username } }),
    ]);

    if (existingUserByEmail || existingUserByUsername) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = generateNumericOTP(6);
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000);

    const user = await prisma.user.create({
      data: {
        fullName,
        username,
        email,
        password: hashedPassword,
        otp: otp.toString(),
        otpExpires,
      },
    });
    const { password: _, ...rest } = user;

    const capitalizedFirstName = getFirstName(fullName);

    await Sendmail({
      from: `BIll EASE <support@billease.com>`,
      to: email,
      subject: "OTP VERIFICATION",
      html: compilerOtp(capitalizedFirstName, parseInt(otp)),
    });

    return res.status(201).json({
      success: true,
      message:
        "User registration successful, please check your email to verify your account",
      user: rest,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const VerifyOtp = async (req: Request, res: Response) => {
  const { userId, otp } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(400).json({ message: "Invalid user" });
    }

    if (user.otp !== otp || user.otpExpires < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        otp: null,
        otpExpires: null,
        verified: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully. Your account is now active.",
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const Login = async (req: Request, res: Response) => {
  const { identifier, password }: LoginProps = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
      },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid email/username or password" });
    }

    if (!user.verified) {
      return res.status(400).json({ message: "Account is not verified" });
    }

    if (!user.password) {
      return res.status(400).json({
        message:
          "Account was cereated with google auth create a password or login with google",
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Invalid email/username or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { password: _, ...rest } = user;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: rest,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const LoginwithGoogle = async (req: Request, res: Response) => {
  const { email, name, image } = req.body;

  try {
    let user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      if (!user.imageurl) {
        await prisma.user.update({
          where: {
            email,
          },
          data: {
            imageurl: image,
          },
        });
      }
    }

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          imageurl: image ? image : "./faceemoji",
          fullName: name,
          username: email.split("@")[0],
          verified: true,
        },
      });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { password: _, ...rest } = user;
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: rest,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export { Register, VerifyOtp, Login, LoginwithGoogle };
