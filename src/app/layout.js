"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/footer";
import Header from "../components/header";
import Navpanel from "@/components/navpanel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function navToggle() {
    setMenuOpen(!menuOpen);
  }
  return (
    <html lang="en">
      <head>
        <script
          data-goatcounter="https://sjdev.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header
          navToggle={navToggle}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Navpanel
          navToggle={navToggle}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
