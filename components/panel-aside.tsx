"use client";

import {Button, Col, Nav} from "react-bootstrap";
import moment from "moment";
import React, {useEffect, useState} from "react";

const Aside: React.FC = () => {
  const [logNumber,setLogNumber] = useState("");

  useEffect(() => {
    setLogNumber(Math.ceil(new Date().getTime() * (Math.random() * 10)).toString().slice(-6));
  }, []);

  return (
    <Col as={"aside"} md={3} lg={2} className="h-[80vh] col-md-3 p-0 bg-body-tertiary border border-top-0 border-bottom-0">
      <div className="flex flex-column items-start gap-5 h-full w-full px-6 py-6">
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
                    <Nav.Link role={"listitem"} eventKey={item[1]} className={"m-0 p-0 btn btn-default"}>
                    <span className={"inline-block px-3 py-1.5 bg-green-300 text-body rounded-sm"}>
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