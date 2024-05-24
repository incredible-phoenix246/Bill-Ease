"use client";

import React from "react";
import { useThemeContext } from "@/context/ThemeCtx";
import { cn } from "@/utils";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const RoundThemeButton = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <button
      className={cn(
        "border-px fixed bottom-[30px] right-[35px] !z-[99] flex h-[40px] w-[40px] items-center justify-center rounded-full border-[#6a53ff] bg-dark-background dark:bg-background p-0 text-background dark:text-dark-background"
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="cursor-pointer">
        {theme === "light" ? (
          <RiSunFill className="h-6 w-6" />
        ) : (
          <RiMoonFill className="h-6 w-6" />
        )}
      </div>
    </button>
  );
};

export { RoundThemeButton };
