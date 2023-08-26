import "./layers.css";
import "./globals.css";
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
      <body>{children}</body>
    </html>
  );
}
