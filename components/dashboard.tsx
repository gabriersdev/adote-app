"use client";

import React from "react";
import {Dropdown, Button} from "react-bootstrap";
import "moment/locale/pt-br";
import Title from "@/components/ui/title";
import GetProcess from "@/components/get-process";
import Grid from "@/components/ui/grid";
import TitleContainer from "@/components/layout/title-container";
import Link from "next/link";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <Title level={4} className={"mb-0 pb-0"}>Processos</Title>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary">
            Exportar
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#" className={"d-flex justify-content-between gap-3"}>
              <span>CSV</span>
              <i className="bi bi-filetype-csv text-primary"></i>
            </Dropdown.Item>
            <Dropdown.Item href="#" className={"d-flex justify-content-between gap-3"}>
              <span>PDF</span>
              <i className="bi bi-file-earmark-pdf-fill text-primary"></i>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      
      <GetProcess/>
      
      <Grid cols={3} gap={3}>
        {
          Array.from({length: 2}, (v, i) => i + 1).map((_, index) => (
            <div className={"border border-body-secondary rounded p-3"} key={index}>
              <TitleContainer className={"mb-0 mb-1 pb-0 font-inter"}>
                <span className={"font-extrabold"}>12</span>
              </TitleContainer>
              <div className={"d-flex flex-column gap-5"}>
                <span className={"font-inter-tight text-[22px] font-semibold text-balance d-inline-block"}>Agendamentos para essa semana</span>
                <Link href={"#"}>
                  <Button role={"link"} variant="light" className={"rounded-pill px-3 py-2"}>
                    <span className={"text-body-secondary"}>Ver todos</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))
        }
      </Grid>
    </>
  )
};

export default Dashboard;