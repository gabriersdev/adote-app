import React from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content"
import TitleContainer from "@/components/layout/title-container";
import Link from "next/link";
import Text from "@/components/ui/text";
import {Button} from "react-bootstrap";
import Util from "@/utils/Util";

export const metadata = {
  title: `Iniciando um processo de Adoção - ${Content.UI()["app-name"]}`,
  description: "",
};

export default function Page() {
  return (
    <Main>
      <TitleContainer>Vamos iniciar o processo de adoção</TitleContainer>
      <section className={"flex flex-col gap-5 items-stretch"}>
        <div className="font-hero-new flex flex-col gap-3">
          <Text as={"p"} color={"body"}>Mas antes, saiba que você precisa cumprir os seguintes requisitos</Text>
          <ol className={"list-disc p-0 ml-3"}>
            {
              [
                "Ser maior de 21 anos",
                "Comprovar renda",
                "Residir no mesmo município do abrigo",
                "Comprovar possuir local adequado para o animal",
                "Não estar em outro processo de adoção¹"
              ].map((rule, i) => {
                return (<li key={i}><Text as={"span"} color={"body"}>{rule}</Text></li>)
              })
            }
          </ol>
          <div className={"flex flex-wrap gap-1"}>
            <Link href={"/"}><Button variant={"secondary"}><i className="bi bi-arrow-left-short"></i>{" "}Voltar</Button></Link>
            <Link href={"/adoption/1"}><Button variant={"primary"}><i className="bi bi-check2"></i>{" "}Estou de acordo</Button></Link>
          </div>
        </div>
        <Text as={"p"}>
          {Util.renderText("¹ O adotante só pode solicitar um processo de adoção por vêz, sendo que é necessário aguardar o intervalo de 180 dias entre o término/reprovação/cancelamento de um processo e o início de outro")}
        </Text>
      </section>
    </Main>
  );
}
