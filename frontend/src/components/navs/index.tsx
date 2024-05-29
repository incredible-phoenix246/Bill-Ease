"use client";

import React, { useEffect, useState } from "react";
import useWindowHeight from "@/hooks/useDimension";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useStateCtx } from "@/context/StateCtx";
import { handleMouseEnter } from "@/utils/text-effect";
import { usePathname } from "next/navigation";
import { SearchBox } from "../miscellaneous/searchinput";
import { Calendar, HambergerMenu, Notification } from "iconsax-react";
import { UserContainer } from "../miscellaneous/UserContainer";

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
      <div className="md:text-base text-xs font-semibold items-center justify-between md:gap-4 hidden md:flex py-4  ">
        <div className="flex gap-7">
          <Button asChild className="px-4 py-2">
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button asChild className="px-4 py-2">
            <Link href="/auth/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

const AuthenticatedNav = () => {
  const pathname = usePathname();
  const { openSidebar, setOpenSidebar } = useStateCtx();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = pathname?.replace(/^\/([^\/]+).*$/, "$1");
    setActiveLink(currentPath.trim());
  }, [pathname]);

  return (
    <>
      <nav className=" w-full flex items-center justify-between px-2 md:px-4 py-2 md:py-[18px] md:h-[88px] border-b-border border-b dark:border-success/40 relative">
        <button
          type="button"
          aria-haspopup
          aria-label="Open sidebar menu"
          aria-expanded={openSidebar}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setOpenSidebar(true);
              return;
            }
          }}
          onClick={() => setOpenSidebar(true)}
          tabIndex={0}
          className="focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success min-[900px]:hidden mr-4 h-10 w-10 relative z-50 "
        >
          <HambergerMenu className="text-copy dark:text-dark-copy h-full w-full " />
        </button>
        <div className="flex w-full max-w-[30%]">
          <h2
            onMouseEnter={handleMouseEnter}
            className="text-[20px] font-semibold text-copy dark:text-dark-copy capitalize"
            data-value={activeLink}
          >
            {activeLink}
          </h2>
        </div>
        <div className="flex items-center  w-full justify-end gap-x-3 md:gap-x-5">
          <SearchBox />
          <span className="border border-soft-light dark:border-success/20  flex justify-center items-center rounded-full max-w-[30px] h-[30px] md:h-10 w-full md:max-w-[40px]">
            <Notification className="text-black dark:text-success md:w-5 md:h-5 w-4 h-4" />
          </span>
          <UserContainer />
        </div>
      </nav>
    </>
  );
};

export { UnAuthenticatedHeader, AuthenticatedNav };
