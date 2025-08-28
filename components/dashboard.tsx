import React from "react";
import {Row, Col, Dropdown} from "react-bootstrap";

import "moment/locale/pt-br";
import Title from "@/components/ui/title";
import Aside from "@/components/panel-aside";
import Header from "@/components/panel-header";
import GetProcess from "@/components/get-process";

const MainContent: React.FC = () => {
  return (
    <Col md={9} lg={10} className="p-4 flex flex-col items-stretch justify-start">
      <div className={"flex flex-col items-center"}>
        <main className={"min-w-[70vw] flex flex-col gap-4"}>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <Title level={4}>Processos</Title>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary">
                Exportar
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">CSV</Dropdown.Item>
                <Dropdown.Item href="#" disabled>PDF</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        
          <GetProcess />
        </main>
      </div>
    </Col>
  );
};

const Dashboard: React.FC = () => {
  return (
    <>
      <Row>
        <Header/>
        <Aside/>
        <MainContent/>
      </Row>
    </>
  );
};

export default Dashboard;