"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  const path = usePathname();
  return <main>hello{path}</main>;
}
