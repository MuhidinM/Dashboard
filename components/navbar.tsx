"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { Button } from "./ui/button";
import { User } from "./user";
import { sideBar } from "@/constants";
import Logo from "./logo";
import { ModeToggle } from "./theme-togle";
import { cn } from "@/lib/utils";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

export const Navbar = () => {
  const [small, setSmall] = useState(false);
  return (
    <aside
      className={cn(
        "bg-gray-100 flex w-72 border-r-2 dark:border-gray-700",
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
              <Button
                size={"icon"}
                variant="outline"
                onClick={() => setSmall(!small)}
              >
                {small ? <DoubleArrowRightIcon /> : <DoubleArrowLeftIcon />}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between pb-2 mb-2">
            <ul className="space-y-2 font-medium w-full">
              {sideBar.map(
                (item) =>
                  !item.hide && ( // Render the list item only if item.hidden is false
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className={cn(
                          "flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700 group",
                          small && "justify-center "
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
                    href="/merchants/setting"
                    className="flex border dark:border-gray-400 justify-center items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
                  : "flex justify-between border dark:border-white p-2 rounded-lg items-center"
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
  );
};
