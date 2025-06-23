"use client";

import React, {useEffect} from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import Content from "@/content/content"
import {Card, ListGroup} from 'react-bootstrap';
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";

// export const metadata = {
//   title: `Termos de serviço - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page() {
  useEffect(() => {
    if (!document) return;
    document.title = `Termos de serviço - ${Content.UI()["app-name"]}`;
  }, []);

  return (
    <Main className={"flex flex-col gap-5"}>
      <TitleContainer>Termos de serviço</TitleContainer>
      <section>
        <div>
          <div className={"py-4"}>
            <Title level={2} className={"text-center text-balance"}>Sistema de Adoção de Animais do Abrigo "{Content.Abrigo().name}"</Title>
          </div>
          <div>
            <Text as={"p"} color={"body"} className={"m-0"} balance={false}>
              A adoção de um animal de estimação é um ato de amor e grande responsabilidade. Para garantir o bem-estar dos animais e a transparência no processo de adoção, apresentamos os Termos de Serviço que regem o uso do nosso sistema e a relação entre o abrigo e os potenciais adotantes.
            </Text>

            <Title level={4} className="mt-4 mb-4">1. Aceitação dos Termos</Title>
            <Text as={"p"} color={"body"} className={"m-0 text-body"} balance={false}>
              Ao se cadastrar e utilizar o sistema de adoção de animais deste abrigo, o usuário declara ter lido, compreendido e concordado com todos os termos e condições aqui estabelecidos. A não aceitação destes termos implicará na impossibilidade de prosseguir com o processo de adoção.
            </Text>

            <Title level={4} className="mt-4 mb-4">2. Cadastro do Usuário</Title>
            <ListGroup>
              <ListGroup.Item>
                <strong>2.1.</strong> Para iniciar o processo de adoção, o usuário deverá fornecer informações pessoais verídicas, completas e atualizadas, incluindo nome completo, documento de identidade, CPF, endereço, telefone e e-mail.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>2.2.</strong> A veracidade das informações fornecidas é de inteira responsabilidade do usuário. Informações falsas ou imprecisas podem levar ao cancelamento do processo de adoção a qualquer momento.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>2.3.</strong> O abrigo se compromete a utilizar os dados dos usuários em conformidade com a Lei Geral de Proteção de Dados (LGPD), utilizando-os exclusivamente para os fins do processo de adoção, incluindo análise de perfil, contato e acompanhamento pós-adoção.
              </ListGroup.Item>
            </ListGroup>

            <Title level={4} className="mt-4 mb-4">3. Processo de Adoção</Title>
            <ListGroup>
              <ListGroup.Item>
                <strong>3.1.</strong> O preenchimento do cadastro e a manifestação de interesse em um animal não garantem a aprovação da adoção.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>3.2.</strong> O processo de adoção envolve as seguintes etapas:
                <ol className={"p-0 m-0 mt-3"}>
                  <li>a) Preenchimento do formulário de interesse online.</li>
                  <li>b) Análise do perfil do candidato pela equipe do abrigo.</li>
                  <li>c) Entrevista com o candidato (que poderá ser online ou presencial).</li>
                  <li>d) Visita prévia à residência do candidato, a critério do abrigo, para verificação das condições de moradia.</li>
                  <li>e) Assinatura do Termo de Adoção Responsável.</li>
                </ol>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>3.3.</strong> O abrigo se reserva o direito de recusar um pedido de adoção caso entenda que o candidato não atende aos requisitos necessários para garantir a segurança e o bem-estar do animal.
              </ListGroup.Item>
            </ListGroup>

            <Title level={4} className="mt-4 mb-4">4. Responsabilidades do Adotante</Title>
            <Card.Text>
              Ao formalizar a adoção através da assinatura do Termo de Adoção Responsável, o adotante se compromete a:
            </Card.Text>
            <ListGroup>
              <ListGroup.Item>
                <strong>4.1. </strong> Prover um Ambiente Seguro e Adequado: Manter o animal em local seguro, protegido do sol, chuva e outras intempéries, com espaço suficiente para suas necessidades físicas. Em caso de apartamentos, garantir a instalação de telas de proteção em janelas e sacadas.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.2. </strong> Fornecer Alimentação e Água: Oferecer alimentação de qualidade e adequada à espécie, idade e porte do animal, além de manter água fresca sempre à disposição.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.3. </strong> Cuidados com a Saúde:
                <ol className={"m-0 p-0"}>
                  <li>a) Levar o animal para consultas veterinárias periódicas e sempre que necessário.</li>
                  <li>b) Manter o calendário de vacinação e vermifugação em dia.</li>
                  <li>c) Realizar a castração do animal na idade recomendada pelo médico veterinário, caso o animal ainda não seja castrado no momento da adoção.</li>
                </ol>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.4. </strong> Identificação e Segurança: Manter o animal com coleira e placa de identificação contendo o nome do animal e o telefone do tutor.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.5. </strong> Bem-estar e Carinho: Proporcionar ao animal carinho, atenção e estímulos físicos e mentais adequados à sua espécie e temperamento.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.6. </strong> Responsabilidade Civil: Assumir total responsabilidade por quaisquer danos materiais ou físicos causados pelo animal a terceiros.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>4.7. </strong> Proibição de Abandono e Maus-tratos: O abandono e os maus-tratos a animais são crimes previstos na Lei Federal nº 9.605/98. O adotante está ciente de que o descumprimento das responsabilidades aqui listadas pode ser caracterizado como maus-tratos, sujeitando-o às penalidades legais cabíveis.
              </ListGroup.Item>
            </ListGroup>

            <Title level={4} className="mt-4 mb-4">5. Responsabilidades do Abrigo</Title>
            <Card.Text>O abrigo se compromete a:</Card.Text>
            <ListGroup>
              <ListGroup.Item><strong>5.1.</strong> Fornecer todas as informações conhecidas sobre o histórico de saúde e comportamento do animal.</ListGroup.Item>
              <ListGroup.Item><strong>5.2.</strong> Entregar o animal ao adotante com as vacinas e vermifugação em dia, de acordo com a idade e o protocolo veterinário do abrigo.</ListGroup.Item>
              <ListGroup.Item><strong>5.3.</strong> Oferecer suporte e orientação ao adotante durante o período de adaptação do animal.</ListGroup.Item>
              <ListGroup.Item><strong>5.4.</strong> Realizar o acompanhamento pós-adoção, que poderá incluir contatos telefônicos, por e-mail e/ou visitas à residência do adotante, para garantir a boa adaptação e o bem-estar do animal.</ListGroup.Item>
            </ListGroup>

            <Title level={4} className="mt-4 mb-4">6. Devolução do Animal</Title>
            <ListGroup>
              <ListGroup.Item>
                <strong>6.1.</strong> A adoção é um compromisso para toda a vida do animal. No entanto, caso o adotante, por motivos de força maior, se veja impossibilitado de continuar com a guarda do animal, deverá comunicar imediatamente o abrigo.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>6.2.</strong> A devolução do animal deverá ser feita diretamente ao abrigo, sendo expressamente proibido o repasse do animal a terceiros sem o consentimento prévio da instituição.
              </ListGroup.Item>
            </ListGroup>

            <Title level={4} className="mt-4 mb-4">7. Disposições Gerais</Title>
            <ListGroup>
              <ListGroup.Item>
                <strong>7.1.</strong> O abrigo não se responsabiliza por eventuais problemas de saúde ou de comportamento que o animal venha a apresentar após a adoção e que não eram de conhecimento prévio da equipe.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>7.2.</strong> Os presentes Termos de Serviço podem ser atualizados a qualquer momento, visando o aprimoramento contínuo dos nossos processos. A versão mais recente estará sempre disponível em nosso sistema.
              </ListGroup.Item>
            </ListGroup>

            <Text as={"p"} className="text-muted mt-5" balance={false}>
              Ao prosseguir com o processo de adoção, você demonstra estar ciente e de acordo com todas as cláusulas destes Termos de Serviço, assumindo o compromisso de proporcionar uma vida digna e feliz para o animal que irá acolher em seu lar.
            </Text>
          </div>
        </div>
      </section>
    </Main>
  );
}
