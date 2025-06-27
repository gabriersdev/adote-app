import React from 'react';
import {
  Row,
  Col,
  Nav,
  Button,
  Card,
  Table,
  Badge,
  Dropdown
} from 'react-bootstrap';

import moment from "moment";
import "moment/locale/pt-br";
import Title from "@/components/ui/title";
import Link from "next/link";

moment.locale('pt-br');

interface Process {
  code: string;
  animal: string;
  status: 'Em análise' | 'Concluído';
}

const processData: Process[] = [
  {code: '000000000000', animal: 'Bernardo', status: 'Em análise'},
  {code: '000000000000', animal: 'Cleiton', status: 'Concluído'},
  {code: '000000000000', animal: 'Cacilda', status: 'Concluído'},
  {code: '000000000000', animal: 'Hortência', status: 'Concluído'},
  {code: '000000000000', animal: 'Cristina', status: 'Concluído'},
];

const Aside: React.FC = () => (
  <Col as={"aside"} lg={2} className="h-[80vh] col-md-3 p-0 bg-body-tertiary border border-top-0 border-bottom-0">
    <div className="flex flex-column items-start gap-5 h-full w-full px-8 py-6">
      <div className="flex gap-2 items-center">
        <span className={"h-[36px] w-[36px] bg-gray-300 block rounded"}></span>
        <div>
          <span className={""}>Nome Abrigo</span>
        </div>
      </div>

      <div className="flex gap-3 flex-col">
        <span className={"text-body font-semibold"}>Painel</span>
        <Nav className="flex-column flex">
          {
            [
              ["Processos", "/panel/dashboard"]
            ].map((item, i) => {
              return (
                <Nav.Item className={"m-0 p-0"} key={i}>
                  <Nav.Link role={"listitem"} eventKey="/process" className={"m-0 p-0 btn btn-default"}>
                    <span className={"inline-block px-3 py-1.5 bg-green-300 text-body rounded-sm"}>
                      Processos
                    </span>
                  </Nav.Link>
                </Nav.Item>
              )
            })
          }
        </Nav>
      </div>

      <div className="mt-auto">
        <Button role={"link"} onClick={() => {
          window.open("mailto:devgabrielribeiro@gmail.com")
        }} variant="warning" className="w-100">Reportar falha</Button>
        <div className="text-muted mt-2">
          <div>LOG E{Math.ceil(new Date().getTime() * (Math.random() * 10)).toString().slice(-6)}</div>
          <div><i className="bi bi-c-circle"></i> {moment().get("year")} Painel</div>
          <div>Versão 1.0.0</div>
        </div>
      </div>
    </div>
  </Col>
);

const MainContent: React.FC = () => {
  const getStatusVariant = (status: Process['status']) => {
    return status === 'Em análise' ? 'warning' : 'success';
  }

  return (
    <Col md={7} lg={10} className="p-4 flex flex-col items-stretch justify-start">
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

          <Card className={""}>
            <Card.Header as="div" className={"border-bottom-0 bg-body py-4 flex flex-col gap-2"}>
              <Card.Title as="h6" className="mb-0 inter capitalize">{moment().format("dddd")}</Card.Title>
              <Card.Subtitle className="text-muted">{moment().format("DD [de] MMMM")}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Card.Text as="h6" className="mb-3 text-body-secondary">
                Seus processos
              </Card.Text>
              <Table responsive hover>
                <thead>
                <tr>
                  <th>Código</th>
                  <th>Animal</th>
                  <th>Status</th>
                  <th>Ação</th>
                </tr>
                </thead>
                <tbody>
                {processData.map((proc, index) => (
                  <tr key={index} className={"text-left"} style={index === processData.length - 1 ? {borderBottom: "1px solid transparent"} : {}}>
                    <td className={"text-muted"} style={{verticalAlign: "middle"}}>{proc.code}</td>
                    <td className={"text-muted"} style={{verticalAlign: "middle"}}>{proc.animal}</td>
                    <td className={"text-muted"} style={{verticalAlign: "middle"}}>{proc.status}</td>
                    <td>
                      <Link href={"/panel/dashboard/details/1"}>
                        <Button role={"link"} variant="light" className={"rounded-pill"}>Detalhes</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </main>
      </div>
    </Col>
  );
};

const Dashboard: React.FC = () => {
  return (
    <>
      <header className={"bg-body-tertiary border-bottom py-3 px-4 flex justify-between items-center"}>
        <hgroup className="flex flex-wrap items-center gap-3">
          <span className={"h-[36px] w-[36px] bg-gray-300 block rounded"}></span>
          <Title level={4} className={"m-0 fw-medium"}>Painel</Title>
        </hgroup>
        <div className={"flex flex-wrap gap-1 items-end"}>
          <span>Boa tarde</span><b>Bruno</b>
        </div>
      </header>
      <Row>
        <Aside/>
        <MainContent/>
      </Row>
    </>
  );
};

export default Dashboard;