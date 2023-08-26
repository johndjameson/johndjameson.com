import "@/app/layers.css";
import "@/app/modern-normalize-layer.css";
import "@/app/font-cendra.css";
import "@/app/globals.css";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";

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
    <html lang="en-US">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
