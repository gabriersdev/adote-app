import React from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import Text from "@/components/ui/text";
import Content from "@/content/content"

export const metadata = {
  title: `Suporte - ${Content.UI()["app-name"]}`,
  description: "Suporte ao usuário do Portal de Adoção.",
};

export default function Page() {
  return (
    <Main className={"flex flex-col gap-5"}>
      <TitleContainer>Suporte</TitleContainer>
      <Text as={"p"}>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se
        popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
      </Text>
    </Main>
  );
}
