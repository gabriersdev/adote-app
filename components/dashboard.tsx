import React from 'react';
import {
  Container,
  Row,
  Col,
  Nav,
  Image,
  Button,
  Card,
  Table,
  Badge
} from 'react-bootstrap';

import moment from "moment";
import "moment/locale/pt-br";

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
  <Col as={"aside"} md={3} lg={2} className="vh-100 bg-light d-flex flex-column p-3">
    <h4 className="mb-4">Painel</h4>

    <div className="d-flex align-items-center mb-4">
      <Image
        src="https://via.placeholder.com/50"
        roundedCircle
        className="me-2"
      />
      <div>
        <strong>Nome Abrigo</strong>
      </div>
    </div>

    <Nav variant="pills" activeKey="/process" className="flex-column">
      <Nav.Item>
        <Nav.Link href="/panel" disabled>Painel</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/process">Processos</Nav.Link>
      </Nav.Item>
    </Nav>

    <div className="mt-auto">
      <Button variant="warning" className="w-100">Reportar falha</Button>
      <div className="text-muted small mt-2">
        <div>LOG: E198554</div>
        <div>(C) Painel</div>
        <div>Versão: 1.0.0</div>
      </div>
    </div>
  </Col>
);

const MainContent: React.FC = () => {
  const getStatusVariant = (status: Process['status']) => {
    return status === 'Em análise' ? 'warning' : 'success';
  }

  return (
    <Col md={9} lg={10} className="p-4">
      <header className="d-flex justify-content-end mb-4">
        <span>Boa tarde, <strong>Bruno</strong></span>
      </header>

      <main>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Processos</h2>
          <Button variant="outline-secondary">Exportar</Button>
        </div>

        <Card>
          <Card.Header as="div" className={"border-bottom-0 bg-body py-4 flex flex-col gap-2"}>
            <Card.Title as="h6" className="mb-0 inter">Quinta-feira</Card.Title>
            <Card.Subtitle className="text-muted">{moment().format("DD [de] MMMM")}</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text as="h6" className="mb-3">
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
              {processData.map((processo, index) => (
                <tr key={index}>
                  <td>{processo.code}</td>
                  <td>{processo.animal}</td>
                  <td>
                    <Badge pill bg={getStatusVariant(processo.status)}>
                      {processo.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="light" size="sm">Detalhes</Button>
                  </td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </main>
    </Col>
  );
};

const Dashboard: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Aside/>
        <MainContent/>
      </Row>
    </Container>
  );
};

export default Dashboard;