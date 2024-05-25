"use server";

import { LoginSchema, RegisterSchema } from "@/schemas";
import * as z from "zod";
import { baseurl } from "@/utils";
import Calls from "./axios";

const $Http = Calls(baseurl);

const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Login Failed. Please check your email and password.",
    };
  }

  const { identifier, password } = validatedFields.data;

  const loginvalues = { identifier, password };

  try {
    const res = await $Http.post("/auth/login", loginvalues);
  } catch (error) {
    return {
      error: "Something went wrong.",
    };
  }
};

const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Login Failed. Please check your email and password.",
    };
  }

  const { email, fullName, username, password, passwordConfirm } =
    validatedFields.data;

  if (password !== passwordConfirm) {
    return {
      error: "Password and Confirm Password do not match.",
    };
  }

  const userdata = { email, fullName, username, password };

  try {
    const res = await $Http.post("/auth/register", userdata);
    console.log(res);
  } catch (error) {
    return {
      error: "Something went wrong.",
    };
  }
};

export { login, register };
