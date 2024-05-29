import { Router } from "express";
import {
  Register,
  VerifyOtp,
  Login,
  LoginwithGoogle,
} from "../controllers/user.controller";

const userrouter = Router();

userrouter.post("/auth/register", Register);
userrouter.post("/auth/verify-otp", VerifyOtp);
userrouter.post("/auth/login", Login);
userrouter.post("/auth/google", LoginwithGoogle);

export { userrouter };
