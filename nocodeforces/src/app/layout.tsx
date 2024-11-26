import { Poppins } from 'next/font/google';
import type { Metadata } from "next";
import localFont from "next/font/local";
import UsernameContextProvider from "./context/UsernameContextProvider";
import "./globals.css";

const poppins = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "No-Codeforces",
  description: "No-Codeforces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UsernameContextProvider>
      <html lang="en">
        <body
          className={poppins.className}
        >
          {children}
        </body>
      </html>
    </UsernameContextProvider>
  );
}
