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
  firstName: z.string().min(3, {
    message: "Full name is required",
  }),
  lastName: z.string().min(3, {
    message: "lastname is required",
  }),
  username: z.string().min(3, {
    message: "username is required",
  }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
