import "@/app/font-cendra.css";
import "@/app/globals.css";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
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
      <body className="isolate">
        <svg aria-hidden={true} className="sr-only">
          <defs>
            <filter id="link-wiggle">
              <feTurbulence
                baseFrequency={0.01}
                numOctaves={1}
                type="fractalNoise"
                result="turbulence"
              >
                <animate
                  attributeName="seed"
                  dur="10s"
                  repeatCount="indefinite"
                  values="1; 30; 1"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="5"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        <Header className="z-10" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
