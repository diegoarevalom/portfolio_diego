import type { Metadata } from "next";
import { Urbanist } from 'next/font/google';
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NavBar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego Portfolio",
  description: "Portfolio page made by Diego Arévalo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <NavBar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
