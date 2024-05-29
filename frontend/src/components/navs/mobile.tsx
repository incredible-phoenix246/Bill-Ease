/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React from "react";
import { cn } from "@/utils";
import Link from "next/link";
import { CloseSquare } from "iconsax-react";
import { useStateCtx } from "@/context/StateCtx";
import { Button } from "../ui/button";

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  return (
    <>
      <div
        className={cn(
          "lg:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20 transition-all duration-300",
          showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMobileMenu(false)}
      />
      <nav
        className={cn(
          "pt-20 lg:hidden  px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full max-w-[300px] sm:max-w-[60%] md:max-w-[50%] justify-between items-center bg-foreground dark:bg-dark-foreground backdrop-blur-lg fixed right-0 top-0 z-50 h-screen transition-all opacity-0",
          showMobileMenu
            ? "translate-x-0 duration-1000 opacity-100"
            : "translate-x-full duration-300"
        )}
      >
        <button
          autoFocus
          aria-label="close menu"
          type="button"
          className="outline-none dark:text-dark-copy text-success text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full flex justify-center items-center"
          onClick={() => setShowMobileMenu(false)}
          tabIndex={0}
        >
          <CloseSquare size="32" variant="Broken" />
        </button>
        <div className="flex flex-col  items-start h-full gap-y-10 ">
          <div className="w-[267px] h-16 p-2 justify-center items-center gap-4 lg:flex-row flex flex-col mt-20  lg:mt-0 z-20">
            <div className="justify-center items-center lg:w-auto w-[100%] gap-2 lg:flex-row flex flex-col">
              <Button
                asChild
                className="rounded-full"
                variant="outline"
                onClick={() => setShowMobileMenu(false)}
              >
                <Link href="/auth/sign-in">Login</Link>
              </Button>

              <Button
                asChild
                className="rounded-full"
                onClick={() => setShowMobileMenu(false)}
              >
                <Link href="/auth/signup">Get started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
