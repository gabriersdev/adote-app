import {Card, Table, Button} from "react-bootstrap";
import Link from "next/link";
import moment from "moment/moment";
import TitleContainer from "@/components/layout/title-container";

moment.locale("pt-br");

interface Process {
  code: string;
  adotante: string;
  CPF: string;
  status: "Em análise" | "Concluído";
}

const processData: Process[] = [
  {code: "000000000000", adotante: "Bernardo", CPF: "***.456.789-**", status: "Em análise"},
  {code: "000000000000", adotante: "Cleiton", CPF: "***.456.789-**", status: "Concluído"},
  {code: "000000000000", adotante: "Cacilda", CPF: "***.456.789-**", status: "Concluído"},
  {code: "000000000000", adotante: "Hortência", CPF: "***.456.789-**", status: "Concluído"},
  {code: "000000000000", adotante: "Cristina", CPF: "***.456.789-**", status: "Concluído"},
];


export default function GetSchedules() {
  // const getStatusVariant = (status: Process["status"]) => {
  //   return status === "Em análise" ? "warning" : "success";
  // }
  
  return (
    <Card className={""}>
      <Card.Header as="div" className={"border-bottom-0 bg-body py-4 flex flex-col gap-2"}>
        <Card.Title as="h6" className="mb-0 capitalize">{moment().format("dddd")}</Card.Title>
        <Card.Subtitle className="text-muted">{moment().format("DD [de] MMMM")}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <div className={"d-flex justify-content-between align-items-center gap-3"}>
          <TitleContainer className={"mb-0 mb-1 pb-0 font-inter"}>
            <span className={"font-extrabold"}>12</span>
          </TitleContainer>
          <span className={"font-inter-tight text-[22px] font-semibold text-balance d-inline-block"}>Agendamentos para essa semana</span>
          <Link href={"#"}>
            <Button role={"link"} variant="light" className={"rounded-pill px-3 py-2"}>
              <span className={"text-body-secondary"}>Ver todos</span>
            </Button>
          </Link>
        </div>
        <Table responsive hover>
          <thead>
          <tr>
            <th>Código</th>
            <th>Adotante</th>
            <th>CPF</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
          </thead>
          <tbody>
          {processData.map((proc, index) => (
            <tr key={index} className={"text-left"} style={index === processData.length - 1 ? {borderBottom: "1px solid transparent"} : {}}>
              <td className={"text-muted"} style={{verticalAlign: "middle"}}>{proc.code}</td>
              <td className={"text-muted"} style={{verticalAlign: "middle"}}>{proc.adotante}</td>
              <td className={"text-muted"} style={{verticalAlign: "middle"}}>{proc.CPF}</td>
              <td className={"text-muted"} style={{verticalAlign: "middle"}}>{proc.status}</td>
              <td>
                <Link href={"/panel/dashboard/process/1"}>
                  <Button role={"link"} variant="light" className={"rounded-pill"}>Detalhes</Button>
                </Link>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}