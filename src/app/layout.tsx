import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

const barlow_condensed = Barlow_Condensed({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "Space tourism website",
  description: "Take a space tour with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlow_condensed.variable} ${bellefair.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
