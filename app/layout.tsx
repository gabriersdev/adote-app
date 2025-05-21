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

const heroNew = localFont({
  src: [
    {path: "../public/fonts/Hero New Hairline.otf", weight: "100", style: "normal"},
    {path: "../public/fonts/Hero New Hairline Italic.otf", weight: "100", style: "italic"},

    {path: "../public/fonts/Hero New Thin.otf", weight: "200", style: "normal"},
    {path: "../public/fonts/Hero New Thin Italic.otf", weight: "200", style: "italic"},

    {path: "../public/fonts/Hero New UltraLight.otf", weight: "250", style: "normal"},
    {path: "../public/fonts/Hero New UltraLight Italic.otf", weight: "250", style: "italic"},

    {path: "../public/fonts/Hero New Light.otf", weight: "300", style: "normal"},
    {path: "../public/fonts/Hero New Light Italic.otf", weight: "300", style: "italic"},

    {path: "../public/fonts/Hero New Regular.otf", weight: "400", style: "normal"},
    {path: "../public/fonts/Hero New Regular Italic.otf", weight: "400", style: "italic"},

    {path: "../public/fonts/Hero New Medium.otf", weight: "500", style: "normal"},
    {path: "../public/fonts/Hero New Medium Italic.otf", weight: "500", style: "italic"},

    {path: "../public/fonts/Hero New SemiBold.otf", weight: "600", style: "normal"},
    {path: "../public/fonts/Hero New SemiBold Italic.otf", weight: "600", style: "italic"},

    {path: "../public/fonts/Hero New Bold.otf", weight: "700", style: "normal"},
    {path: "../public/fonts/Hero New Bold Italic.otf", weight: "700", style: "italic"},

    {path: "../public/fonts/Hero New ExtraBold.otf", weight: "800", style: "normal"},
    {path: "../public/fonts/Hero New ExtraBold Italic.otf", weight: "800", style: "italic"},

    {path: "../public/fonts/Hero New Super.otf", weight: "900", style: "normal"},
    {path: "../public/fonts/Hero New Super Italic.otf", weight: "900", style: "italic"},
  ],
  variable: "--font-hero-new",
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
    <body className={`${inter.variable} ${interTight.variable} ${heroNew.variable} font-inter text-base`}>
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
