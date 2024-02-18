import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar copy";
import { Main } from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
  icons: [
    {
      media: "(prefers-color-scheme:light)",
      url: "/logo.png",
      href: "/logo.png",
    },
    {
      media: "(prefers-color-scheme:dark)",
      url: "/logo-dark.png",
      href: "/logo-dark.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
