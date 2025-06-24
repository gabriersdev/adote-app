"use client";

import React, {useEffect} from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content"
import TitleContainer from "@/components/layout/title-container";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import {Button} from "react-bootstrap";
import Link from "next/link";

// export const metadata = {
//   title: `Fase 1 de 3 - Questionário de Adoção - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page() {
  useEffect(() => {
    if (!document) return;
    document.title = `Fase 1 de 3 - Questionário de Adoção - ${Content.UI()["app-name"]}`;
  }, []);

  return (
    <Main>
      <TitleContainer>Fase 1 de 3</TitleContainer>
      <section className={"flex flex-col gap-5 items-stretch"}>
        <div className="font-hero-new flex flex-col gap-3">
          <Title level={2}>
            As próximas perguntas compõem o questionário de adoção
          </Title>
          <Text as={"p"} color={"body"}>
            São 40 perguntas sobre você e o ambiente em que o animal que você deseja adotar ficará.
            É muito importante que você seja sincero e confira suas respostas, pois elas serão verificadas.
          </Text>
          <div className={"flex flex-wrap gap-1 font-hero-new"}>
            {
              [
                ["/adoption/3", (<Button variant={"danger"}>Voltar</Button>)],
                ["#", (<Button variant={"secondary"} type={"button"} onClick={() => {
                  const con = confirm("Tem certeza que deseja abandonar o processo? Seu progresso será perdido.")
                  if (con) window.location.href = "/"
                }}>Sair</Button>)],
                ["#", (<Button variant={"primary"} type={"submit"}>Próximo</Button>)],
              ].map((arr, i) => {
                // @ts-ignore
                return arr[0] === "#" ? <div key={i}>{arr[1]}</div> : <Link key={i} href={arr[0] ?? "#"}>{arr[1]}</Link>
              })
            }
          </div>
        </div>
      </section>
    </Main>
  );
}
