import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {LeftSidebar} from "@/app/components/sidebar/LeftSidebar";
import {RightSidebar} from "@/app/components/sidebar/RightSidebar";
import {Header} from "@/app/components/header/Header";
import {LogBar} from "@/app/components/log/LogBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="flex flex-col w-screen h-full min-h-screen">
          <Header/>
          <div className="flex flex-row justify-between content-height">
              <LeftSidebar/>
              <div className="flex flex-col justify-between w-full">
                  {children}
                  <LogBar/>
              </div>
              <RightSidebar/>
          </div>
      </div>
      </body>
    </html>
  );
}
