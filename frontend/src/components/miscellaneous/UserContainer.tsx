"use client";

import { cn, shrinkString } from "@/utils";
import { Logout, Setting, User } from "iconsax-react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { DropdownButton } from "./dropdownlink";
import { useSession } from "next-auth/react";

const UserContainer = () => {
  const { data: session } = useSession();
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div
      role="button"
      className="w-full max-w-[50px] lg:max-w-[215px] h-[52px] flex items-center gap-x-1 justify-center lg:justify-between p-1 lg:px-2 lg:py-[6px] rounded-full border border-soft-border dark:border-success/20 relative "
    >
      <button
        type="button"
        aria-haspopup
        aria-label="Open user menu"
        aria-expanded={openProfile}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpenProfile((prev) => !prev);
            return;
          }
        }}
        onClick={() => setOpenProfile((prev) => !prev)}
        tabIndex={0}
        className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
      >
        <Image
          // @ts-ignore
          src={session?.user?.imageurl}
          alt="user"
          height={38}
          width={38}
          className="rounded-full object-contain max-sm:scale-110"
        />
      </button>
      <div
        onClick={() => setOpenProfile((prev) => !prev)}
        className="hidden lg:flex flex-col  items-end"
      >
        <span className="text-header dark:text-gray-300 font-inter">
          {/*  @ts-ignore */}
          {shrinkString({ str: session?.user?.username, len: 10 })}
        </span>
        <span className="text-sm text-[#787486] dark:text-gray-400">
          {/* @ts-ignore */}
          {shrinkString({ str: session?.user?.email, len: 10 })}
        </span>
      </div>
      <button
        type="button"
        aria-haspopup
        aria-label="Open user menu"
        aria-expanded={openProfile}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpenProfile((prev) => !prev);
            return;
          }
        }}
        onClick={() => setOpenProfile((prev) => !prev)}
        tabIndex={0}
        className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success hidden lg:inline-block"
      >
        <ChevronDown
          className={cn(
            "text-main-sec dark:text-gray-300 transition-all transform-gpu duration-300",
            openProfile ? "rotate-180" : ""
          )}
        />
      </button>
      {openProfile && (
        <div
          className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99] opacity-0 bg-black/25 cursor-default"
          role="dialog"
          onClick={() => setOpenProfile(!openProfile)}
        />
      )}
      <div
        role="dialog"
        className={cn(
          " absolute max-h-max border dark:border-success/80 p-4 border-border  w-[220px] top-16 right-1 z-[999] dark:bg-dark-foreground  bg-foreground backdrop-blur-xl flex flex-col gap-y-2   justify-between  shadow-[0_10px_40px_rgba(0,0,0,0.23)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-gradient-to-tl dark:from-transparent dark:via-transparent dark:to-success from-foreground  to-white before:overflow-hidden before:-top-2 before:rotate-[45deg] before:right-4 before:z-[-1] transform-gpu transition-all ",
          openProfile
            ? "opacity-100 h-[200px] duration-500 "
            : "opacity-0 h-0 duration-200 overflow-hidden pointer-events-none"
        )}
      >
        <div className="flex items-center  gap-x-2     w-full pb-2 backdrop-blur-sm border-b border-gray-300 dark:border-success/50">
          <Image
            // @ts-ignore
            src={session?.user?.imageurl}
            alt="user"
            height={70}
            width={70}
            className="rounded-full object-contain object-center "
          />

          <div className="flex flex-col items-start">
            <span
              className={cn(
                "text-header dark:text-dark-copy text-sm font-semibold dark:hover:bg-color-dark/20  "
              )}
            >
              {/*  @ts-ignore */}
              {shrinkString({ str: session?.user?.username, len: 10 })}
            </span>
            <span
              className={cn(
                "text-header dark:text-text-dark-copy text-sm  dark:hover:bg-color-dark/20  "
              )}
            >
              {/* @ts-ignore */}
              {shrinkString({ str: session?.user?.email, len: 10 })}
            </span>
          </div>
        </div>

        <DropdownButton
          icon={<User size={18} className="text-gray-400 dark:text-success " />}
          text="My Profile"
        />
        <DropdownButton
          icon={
            <Setting size={18} className="text-gray-400 dark:text-success " />
          }
          text="Account Settings"
        />
        <DropdownButton
          icon={
            <Logout size={18} className="text-gray-400 dark:text-success " />
          }
          text="Logout"
        />
      </div>
    </div>
  );
};

export { UserContainer };
