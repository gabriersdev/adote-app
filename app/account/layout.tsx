"use client";

import React from "react";
import Main from "@/components/layout/main";

export default function DefaultLayout({children}: {
  children?: React.ReactNode;
}) {
  return (
    <Main className={"flex flex-col items-center gap-5"}>
      {children}
    </Main>
  );
}
