"use client";

import React, {useEffect} from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import Content from "@/content/content"
import {Card, ListGroup} from 'react-bootstrap';

// export const metadata = {
//   title: `Termos de privacidade - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page() {
  useEffect(() => {
    if (!document) return;
    document.title = `Termos de privacidade - ${Content.UI()["app-name"]}`
  }, [])

  return (
    <Main className={"flex flex-col gap-5"}>
      <TitleContainer>Política de Privacidade</TitleContainer>
      <section>
        <div>
          <div className={"py-4"}>
            <Title level={2} className={"text-balance"}>
              Política de Privacidade do Sistema de Adoção do Abrigo "{Content.Abrigo().name}"
            </Title>
          </div>
          <div>
            <Text as={"p"} color={"body"} className={"m-0"} balance={false}>
              A sua privacidade e a segurança dos seus dados são de extrema importância para nós. Esta Política de Privacidade descreve como o Abrigo "{Content.Abrigo().name}" coleta, utiliza, armazena e protege as informações pessoais dos usuários que utilizam nosso sistema de adoção, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/18).
            </Text>

            <Title level={4} className="mt-4 mb-4">1. Dados que Coletamos</Title>
            <Text as={"p"} color={"body"} className={"m-0 mb-3 text-body"} balance={false}>
              Para viabilizar o processo de adoção responsável, coletamos as seguintes informações:
            </Text>
            <ListGroup>
              <ListGroup.Item>
                <strong>Dados de Identificação Pessoal:</strong> Nome completo, documento de identidade, CPF, endereço completo, número de telefone e endereço de e-mail.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Informações para Análise de Perfil:</strong> Respostas ao nosso questionário de adoção, que podem incluir detalhes sobre seu estilo de vida, composição familiar, tipo de residência e sua experiência prévia com animais.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Dados de Navegação (Cookies):</strong> Podemos utilizar cookies para melhorar a experiência de navegação em nosso site, sem coletar informações que o identifiquem pessoalmente.
              </ListGroup.Item>
            </ListGroup>

            <Title level={4} className="mt-4 mb-4">2. Finalidade da Coleta de Dados</Title>
            <Text as={"p"} color={"body"} className={"m-0 mb-3 text-body"} balance={false}>
              Seus dados são utilizados exclusivamente para as seguintes finalidades:
            </Text>
            <ListGroup>
              <ListGroup.Item>
                <strong>a) Análise e Processamento da Adoção:</strong> Avaliar se o perfil do candidato é compatível com as necessidades do animal pretendido.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>b) Comunicação:</strong> Entrar em contato para agendar entrevistas, visitas e fornecer atualizações sobre o status do processo de adoção.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>c) Formalização da Adoção:</strong> Preenchimento do Termo de Adoção Responsável com os dados do adotante.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>d) Acompanhamento Pós-Adoção:</strong> Realizar contatos periódicos para garantir o bem-estar e a boa adaptação do animal no novo lar.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>e) Cumprimento de Obrigações Legais:</strong> Manter registros para fins legais ou em caso de requisição por autoridades competentes.
              </ListGroup.Item>
            </ListGroup>

            <Title level={4} className="mt-4 mb-4">3. Compartilhamento de Dados</Title>
            <Text as={"p"} color={"body"} className={"m-0 text-body"} balance={false}>
              O Abrigo "{Content.Abrigo().name}" não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing. O compartilhamento de dados é restrito e ocorre somente quando estritamente necessário para o processo de adoção ou por obrigação legal.
            </Text>

            <Title level={4} className="mt-4 mb-4">4. Armazenamento e Segurança</Title>
            <Text as={"p"} color={"body"} className={"m-0 text-body"} balance={false}>
              Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda, alteração ou destruição. Suas informações são armazenadas em ambiente seguro e serão mantidas apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas e para atender a requisitos legais.
            </Text>

            <Title level={4} className="mt-4 mb-4">5. Seus Direitos como Titular dos Dados</Title>
            <Text as={"p"} color={"body"} className={"m-0 mb-3 text-body"} balance={false}>
              De acordo com a LGPD, você tem o direito de solicitar, a qualquer momento e mediante requisição formal:
            </Text>
            <ListGroup>
              <ListGroup.Item>A confirmação da existência de tratamento dos seus dados.</ListGroup.Item>
              <ListGroup.Item>O acesso aos seus dados.</ListGroup.Item>
              <ListGroup.Item>A correção de dados incompletos, inexatos ou desatualizados.</ListGroup.Item>
              <ListGroup.Item>A anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</ListGroup.Item>
              <ListGroup.Item>A eliminação dos dados tratados com o seu consentimento.</ListGroup.Item>
              <ListGroup.Item>A informação sobre com quem compartilhamos seus dados.</ListGroup.Item>
              <ListGroup.Item>A revogação do consentimento.</ListGroup.Item>
            </ListGroup>
            <Text as={"p"} color={"body"} className={"m-0 mt-3 text-body"} balance={false}>
              Para exercer seus direitos, entre em contato conosco através do e-mail: <strong>{Content.Abrigo().email}</strong>
            </Text>

            <Title level={4} className="mt-4 mb-4">6. Alterações a Esta Política</Title>
            <Text as={"p"} color={"body"} className={"m-0 text-body"} balance={false}>
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre como estamos protegendo suas informações. A data da última atualização estará sempre indicada no final deste documento.
            </Text>

            <Text as={"p"} className="text-muted mt-5" balance={false}>
              Ao utilizar nosso sistema, você concorda com a coleta e uso de suas informações conforme descrito nesta Política de Privacidade.
            </Text>
            <Text as={"p"} className="text-muted mt-3" balance={false}>
              Última atualização: 23 de junho de 2025.
            </Text>
          </div>
        </div>
      </section>
    </Main>
  );
}
