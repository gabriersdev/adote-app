import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import "./css/style.css";

import localFont from "next/font/local";
import {Inter} from "next/font/google";
import {Inter_Tight} from "next/font/google";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GeneralFunctions from "@/components/base/general-functions";
import BootstrapClientLoader from "@/components/base/bootstrap-client-loader";
import {ScrollToHashElement} from "@/components/base/scroll-to-hash-element";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const config = {
  lang: "pt-BR",
  charset: "utf-8",
};

export const metadata = {
  title: "Adote!",
  description: "Plataforma para adoção de animais resgatados e sob cuidados do abrigo.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang={config.lang}>
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="charset" content={config.charset}/>
    </>
    <body className={`${inter.variable} ${interTight.variable}  font-inter text-base`}>
    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      <BootstrapClientLoader>
        <ScrollToHashElement/>
        <GeneralFunctions/>
        <Header/>
        {children}
        <Footer/>
      </BootstrapClientLoader>
    </div>
    </body>
    </html>
  );
}
