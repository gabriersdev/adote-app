import React from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content"
import TitleContainer from "@/components/layout/title-container";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import {Button} from "react-bootstrap";
import Link from "next/link";

export const metadata = {
  title: `Fase 1 de 3 - Processo de Adoção - ${Content.UI()["app-name"]}`,
  description: "",
};

export default function Page() {
  return (
    <Main>
      <TitleContainer>Fase 1 de 3</TitleContainer>
      <section className={"flex flex-col gap-5 items-stretch"}>
        <div className="font-hero-new flex flex-col gap-3">
          <Title level={2}>
            Responda algumas questões e envie seus documentos
          </Title>
          <Text as={"p"} color={"body"}>
            Essa é a primeira fase do processo de adoção. Precisamos conhecer você e sua casa melhor. Não se preocupe, só precisamos do necessário para prosseguirmos com o processo.
          </Text>
          <div className={"flex flex-wrap gap-1"}>
            <Link href="/adoption/2">
              <Button variant={"primary"}>Começar</Button>
            </Link>
          </div>
        </div>
      </section>
    </Main>
  );
}
