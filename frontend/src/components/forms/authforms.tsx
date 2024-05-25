/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState } from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { LoginWithGoggle } from "@/modules/auth";
import { LoginSchema, RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import Link from "next/link";
import { Eye, EyeSlash } from "iconsax-react";
import { useStateCtx } from "@/context/StateCtx";
import { OtpModal } from "@/components/modals";
import { User } from "@/types";

const Data: User = {
  email: "ayomikuntemitope246@gmail.com",
  imageUrl: "/",
  username: "phoenix",
  fullName: "ayomikun temitope",
};

const LoginForm = () => {
  const { toast } = useToast();
  const [defaultInpType, setDefaultInpType] = useState<"password" | "text">(
    "password"
  );
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });
  return (
    <div className="flex flex-col grow md:px-5 py-20 mt-8 w-full text-base font-bold leading-6 bg-dark-background dark:bg-background rounded-t-[35px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-center text-4xl font-medium leading-6 text-dark-copy dark:text-copy capitalize">
        welcome back
      </h2>
      <p className="self-center mt-4 text-right text-dark-copy dark:text-copy">
        Please login to continue
      </p>
      <Form {...form}>
        <form
          action=""
          className="flex flex-col mt-8 gap-y-6 md:gap-y-6 "
          //   onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="identifier"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      id="identifier"
                      type="text"
                      className="block px-2.5 pb-2.5 placeholder:dark:text-background placeholder:text-dark-background pt-4 w-full  text-sm text-dark-copy dark:text-copy rounded-lg border border-background dark:border-dark-background h-[56px] dark:focus:border-primary focus:border-secondary focus:outline-none focus:ring-0 peer"
                      placeholder="email | username"
                    />
                    <FormLabel
                      htmlFor="identifier"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:bg-transparent transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:dark:bg-background dark:bg-background peer-focus:bg-dark-background bg-dark-background px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                    >
                      Email | Username
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex w-full relative items-center">
                    <div className="relative w-full">
                      <Input
                        {...field}
                        id="password"
                        type={defaultInpType}
                        className="block px-2.5 pb-2.5 placeholder:dark:text-background placeholder:text-dark-background pt-4 w-full  text-sm text-dark-copy dark:text-copy rounded-lg border border-background dark:border-dark-background h-[56px] dark:focus:border-primary focus:border-secondary focus:outline-none focus:ring-0 peer"
                        placeholder="email | username"
                      />
                      <FormLabel
                        htmlFor="password"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:bg-transparent transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:dark:bg-background dark:bg-background peer-focus:bg-dark-background bg-dark-background px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                      >
                        Password
                      </FormLabel>
                      <span className="absolute right-2 top-4">
                        {defaultInpType === "text" ? (
                          <Eye
                            color="#777"
                            onClick={() => setDefaultInpType("password")}
                          />
                        ) : (
                          <EyeSlash
                            color="#777"
                            onClick={() => setDefaultInpType("text")}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="mb-4 text-xs dark:text-dark-background text-background">
            Forgot password?{" "}
            <Link
              href="/auth/forgot-password"
              className="text-primary-light dark:text-secondary-light font-medium"
            >
              Reset
            </Link>
          </span>
          <div className="flex relative items-center [perspective:300px] transform-gpu max-sm:w-full">
            <Button className="rounded-full w-full h-[56px] font-medium font-worksans flex space-x-2 text-[16px] bg-background dark:bg-dark-background dark:text-dark-copy hover:bg-foreground hover:dark:bg-dark-foreground text-copy">
              Login
            </Button>
          </div>
        </form>
      </Form>
      <div className="seperator flex items-center space-x-2 my-4">
        <div className="seperate h-[1px] dark:bg-dark-background bg-background w-full" />
        <h4 className="text-dark-copy dark:text-copy"> Or</h4>
        <div className="seperate h-[1px] dark:bg-dark-background bg-background w-full" />
      </div>
      <LoginWithGoggle />
      <span className="mt-5 md:mt-8 text-sm relative block text-center text-dark-copy dark:text-copy z-10">
        Don&apos;t have an account?
        <Link href="/auth/signup" className="ml-1 underline font-medium">
          Sign up
        </Link>
      </span>
    </div>
  );
};

const SignUpform = () => {
  const { toast } = useToast();
  const [defaultInpType, setDefaultInpType] = useState<"password" | "text">(
    "password"
  );
  const { ShowOtp, setShowOtp } = useStateCtx();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      passwordConfirm: "",
      fullName: "",
    },
  });
  return (
    <div className="flex flex-col grow md:px-5 py-20 mt-8 w-full text-base font-bold leading-6 bg-dark-background dark:bg-background rounded-t-[35px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-center text-4xl font-medium leading-6 text-dark-copy dark:text-copy capitalize">
        welcome back
      </h2>
      <p className="self-center mt-4 text-right text-dark-copy dark:text-copy">
        Please login to continue
      </p>
      <Form {...form}>
        <form
          action=""
          className="flex flex-col mt-8 gap-y-6 md:gap-y-6 "
          //   onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      id="fullName"
                      type="text"
                      className="block px-2.5 pb-2.5 placeholder:dark:text-background placeholder:text-dark-background pt-4 w-full  text-sm text-dark-copy dark:text-copy rounded-lg border border-background dark:border-dark-background h-[56px] dark:focus:border-primary focus:border-secondary focus:outline-none focus:ring-0 peer"
                      placeholder="email | username"
                    />
                    <FormLabel
                      htmlFor="identifier"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:bg-transparent transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:dark:bg-background dark:bg-background peer-focus:bg-dark-background bg-dark-background px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                    >
                      FullName
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      id="fullName"
                      type="email"
                      className="block px-2.5 pb-2.5 placeholder:dark:text-background placeholder:text-dark-background pt-4 w-full  text-sm text-dark-copy dark:text-copy rounded-lg border border-background dark:border-dark-background h-[56px] dark:focus:border-primary focus:border-secondary focus:outline-none focus:ring-0 peer"
                      placeholder="email | username"
                    />
                    <FormLabel
                      htmlFor="identifier"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:bg-transparent transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:dark:bg-background dark:bg-background peer-focus:bg-dark-background bg-dark-background px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                    >
                      Email
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      id="fullName"
                      type="text"
                      className="block px-2.5 pb-2.5 placeholder:dark:text-background placeholder:text-dark-background pt-4 w-full  text-sm text-dark-copy dark:text-copy rounded-lg border border-background dark:border-dark-background h-[56px] dark:focus:border-primary focus:border-secondary focus:outline-none focus:ring-0 peer"
                      placeholder="email | username"
                    />
                    <FormLabel
                      htmlFor="identifier"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:bg-transparent transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:dark:bg-background dark:bg-background peer-focus:bg-dark-background bg-dark-background px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                    >
                      Username
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex w-full relative items-center">
                    <div className="relative w-full">
                      <Input
                        {...field}
                        id="password"
                        type={defaultInpType}
                        className="block px-2.5 pb-2.5 placeholder:dark:text-background placeholder:text-dark-background pt-4 w-full  text-sm text-dark-copy dark:text-copy rounded-lg border border-background dark:border-dark-background h-[56px] dark:focus:border-primary focus:border-secondary focus:outline-none focus:ring-0 peer"
                        placeholder="email | username"
                      />
                      <FormLabel
                        htmlFor="password"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:bg-transparent transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:dark:bg-background dark:bg-background peer-focus:bg-dark-background bg-dark-background px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                      >
                        Password
                      </FormLabel>
                      <span className="absolute right-2 top-4">
                        {defaultInpType === "text" ? (
                          <Eye
                            color="#777"
                            onClick={() => setDefaultInpType("password")}
                          />
                        ) : (
                          <EyeSlash
                            color="#777"
                            onClick={() => setDefaultInpType("text")}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex w-full relative items-center">
                    <div className="relative w-full">
                      <Input
                        {...field}
                        id="password"
                        type={defaultInpType}
                        className="block px-2.5 pb-2.5 placeholder:dark:text-background placeholder:text-dark-background pt-4 w-full  text-sm text-dark-copy dark:text-copy rounded-lg border border-background dark:border-dark-background h-[56px] dark:focus:border-primary focus:border-secondary focus:outline-none focus:ring-0 peer"
                        placeholder="email | username"
                      />
                      <FormLabel
                        htmlFor="password"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:bg-transparent transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:dark:bg-background dark:bg-background peer-focus:bg-dark-background bg-dark-background px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-3"
                      >
                        Confirm Password
                      </FormLabel>
                      <span className="absolute right-2 top-4">
                        {defaultInpType === "text" ? (
                          <Eye
                            color="#777"
                            onClick={() => setDefaultInpType("password")}
                          />
                        ) : (
                          <EyeSlash
                            color="#777"
                            onClick={() => setDefaultInpType("text")}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="mb-4 text-xs dark:text-dark-background text-background">
            Forgot password?{" "}
            <Link
              href="/auth/forgot-password"
              className="text-primary-light dark:text-secondary-light font-medium"
            >
              Reset
            </Link>
          </span>
          <div className="flex relative items-center [perspective:300px] transform-gpu max-sm:w-full">
            <Button
              onClick={() => setShowOtp(true)}
              type="button"
              className="rounded-full w-full h-[56px] font-medium font-worksans flex space-x-2 text-[16px] bg-background dark:bg-dark-background dark:text-dark-copy hover:bg-foreground hover:dark:bg-dark-foreground text-copy"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
      <div className="seperator flex items-center space-x-2 my-4">
        <div className="seperate h-[1px] dark:bg-dark-background bg-background w-full" />
        <h4 className="text-dark-copy dark:text-copy"> Or</h4>
        <div className="seperate h-[1px] dark:bg-dark-background bg-background w-full" />
      </div>
      <LoginWithGoggle />
      <span className="mt-5 md:mt-8 text-sm relative block text-center text-dark-copy dark:text-copy z-10">
        Alreaady have an account?
        <Link href="/auth/login" className="ml-1 underline font-medium">
          Login
        </Link>
      </span>
      <OtpModal {...Data} />
    </div>
  );
};

export { LoginForm, SignUpform };
