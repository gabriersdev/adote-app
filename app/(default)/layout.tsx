"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/layout/footer";
import BootstrapClientLoader from "@/components/base/BootstrapClientLoader";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <BootstrapClientLoader>
        {children}
        <Footer />
      </BootstrapClientLoader>
    </>
  );
}
