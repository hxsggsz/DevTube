import type { Metadata } from "next";
import { headers } from "next/headers";
import { Roboto, Chakra_Petch } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Provider";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { motion } from "framer-motion";

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
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get("x-pathname") || "";
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${chackra.variable}`}>
        <Provider>
          {header_url !== "/login" && (
            <>
              <Header />
              <Navbar />
            </>
          )}
          {children}
        </Provider>
      </body>
    </html>
  );
}
