"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import BootstrapClientLoader from "@/components/base/bootstrap-client-loader";

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
      {children}
    </>
  );
}
