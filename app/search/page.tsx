"use client";

import React, {useEffect} from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content";
import Title from "@/components/ui/title";
import Search from "@/components/search";
import {Params} from "next/dist/server/request/params";
import {SearchParams} from "next/dist/server/request/search-params";

// export const metadata = {
//   title: `Pesquisa - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page() {

  useEffect(() => {
    if (!document) return;
    document.title = `Pesquisa - ${Content.UI()["app-name"]}`;
    return () => {
    }
  }, []);

  return (
    <Main className={"flex flex-col items-center gap-5"}>
      <section className={"flex flex-col items-stretch gap-4"}>
        <Title level={2} className={""}>
          <span>Pesquisa</span>
        </Title>
        <Search/>
      </section>
    </Main>
  );
}
