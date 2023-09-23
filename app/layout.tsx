import "./globals.css";

import type { Metadata } from "next";

import { Urbanist } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NextTopLoader />
          <ModalProvider />
          <ToastProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
