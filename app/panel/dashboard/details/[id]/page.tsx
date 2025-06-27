"use client"

import {useParams} from 'next/navigation';
import React, {useEffect} from "react";
import Content from "@/content/content";
import Header from "@/components/panel-header";
import Aside from "@/components/panel-aside";
import {Card, Col, Dropdown, Row, Table} from "react-bootstrap";
import Title from "@/components/ui/title";
import moment from "moment/moment";
import TitleContainer from "@/components/layout/title-container";
import Util from "@/utils/Util";

// export const metadata = {
//   title: `Contato - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Page() {
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!document) return;
    document.title = `Painel - Detalhes - ${Content.UI()["app-name"]}`;
  }, []);

  const MainContent: React.FC = () => {
    const breadcrumbItems = ["Processos", "Detalhe"];

    return (
      <Col md={9} lg={10} className="p-4 flex flex-col items-stretch justify-start">
        <div className={"flex flex-col items-center"}>
          <main className={"min-w-[70vw] flex flex-col gap-4"}>
            <div className="flex flex-wrap gap-1">
              {
                breadcrumbItems.map(
                  (item, i) => {
                    return (
                      <div key={i} className={"flex flex-wrap gap-1"}>
                        <span className={`${i !== breadcrumbItems.length - 1 && "text-body-tertiary"}`}>{item}</span>
                        {i !== breadcrumbItems.length - 1 && <i className="bi bi-arrow-right text-body-tertiary"></i>}
                      </div>
                    )
                  })
              }
            </div>
            <section className={"border border-gray-200 p-3 rounded-sm flex flex-col gap-5"}>
              <div className="flex flex-wrap gap-3 justify-between">
                <TitleContainer level={4} className={"m-0"} marginBottom={false}>
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
              oi
            </section>
          </main>
        </div>
      </Col>
    );
  };

  return (
    <>
      <Row>
        <Header/>
        <Aside/>
        <MainContent/>
      </Row>
    </>
  );
}
