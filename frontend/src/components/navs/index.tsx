"use client";

import React from "react";
import useWindowHeight from "@/hooks/useDimension";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const UnAuthenticatedHeader = () => {
  const scrollHeight = useWindowHeight();

  return (
    <nav
      className={cn(
        "max-[500px]:py-2 py-4 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center  transition-colors duration-500 bg-background dark:bg-dark-background",
        scrollHeight > 100
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-background/90 py-1 border-b border-border dark:border-dark-border shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-white-100/60 dark:bg-dark-six ":
            scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px] font-montserrat",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image src="/logo.png" alt="logo" width={140} height={50} />
      </Link>
    </nav>
  );
};

export { UnAuthenticatedHeader };
