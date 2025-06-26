"use client"

import React, {useEffect} from "react";
import Content from "@/content/content";
import Dashboard from "@/components/dashboard";

// export const metadata = {
//   title: `Contato - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page() {
  useEffect(() => {
    if (!document) return;
    document.title = `Painel - Dashboard - ${Content.UI()["app-name"]}`;
  }, []);

  return (
    <><Dashboard/></>
  );
}
