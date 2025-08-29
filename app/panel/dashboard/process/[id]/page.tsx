"use client"

import {useParams, usePathname} from 'next/navigation';
import React, {useEffect} from "react";
import Content from "@/content/content";
import Header from "@/components/panel-header";
import Aside from "@/components/panel-aside";
import {Button, Row} from "react-bootstrap";
import Title from "@/components/ui/title";
import moment from "moment/moment";
import TitleContainer from "@/components/layout/title-container";
import Util from "@/utils/Util";
import Stepper from "@/components/stepper";
import Link from "next/link";

// export const metadata = {
//   title: `Contato - ${Content.UI()["app-name"]}`,
//   description: "",
// };

const propsLink: { target: string; rel: string } = {
  target: "_blank",
  rel: "noopener noreferrer",
}

export default function Page() {
  const params = useParams();
  const path = usePathname();
  const id = params.id;
  
  useEffect(() => {
    console.log(path)
    if (!document) return;
    document.title = `Painel - Detalhes - ${Content.UI()["app-name"]}`;
  }, []);
  
  const MainContent: React.FC = () => {
    const breadcrumbItems = [["Processos", path.split("process")?.[0] + "process" || path], ["Detalhe", path]];
    
    return (
      <>
        <div className="flex flex-wrap gap-1">
          {
            breadcrumbItems.map(
              (item, i) => {
                return (
                  <Link href={item[1]} key={i} className={"flex flex-wrap gap-1"}>
                    <span className={`${i !== breadcrumbItems.length - 1 && "text-body-tertiary"}`}>{item[0]}</span>
                    {i !== breadcrumbItems.length - 1 && <i className="bi bi-arrow-right text-body-tertiary"></i>}
                  </Link>
                )
              })
          }
        </div>
        <section className={"border border-gray-200 p-3 rounded-sm flex flex-col items gap-5"}>
          <div className="flex flex-wrap gap-3 justify-between">
            <TitleContainer level={4} className={"mb-0 pb-0"} marginBottom={false}>
              <div className={"flex flex-col gap-1 items-start"}>
                <span>Detalhe</span>
                <span>{id}</span>
              </div>
            </TitleContainer>
            <div className="flex flex-col items-end">
              <p className={"mb-0"}><b>Criação:</b> {Util.renderText(moment("2023-04-22").format("DD/MM/YYYY"))}</p>
              <p className={"mb-0"}><b>Status:</b> Em análise</p>
            </div>
          </div>
          <div>
            <ol className={"mb-1 p-0"}>
              {
                [
                  ["Adotante", "José Maria"]
                ].map((item, i) => {
                  return (
                    <li key={i} className={"m-0 py-1"}><b>{item[0]}:</b> <span>{item[1]}</span></li>
                  )
                })
              }
            </ol>
            <Button variant={"secondary"} className={"rounded-pill btn-sm"}>Ver todos os dados</Button>
          </div>
          <div>
            <ol className={"mb-1 p-0"}>
              {
                [
                  ["Adotante", "José Maria"]
                ].map((item, i) => {
                  return (
                    <li key={i} className={"m-0 py-1"}><b>{item[0]}:</b> <span>{item[1]}</span></li>
                  )
                })
              }
            </ol>
            <Button variant={"secondary"} className={"rounded-pill btn-sm"}>Ver todos os dados</Button>
          </div>
          
          <Stepper steps={[
            "Em análise",
            "Verificação documental",
            "Análise concluída",
            "Entrevista",
            "Análise concluída"
          ]} currentStep={2}/>
          
          <div className={"flex flex-col items-start gap-3"}>
            <Title level={6} className={"mb-0 pb-0"}>Histórico</Title>
            <ol className={"mb-1 p-0"}>
              <li className={"mb-3"}>
                <div>
                  <div className={"flex gap-2 text-wrap"}>
                    <span>Hoje</span>
                    <span>Processo criado</span>
                  </div>
                  <div className={"txt-sm inline-flex gap-2 text-wrap text-body-tertiary"}>
                    <span>17h40</span>
                    <span>O processo 00000000 foi criado e será analisado.</span>
                  </div>
                </div>
              </li>
            </ol>
            
            <div className={"inline-flex px-3 py-2 border-1 border-blue-600/25 bg-blue-100 rounded"}>
              <i className="bi bi-info-circle mr-3"></i>
              <span>O processo aguarda finalização da análise</span>
            </div>
            
            <Link href={"/contact"} {...propsLink}>
              <div className={"inline-flex px-3 py-2 border-1 border-yellow-600/25 bg-yellow-200 rounded items-center"}>
                <i className="bi bi-exclamation-circle mr-3"></i>
                <span>Para cancelar o processo de adoção entre em contato com o abrigo</span>
                <svg className={"ml-1"} xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000">
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
                </svg>
              </div>
            </Link>
          </div>
        </section>
      </>
    );
  };
  
  return <MainContent/>;
}
