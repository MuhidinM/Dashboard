import { links } from "@/constants";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href={"/"} className="hover:underline">
              Dashboard
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.ref}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                {item.icon}
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
