"use client";

import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils";

import { Search, X } from "lucide-react";
const SearchBox = () => {
  const { setOpenSearchBox } = useStateCtx();
  return (
    <>
      <button
        type="button"
        tabIndex={0}
        aria-label="open search"
        onClick={() => setOpenSearchBox((prev) => !prev)}
        className={cn(
          " transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light  min-[600px]:hidden border border-soft-light dark:border-success/20  flex justify-center items-center rounded-full h-[30px] w-full max-w-[30px]"
        )}
      >
        <Search size={16} className="text-black dark:text-success " />
      </button>
      <div className="hidden min-[600px]:flex w-full max-w-[349px] lg:w-[349px] h-[48px] relative items-center">
        <div className=" items-center w-full h-full relative flex">
          <input
            tabIndex={0}
            type="text"
            placeholder="Search user..."
            className=" w-full h-[40px] dark:border-success/20 border-soft-light transition-all duration-300  min-[900px]:h-[56px] outline-none focus-visible:border-success bg-white dark:bg-transparent text-black dark:text-gray-200 border text-md font-medium rounded-3xl focus-visible:ring-ssuccess/20 dark:focus-visible:border-success  pl-[42px] pr-8 "
            aria-label="Search"
          />

          <Search
            size={18}
            className="absolute left-3 text-light dark:text-success "
            aria-hidden
            tabIndex={-1}
          />
        </div>

        {/* <button
          type="button"
          tabIndex={0}
          aria-label="Clear search"
          className={cn(
            "absolute right-2 transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full",
            {
              "opacity-0 duration-300": !searchTerm,
            }
          )}
        >
          <X size={18} className="text-light dark:text-success " />
        </button> */}
      </div>
    </>
  );
};

export { SearchBox };
