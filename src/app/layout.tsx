import "@/app/font-cendra.css";
import "@/app/globals.css";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "John D. Jameson | Front-End Engineer",
  description: "Senior Front-End Engineer in Austin, TX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
