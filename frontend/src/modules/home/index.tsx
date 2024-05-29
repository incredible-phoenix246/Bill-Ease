"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "iconsax-react";
import { cn } from "@/utils";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="bg-background dark:bg-dark-background flex flex-col justify-center">
      <div className="overflow-hidden container w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 md:py-7">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-[55%]  max-md:w-full"
          >
            <div className="flex flex-col items-start max-md:mt-10 max-md:max-w-full text-center md:text-start">
              <h1 className=" text-6xl font-semibold tracking-wider dark:text-background w-[495px] max-md:max-w-full max-md:text-4xl text-dark-background">
                Bill Ease
              </h1>
              <p className="mt-8  text-2xl leading-8 dark:text-background w-[495px] max-md:max-w-full text-dark-background">
                BillEase is a versatile application designed to streamline the
                creation of receipts, invoices, and various payment-related
                documents. Whether you&apos;re a small business owner,
                freelancer, or enterprise,
              </p>
              <Button className="bg-primary h-[56] hover:bg-primary-light text-primary-content mt-8 dark:bg-secondary dark:text-secondary-content">
                Get started
              </Button>
            </div>
            <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {desc.map((desc) => (
                  <HomeCard
                    description={desc.description}
                    key={desc.key}
                    cardKey={desc.key}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-[45%] max-md:w-full mt-7 md:mt-0 relative"
          >
            <div className="relative items-center justify-center flex w-full h-full">
              <Image
                src="/innerframe.png"
                alt="frame"
                height={584}
                width={584}
                className="max-w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const desc = [
  {
    key: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.",
  },
  {
    key: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.",
  },
  {
    key: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.",
  },
];

const HomeCard = ({
  description,
  cardKey,
}: {
  description: string;
  cardKey: number;
}) => (
  <div
    key={cardKey}
    className="flex px-4 py-6 w-full text-base font-light leading-6 backdrop-blur-[2px] rounded-[32px] dark:text-background max-md:mt-6 box"
  >
    <div className="flex flex-col w-full h-full content">
      <div
        className={cn(
          "h-[48px] w-[48px] rounded-full flex items-center justify-center self-start",
          cardKey === 1
            ? "bg-[#685FD4]/45"
            : cardKey === 2
            ? "bg-[#F2C94C]/45"
            : "bg-[#8AB2DC]/45"
        )}
      >
        <Heart
          size="32"
          variant="Bold"
          color={
            cardKey === 1 ? "#685FD4" : cardKey === 2 ? "#F2C94C" : "#8AB2DC"
          }
        />
      </div>
      <p className="mt-8">{description}</p>
    </div>
  </div>
);

const BehindBIllEase = () => {
  return (
    <section className="bg-background dark:bg-dark-background overflow-hidden">
      <div className="py-8 px-4 mx-auto container lg:py-16 lg:px-6 ">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-montserrat">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classNamees from Tailwind
          </p>
        </motion.div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="items-center bg-foreground border-border rounded-lg shadow sm:flex dark:bg-dark-foreground dark:border-dark-border overflow-hidden"
          >
            <Image
              src="/phoenix.jpg"
              alt="phoenix"
              width={300}
              height={400}
              className="md:h-[240px] md:w-[240px] object-cover rounded-lg w-full overflow-hidden"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold tracking-normal text-dark-background dark:text-background font-poppins">
                Phoenix
              </h3>
              <span className="text-copy light dark:text-dark-copy-light">
                Full-Stack Developer
              </span>
              <p className="mt-2 mb-2 font-light text-copy light dark:text-dark-copy-light">
                Passionate about cyber security | Crafting secure code and
                innovative software solutions 💻 | Defending digital realms one
                line at a time 🛡️
              </p>
              <div className="flex w-full items-center justify-between">
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>

                <Link href="/" className="mt-5 bottom-0 justify-end">
                  View Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="items-center bg-foreground border-border rounded-lg shadow sm:flex dark:bg-dark-foreground dark:border-dark-border overflow-hidden"
          >
            <Image
              src="/phoenix.jpg"
              alt="phoenix"
              width={300}
              height={400}
              className="md:h-[240px] md:w-[240px] object-cover rounded-lg w-full overflow-hidden"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold tracking-normal text-dark-background dark:text-background font-poppins">
                George
              </h3>
              <span className="text-copy light dark:text-dark-copy-light">
                Web Developer
              </span>
              <p className="mt-3 mb-4 font-light text-copy light dark:text-dark-copy-light">
                A Curious Frontend Developer 💻 from Lagos, you get !!!
              </p>
              <div className="flex w-full items-center justify-between">
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>

                <Link href="/" className="mt-5 bottom-0 justify-end">
                  View Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-background dark:bg-dark-background"
    >
      <div className=" container px-4 sm:px-6 lg:px-8">
        <div className="w-full items-center justify-center flex flex-col">
          <Image
            src="/logo.png"
            alt="logo"
            width={140}
            height={50}
            className="flex justify-center self-center"
          />
          <div className="py-8 text-center">
            <h3 className="font-manrope text-3xl  text-copy dark:text-dark-copy font-bold mb-4">
              Digitize your pamyents collection
            </h3>
            <p className="text-copy-light dark:text-dark-copy-light">
              Joined over 15+ Developers already growing with BillEase.
              what&apos;s holding you back?
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Button asChild className="rounded-full" variant="outline">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link href="/auth/signup">Get started</Link>
            </Button>
          </div>
        </div>
        <div className="py-7 mt-5 border-t border-border dark:border-dark-border">
          <div className="flex items-center justify-center flex-col gap-7 lg:justify-between lg:flex-row">
            <span className="text-sm text-copy dark:text-dark-copy ">
              &copy; {currentYear} BillEase 2024, All rights reserved.
            </span>
            <ul className="flex items-center text-sm text-copy dark:text-dark-copy gap-9">
              <li>
                <Link href="/">Terms</Link>
              </li>
              <li>
                <Link href="/">Privacy</Link>
              </li>
              <li>
                <Link href="/">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export { HomePage, BehindBIllEase, CTA };
