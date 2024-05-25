import { Router } from "express";
import {
  Register,
  VerifyOtp,
  Login,
  LoginwithGoogle,
} from "../controllers/user.controller";

const router = Router();

router.post("/auth/register", Register);
router.post("/auth/verify-otp", VerifyOtp);
router.post("/auth/login", Login);
router.post("/auth/google", LoginwithGoogle);

export { router };
