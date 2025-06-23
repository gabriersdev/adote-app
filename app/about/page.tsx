import React from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import Text from "@/components/ui/text";
import Content from "@/content/content"

export const metadata = {
  title: `Sobre nós - ${Content.UI()["app-name"]}`,
  description: "",
};

export default function Page() {
  return (
    <Main className={"flex flex-col gap-5"}>
      <TitleContainer>Sobre nós</TitleContainer>
      {
        [
          "Aqui no abrigo, cada dia é dedicado a cuidar, proteger e dar uma nova chance para animais que um dia foram abandonados, sofreram maus-tratos ou simplesmente se perderam. Nosso trabalho vai muito além de oferecer abrigo temporário - buscamos garantir saúde, bem-estar e amor até que cada um encontre um lar definitivo.",
          "Cada animal que chega passa por uma avaliação veterinária completa, recebe os cuidados necessários, é vacinado, vermifugado e, quando possível, castrado. Também trabalhamos na socialização, ajudando cães e gatos a superarem traumas e a se prepararem para uma nova vida em família.",
          "Além do cuidado diário, promovemos campanhas de conscientização, educação sobre guarda responsável e eventos de adoção, pois acreditamos que a transformação começa com a informação e o envolvimento da comunidade.",
          "Adotar é um ato de amor - e aqui, cada adoção é celebrada como uma nova história que começa, cheia de esperança. Seja parte desse trabalho: adote, apadrinhe ou apoie o abrigo. Juntos, podemos mudar vidas."
        ].map((paragraph, i) => {
          return (<Text as={"p"} key={i} className={"font-hero-new"}>{paragraph}</Text>)
        })
      }
    </Main>
  );
}
