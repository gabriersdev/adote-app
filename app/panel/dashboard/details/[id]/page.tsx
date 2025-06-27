"use client"

import React, {useEffect} from "react";
import Content from "@/content/content";
import {Params} from "next/dist/server/request/params";

// export const metadata = {
//   title: `Contato - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page({params}: {params: Params}) {
  const {id} = params;

  useEffect(() => {
    if (!document) return;
    document.title = `Painel - Dashboard - ${Content.UI()["app-name"]}`;
  }, []);

  return (
    <>Details: {id}</>
  );
}
