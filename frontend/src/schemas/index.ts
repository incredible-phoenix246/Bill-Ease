import * as z from "zod";

export const LoginSchema = z.object({
  identifier: z.string().min(3, {
    message: "Feild is required",
  }),
  password: z.string().min(3, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full name is required",
  }),

  username: z.string().min(3, {
    message: "username is required",
  }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  passwordConfirm: z.string().min(5, {
    message: "Password confirmation must be at least 5 characters long",
  }),
});

export const OtpSchema = z.object({
  otp: z.string(),
});
