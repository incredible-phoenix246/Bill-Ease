"use client";

import React from "react";
import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import { LoginForm, SignUpform } from "@/components/forms/authforms";

const Registger = () => {
  return (
    <section className="bg-background dark:bg-dark-background flex flex-col justify-center">
      <div className="overflow-hidden md:container flex gap-5 max-md:flex-col max-md:gap-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col w-[54%] max-md:w-full px-7 md:px-0"
        >
          <div className="flex flex-col items-start my-auto max-md:mt-10 max-md:w-full justify-start">
            <Image src="/logo.png" alt="logo" width={260} height={75} />
            <div className="flex flex-col mt-9 font-bold text-copy dark:text-dark-copy">
              <h1 className="text-5xl tracking-[2.4px] max-md:text-4xl font-montserrat">
                Hey, Hello!
              </h1>
              <h2 className="mt-8 text-2xl tracking-wider max-md:mr-2.5 font-worksans">
                welcome to bill ease
              </h2>
            </div>
            <p className="mt-8 text-base font-medium tracking-wider max-w-[496px] text-copy dark:text-dark-copy max-md:mt-10 max-md:max-w-full">
              BillEase is a versatile application designed to streamline the
              creation of receipts, invoices, and various payment-related
              documents.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col w-full md:w-[46%] max-md:ml-0 max-md:w-full md:max-w-[416px] mb-7"
        >
          <SignUpform />
        </motion.div>
      </div>
    </section>
  );
};

const Login = () => {
  return (
    <section className="bg-background dark:bg-dark-background flex flex-col justify-center">
      <div className="overflow-hidden md:container flex gap-5 max-md:flex-col max-md:gap-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex-col w-[54%] max-md:w-full px-7 md:px-0 md:hidden flex"
        >
          <div className="flex flex-col my-auto max-md:mt-10 max-md:w-full">
            <Image src="/logo.png" alt="logo" width={260} height={75} />
            <div className="flex flex-col mt-9 font-bold text-copy dark:text-dark-copy">
              <h1 className="text-5xl tracking-[2.4px] max-md:text-4xl font-montserrat">
                Hey, Hello!
              </h1>
              <h2 className="mt-8 text-2xl tracking-wider max-md:mr-2.5 font-worksans">
                welcome to bill ease
              </h2>
            </div>
            <p className="mt-8 text-base font-medium tracking-wider max-w-[496px] text-copy dark:text-dark-copy max-md:mt-10 max-md:max-w-full">
              BillEase is a versatile application designed to streamline the
              creation of receipts, invoices, and various payment-related
              documents.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col w-full md:w-[46%] max-md:ml-0 max-md:w-full md:max-w-[416px] mb-7"
        >
          <LoginForm />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex-col w-[54%] max-md:w-full px-7 md:px-0 hidden md:flex"
        >
          <div className="flex flex-col items-end justify-end my-auto max-md:mt-10 max-md:w-full">
            <Image src="/logo.png" alt="logo" width={260} height={75} />
            <div className="flex flex-col mt-9 font-bold text-copy dark:text-dark-copy">
              <h1 className="text-5xl tracking-[2.4px] max-md:text-4xl font-montserrat">
                Hey, Hello!
              </h1>
              <h2 className="mt-8 text-2xl tracking-wider max-md:mr-2.5 font-worksans">
                welcome to bill ease
              </h2>
            </div>
            <p className="mt-8 text-base font-medium tracking-wider max-w-[496px] text-copy dark:text-dark-copy max-md:mt-10 max-md:max-w-full">
              BillEase is a versatile application designed to streamline the
              creation of receipts, invoices, and various payment-related
              documents.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Registger, Login };
