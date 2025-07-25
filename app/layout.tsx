import type { Metadata } from "next";
import  Providers  from "./providers";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import GrainEffect from "@/components/visualEffects/grain.effect";
import { Cursor } from "@/components/cursor/cursor";

// Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel.otf",
  variable: "--font-pixel",
});



export const metadata: Metadata = {
  title: "Nexora",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PixelFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
      </Providers>
    </html>
  );
}
