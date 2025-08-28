import {Card, Table, Button} from "react-bootstrap";
import Link from "next/link";
import moment from "moment/moment";

moment.locale("pt-br");

interface Process {
  code: string;
  animal: string;
  status: "Em análise" | "Concluído";
}

const processData: Process[] = [
  {code: "000000000000", animal: "Bernardo", status: "Em análise"},
  {code: "000000000000", animal: "Cleiton", status: "Concluído"},
  {code: "000000000000", animal: "Cacilda", status: "Concluído"},
  {code: "000000000000", animal: "Hortência", status: "Concluído"},
  {code: "000000000000", animal: "Cristina", status: "Concluído"},
];


export default function GetProcess() {
  // const getStatusVariant = (status: Process["status"]) => {
  //   return status === "Em análise" ? "warning" : "success";
  // }
  
  return (
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