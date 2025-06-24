import React from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content"
import TitleContainer from "@/components/layout/title-container";
import Link from "next/link";
export const metadata = {
  title: `Adoção - ${Content.UI()["app-name"]}`,
  description: "",
};

export default function Page() {
  return (
    <Main className={"flex flex-col gap-5 items-stretch"}>
      <TitleContainer>Adoção</TitleContainer>
      <section>
        <Link href={"/"}>
          <div className={"border rounded flex flex-col bg-body p-3 m-0 font-hero-new"}>
            <b className={"text-body"}>Iniciar um processo</b>
            <div className={"text-secondary"}>
              Selecione um animal e depois clique em "Adotar"
            </div>
          </div>
        </Link>
      </section>
    </Main>
  );
}
