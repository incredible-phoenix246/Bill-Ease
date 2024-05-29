"use client";

import Image from "next/image";
import { SIDEBAR_FOO_LINKS, SIDEBAR_LINKS } from "@/constants";
import { useState, useEffect, useRef } from "react";
import { cn, shrinkString } from "@/utils";
import { LogoutCurve, Setting2 } from "iconsax-react";
import Link from "next/link";
import { ThemeButton } from "../theme";
import { useStateCtx } from "@/context/StateCtx";
import { handleMouseEnter } from "@/utils/text-effect";
import { ChevronLeftCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const SideBar = () => {
  const pathname = usePathname();
  const { openSidebar, setOpenSidebar } = useStateCtx();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = pathname?.replace(/^\/([^\/]+).*$/, "$1");

    setActiveLink(currentPath.trim());
  }, [pathname]);

  return (
    <>
      <div
        className={cn(
          "fixed min-h-screen w-full bg-black/50  min-[900px]:bg-black/10 dark:min-[900px]:bg-black/5 top-0 left-0 z-[99] transition-all duration-300 overflow-hidden",
          openSidebar ? "opacity-100" : "opacity-0 pointer-events-none "
        )}
        onClick={() => setOpenSidebar(false)}
      />
      <section
        className={cn(
          "bg-foreground dark:bg-dark-foreground  border-r-border dark:border-success/40 z-[100]  transition-all duration-300 py-5 min-[900px]:flex flex-col gap-y-4 justify-between fixed lg:sticky min-h-screen left-0 top-0  border-r border-gray-200  sidebar-scroll select-none ",
          openSidebar
            ? "w-[270px]  items-start flex translate-x-0 z-[99]"
            : "min-[900px]:w-[80px]  items-center   -translate-x-full min-[900px]:translate-x-0"
        )}
      >
        <button
          type="button"
          tabIndex={0}
          aria-label="close sidebar"
          onClick={() => setOpenSidebar(false)}
          className={cn(
            "absolute -right-2 transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 w-[24px]text-light dark:text-success bg-white dark:bg-dark-foreground rounded-full z-[9999]",
            {
              "opacity-0 duration-300": !openSidebar,
            }
          )}
        >
          <ChevronLeftCircle stroke="currentColor" className="" />
        </button>
        <div
          className={cn(
            "flex flex-col gap-y-2 sm:gap-y-4  w-full  relative group-hover:items-start group-hover:pl-4 transition-all duration-300",
            openSidebar ? "pl-4 delay-100" : "items-center "
          )}
        >
          <Link
            href="/"
            className=" w-10  h-10 mb-5 flex items-center transition-all duration-300"
          >
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
            <span
              onMouseEnter={handleMouseEnter}
              data-value="Bill Ease"
              className={cn(
                "pointer-events-none opacity-0 group-hover:block w-[150px] font-bold uppercase text-xl tracking-wide dark:text-dark-copy text-left pl-4 lg:pl-6 transition-all duration-0 whitespace-nowrap",
                openSidebar &&
                  "opacity-100 duration-300 delay-100 pointer-events-auto"
              )}
            >
              Bill Ease
            </span>
          </Link>
          {SIDEBAR_LINKS.map((link) => (
            <Button
              asChild
              type="button"
              role="link"
              aria-current={activeLink === link.link ? "page" : undefined}
              key={link.id}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveLink(link.link);
                  return;
                }
              }}
              tabIndex={0}
              aria-label={link.label}
              onClick={() => {
                setActiveLink(link.link);
                setOpenSidebar(false);
              }}
              className={cn(
                "flex items-center justify-center bg-transparent dark:bg-transparent shadow-none h-10 w-full text-copy dark:text-dark-copy font-medium text-base transition-colors duration-300 cursor-pointer relative before:content-[''] before:absolute before:right-0 before:h-[21px] before:w-[3px] dark:before:bg-foreground  before:bg-dark-foreground before:rounded-tl-md before:rounded-bl-md  before:transition-all before:duration-300 group/btn z-10",
                activeLink === link.link
                  ? "[&>span]:font-semibold before:opacity-100 bg-border dark:bg-dark-border dark:text-copy-lighter  text-copy-lighter rounded outline-none"
                  : " before:opacity-0 before:hover:opacity-30 dark:before:hover:opacity-50 hover:bg-dark-foreground/20 dark:hover:bg-foreground/20 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
              )}
            >
              <Link href={link.link}>
                <link.icon
                  size={24}
                  aria-hidden
                  variant={activeLink === link.link ? "Bulk" : "Broken"}
                />
                <span
                  className={cn(
                    "hidden group-hover:inline cursor-no-drop w-[150px] font-medium text-left pl-4 lg:pl-6",
                    openSidebar && "inline pointer-events-none"
                  )}
                >
                  {link.label}
                </span>
                <span
                  className={cn(
                    "absolute max-[450px]:hidden left-16  max-w-max w-[120px] z-10 bg-success/90 text-white rounded-md text-xs px-2 py-1  before:content-[''] backdrop-blur-xl before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:-rotate-45 before:bg-gradient-to-tl from-transparent via-success/70 to-success transform-gpu translate-x-8 opacity-0 transition-all duration-500 group-hover/btn:opacity-100 group-hover/btn:translate-x-5 pointer-events-none group-hover:translate-x-52 group-hover:group-hover/btn:translate-x-48",
                    {
                      "translate-x-52 group-hover/btn:translate-x-48":
                        openSidebar,
                    }
                  )}
                >
                  {shrinkString({
                    str: link.label,
                    len: 17,
                  })}
                </span>
              </Link>
            </Button>
          ))}
          <div
            className={cn(
              "group-hover:w-full  transition-transform duration-300 group-hover:flex justify-center ",
              openSidebar ? " -rotate-90 w-full -translate-x-10 flex" : ""
            )}
          >
            <ThemeButton />
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col gap-y-2 sm:gap-y-4  w-full  relative group-hover:items-start group-hover:pl-4 transition-all duration-300",
            openSidebar ? "pl-4" : "items-center "
          )}
        >
          {SIDEBAR_FOO_LINKS.map((link) => (
            <Button
              type="button"
              role="link"
              key={link.id}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveLink(link.link);
                  return;
                }
              }}
              tabIndex={0}
              aria-label={link.label}
              className={cn(
                "flex items-center justify-center bg-transparent dark:bg-transparent shadow-none h-10 w-full text-copy dark:text-dark-copy font-medium text-base transition-colors duration-300 cursor-pointer relative before:content-[''] before:absolute before:right-0 before:h-[21px] before:w-[3px] dark:before:bg-foreground  before:bg-dark-foreground before:rounded-tl-md before:rounded-bl-md  before:transition-all before:duration-300 group/btn z-10",
                activeLink === link.link
                  ? "[&>span]:font-semibold before:opacity-100 bg-border dark:bg-dark-border dark:text-copy-lighter  text-copy-lighter rounded outline-none"
                  : " before:opacity-0 before:hover:opacity-30 dark:before:hover:opacity-50 hover:bg-dark-foreground/20 dark:hover:bg-foreground/20 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
              )}
              onClick={() => {
                if (link.link === "open-sidebar") {
                  setOpenSidebar(!openSidebar);
                  return;
                }
                setActiveLink(link.link);
              }}
            >
              <link.icon
                className={cn(
                  "transition-transform duration-500",
                  link.link === "open-sidebar" && !openSidebar
                    ? "rotate-0"
                    : link.link === "open-sidebar" && openSidebar
                    ? "rotate-[540deg]"
                    : ""
                )}
                size={24}
                aria-hidden
                variant={activeLink === link.link ? "Bulk" : "Broken"}
              />
              <span
                className={cn(
                  "hidden group-hover:block w-[150px] font-medium text-left pl-4 lg:pl-6",
                  openSidebar && "block"
                )}
              >
                {link.link === "open-sidebar" && !openSidebar
                  ? "Open sidebar"
                  : link.link === "open-sidebar" && openSidebar
                  ? "Close sidebar"
                  : link.label}
              </span>
              <span
                className={cn(
                  "absolute  left-16  max-w-max w-[120px] z-10 bg-success/90 text-white rounded-md text-xs px-2 py-1  before:content-[''] backdrop-blur-xl before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:-rotate-45 before:bg-gradient-to-tl from-transparent via-success/70 to-success transform-gpu translate-x-8 opacity-0 transition-all duration-500 min-[450px]:group-hover/btn:opacity-100 min-[450px]:group-hover/btn:translate-x-5 pointer-events-none min-[450px]:group-hover:translate-x-52 min-[450px]:group-hover:min-[450px]:group-hover/btn:translate-x-48",
                  {
                    "translate-x-52 min-[450px]:group-hover/btn:translate-x-48":
                      openSidebar,
                  }
                )}
              >
                {openSidebar && link.link === "open-sidebar"
                  ? "Close sidebar"
                  : !openSidebar && link.link === "open-sidebar"
                  ? "Open sidebar"
                  : link.label}
              </span>
            </Button>
          ))}
        </div>
      </section>
    </>
  );
};

export { SideBar };
