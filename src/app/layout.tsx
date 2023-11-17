import type { Metadata } from "next";
import { Roboto, Chakra_Petch } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "500", "900"],
});

const chackra = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chackra",
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "DevTube",
  description: "A Video Player focused on tech content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` background ${roboto.variable} ${chackra.variable}`}>
        {children}
      </body>
    </html>
  );
}
