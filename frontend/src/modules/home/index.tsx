"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "iconsax-react";
import { cn } from "@/utils";

const HomePage = () => {
  return (
    <section className="bg-background dark:bg-dark-background flex flex-col justify-center">
      <div className="overflow-hidden container w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-[55%]  max-md:w-full"
          >
            <div className="flex flex-col items-start mt-28 max-md:mt-10 max-md:max-w-full">
              <h1 className=" text-6xl font-semibold tracking-wider dark:text-background w-[495px] max-md:max-w-full max-md:text-4xl text-dark-background">
                Bill Ease
              </h1>
              <p className="mt-8  text-2xl leading-8 dark:text-background w-[495px] max-md:max-w-full text-dark-background">
                BillEase is a versatile application designed to streamline the
                creation of receipts, invoices, and various payment-related
                documents. Whether you're a small business owner, freelancer, or
                enterprise,
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
            className="flex flex-col w-[45%] max-md:w-full mt-7 relative"
          >
            {/* <div className="h-full w-full absolute hidden md:block top-0 object-cover">
              <Image
                src="/hero-frame.png"
                alt="frame"
                height={754}
                width={594}
                className="max-w-full dark:invert"
              />
            </div> */}
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
export { HomePage };
