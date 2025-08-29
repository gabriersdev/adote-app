"use client";

import {Button, Col, Nav} from "react-bootstrap";
import moment from "moment";
import React, {useEffect, useState} from "react";
import Content from "@/content/content";
import Link from "next/link";

const Aside: React.FC = () => {
  const [logNumber, setLogNumber] = useState("");

  useEffect(() => {
    // Apenas para mostrar log - no funcionamento deve ser id do usuário
    setLogNumber(Math.ceil(new Date().getTime() * (Math.random() * 10)).toString().slice(-6));
  }, []);

  return (
    <Col as={"aside"} md={3} lg={2} className="min-h-[80vh] col-md-3 p-0 bg-body-tertiary border border-top-0 border-bottom-0">
      <div className="flex flex-column items-start gap-5 h-full w-full px-6 py-6">
        <div className="flex gap-2 items-center">
          <span className={"h-[36px] w-[36px] bg-gray-300 block rounded"}></span>
          <div>
            <span className={""}>{Content.Abrigo().name}</span>
          </div>
        </div>

        <div className="flex gap-3 flex-col">
          <Link className={"text-body font-semibold"} href={"/panel"}>Painel</Link>
          <Nav className="flex-column d-flex align-items-start gap-3">
            {
              [
                ["Dashboard", "/panel/dashboard"],
                ["Processos", "/panel/dashboard/process"],
                ["Agendamentos", "/panel/dashboard/schedules"],
                ["Animais", "/panel/dashboard/animals"],
                ["Pessoas", "/panel/dashboard/users"],
              ].map((item, i) => {
                return (
                  <Nav.Item className={"m-0"} key={i}>
                    <Nav.Link as={Link} role={"listitem"} href={item[1]} eventKey={i} className={"m-0 p-0 btn btn-default"}>
                    <span className={"inline-block text-body rounded-sm" + "xpx-3 xbg-green-300"}>
                      {item[0]}
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
            <div>LOG E{logNumber}</div>
            <div><i className="bi bi-c-circle"></i> {moment().get("year")} Painel</div>
            <div>Versão 1.0.0</div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Aside;