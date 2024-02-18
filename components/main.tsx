"use client";
import { useState } from "react";
import { Navbar } from "./navbar copy";
import { cn } from "@/lib/utils";

export const Main = ({ children }: { children: React.ReactNode }) => {
  const [small, setSmall] = useState(false);
  const changeSize = () => {};
  return (
    <div>
      <Navbar click={changeSize} />
      <div className={cn("p-4 md:ml-64", small && "md:ml-20")}>
        {/* <Breadcrumbs /> */}
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};
