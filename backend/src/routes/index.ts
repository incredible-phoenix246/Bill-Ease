import { Router } from "express";
import { sayHelloController } from "../controllers";
import { Register, VerifyOtp, Login } from "../controllers/user.controller";

const router = Router();

router.get("/", sayHelloController);
router.post("/register", Register);
router.post("/verify-otp", VerifyOtp);
router.post("/login", Login);

export { router };
