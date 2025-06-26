"use client";

import React, {useEffect, useState} from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content"
import TitleContainer from "@/components/layout/title-container";
import Text from "@/components/ui/text";
import {Button} from "react-bootstrap";

// export const metadata = {
//   title: `Termo de uso de dados - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page() {
  const [showAll, setShowAll] = useState(false);
  const [signed, setSigned] = useState(false);
  const contentTerm = `Termos de Uso de Dados para o Sistema de Adoção de Animais Última atualização: 25 de junho de 2025 Introdução Bem-vindo(a) ao nosso sistema de adoção. Este documento, denominado "Termos de Uso de Dados", tem como objetivo explicar de forma transparente como as suas informações pessoais são utilizadas exclusivamente para viabilizar o processo de adoção responsável dos animais abrigados por nós. Ao utilizar os nossos serviços e submeter os seus dados, você concorda com as práticas aqui descritas. Coleta e Finalidade do Uso dos Dados Para garantir que cada animal encontre um lar seguro e compatível, coletamos e utilizamos os seus dados para as seguintes finalidades específicas: Dados de Identificação e Contato (Nome, CPF, E-mail, Telefone): Uso: Utilizamos estas informações para nos comunicarmos consigo durante todo o processo de adoção, incluindo o agendamento de entrevistas, o envio de atualizações sobre a sua candidatura e a formalização do Termo de Adoção. Dados de Residência (Endereço Completo): Uso: O seu endereço é utilizado para a finalidade exclusiva de agendar e realizar a visita pré-adoção, um passo fundamental para verificarmos a segurança e adequação do ambiente que irá receber o animal. Informações do Questionário de Adoção (Estilo de vida, rotina, experiência com animais, etc.): Uso: As suas respostas são a ferramenta mais importante para a nossa equipa de análise. Elas são usadas para traçar o seu perfil como potencial adotante e garantir a compatibilidade (match) entre as suas expectativas e as necessidades físicas e comportamentais do animal escolhido. O nosso objetivo é assegurar o sucesso da adaptação e o bem-estar duradouro do animal. Fotografias e Vídeos Pós-Adoção: Uso: Poderemos solicitar, com o seu consentimento explícito, fotos e vídeos do animal no seu novo lar. Estas imagens são utilizadas para o acompanhamento pós-adoção e, caso autorizado por si, para divulgação do sucesso da adoção nas nossas redes sociais, inspirando outras pessoas a adotar. Compartilhamento de Dados O nosso compromisso é com a sua privacidade. Os seus dados pessoais não são vendidos, alugados ou compartilhados com terceiros para fins de marketing. O acesso às suas informações é restrito à equipa interna do abrigo diretamente envolvida no seu processo de adoção. Consentimento Explícito Ao preencher e enviar o formulário de candidatura à adoção, você consente de forma livre, informada e inequívoca com a coleta, o armazenamento e o uso dos seus dados pessoais para as finalidades estritamente ligadas ao processo de adoção, conforme detalhado neste documento. Seus Direitos e Contato Você, como titular dos dados, possui direitos garantidos pela Lei Geral de Proteção de Dados (LGPD). Para exercer os seus direitos de acesso, correção, eliminação dos seus dados ou para revogar o seu consentimento, por favor, consulte a nossa Política de Privacidade completa ou entre em contato diretamente conosco através do e-mail: [inserir o e-mail do abrigo aqui]. Agradecemos a sua confiança e o seu interesse em transformar a vida de um dos nossos animais. `

  useEffect(() => {
    if (!document) return;
    document.title = `Termo de uso de dados - ${Content.UI()["app-name"]}`
  }, [])

  return (
    <Main>
      <TitleContainer>Assine o Termo de uso de dados</TitleContainer>
      <section className={"flex flex-col gap-5 items-stretch"}>
        <div className="font-hero-new flex flex-col gap-3">
          {
            !showAll ? (
              <Text as={"p"} className={"line-clamp-5"}>
                {contentTerm}
              </Text>
            ) : (
              <Text as={"p"}>
                {contentTerm}
              </Text>
            )
          }
          <div className={"flex flex-wrap gap-1"}>
            {
              !signed ? (
                <Button variant={"primary"} onClick={() => setSigned(true)}><i className="bi bi-check2"></i>{" "}Assinar</Button>
              ) : (
                <Button variant={"primary"} disabled><i className="bi bi-check2 pointer-events-none cursor-not-allowed"></i>{" "}Assinado</Button>
              )
            }
            <Button variant={"secondary"} onClick={() => setShowAll(!showAll)}><i className="bi bi-eye-fill"></i>{" "}Ler termo completo</Button>
          </div>
        </div>
      </section>
    </Main>
  );
}
