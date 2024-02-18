"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { Button } from "./ui/button";
import { User } from "./user";
import { sideBar } from "@/constants";
import Logo from "./logo";
import { ModeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { Footer } from "./footer";

export const Navbar = ({ click, small }: { click: any; small: any }) => {
  const path = usePathname();
  return (
    <div>
      <div className="md:hidden flex items-center justify-between my-2 mx-4">
        <Button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          {/* <AlignJustify /> */}
        </Button>
        <div className="md:hidden">{/* <Logo /> */}</div>
        <div className="md:hidden">
          <ModeToggle />
        </div>
      </div>

      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-64 flex transition-transform -translate-x-full sm:translate-x-0 shadow-sm",
          small && "w-20"
        )}
      >
        <div className="h-full w-full flex flex-col justify-between px-3 py-4 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="flex flex-col overflow-y-auto">
            <div
              className={cn(
                "flex items-center justify-between pb-2 mb-2",
                small && "flex-col space-y-2"
              )}
            >
              <Logo href="/" small={small ? true : false} />
              <div
                className={cn(
                  "flex items-center",
                  small ? "flex-col justify-center space-y-2" : "space-x-2"
                )}
              >
                <ModeToggle />
                <Button size={"icon"} variant="outline" onClick={click}>
                  {small ? <DoubleArrowRightIcon /> : <DoubleArrowLeftIcon />}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <ul className="space-y-2 font-medium w-full">
                {sideBar.map(
                  (item) =>
                    !item.hide && ( // Render the list item only if item.hidden is false
                      <li
                        key={item.name}
                        className="rounded-md border border-gray-500"
                      >
                        <Link
                          href={item.path}
                          className={cn(
                            "flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group",
                            small && "justify-center ",
                            item.path === path && "text-cyan-600",
                            item.path !== path &&
                              "text-gray-500 rounded-lg dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500"
                          )}
                        >
                          {item.icon}
                          <span className={cn("ms-3", small && "hidden")}>
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="items-center justify-between">
            <div className="flex flex-col">
              <div className="mb-2">
                <ul className="space-y-2 font-medium w-full ">
                  <li>
                    <Link
                      href="/setting"
                      className="flex border border-gray-500 justify-center items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <CiSettings size={20} />
                      <span className={cn("ms-3", small && "hidden")}>
                        Setting
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Button className="text-white bg-red-500 hover:bg-red-600 w-full">
                      <BiLogOut size={20} />
                      <span className={cn("ms-3", small && "hidden")}>
                        Log out
                      </span>
                    </Button>
                  </li>
                </ul>
              </div>
              <div
                className={cn(
                  small
                    ? "flex justify-center"
                    : "flex justify-between border border-gray-500 p-2 rounded-lg items-center"
                )}
              >
                <div className="flex">
                  <User />
                </div>
                <div className={cn("flex flex-col", small && "hidden")}>
                  <p>Name Name</p>
                  <span className="text-xs text-gray-400">mail@email.com</span>
                </div>
                <div className={cn("flex flex-col", small && "hidden")}></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
