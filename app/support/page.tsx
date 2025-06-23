import React from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import Text from "@/components/ui/text";
import Content from "@/content/content"
import Link from "next/link";

export const metadata = {
  title: `Suporte - ${Content.UI()["app-name"]}`,
  description: "Suporte ao usuário do Portal de Adoção.",
};

export default function Page() {
  return (
    <Main className={"flex flex-col gap-5 items-stretch"}>
      <TitleContainer>Suporte</TitleContainer>
      <section>
        <Link href={"mailto:devgabrielribeiro@gmail.com"}>
          <div className={"border rounded flex flex-col bg-body p-3 m-0 font-hero-new"}>
            <b className={"text-body"}>Gabriel Ribeiro - desenvolvedor</b>
            <div className={"text-secondary"}>
              devgabrielribeiro@gmail.com
            </div>
          </div>
        </Link>
      </section>
    </Main>
  );
}
