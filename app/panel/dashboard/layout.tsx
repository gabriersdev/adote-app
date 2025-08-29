import React from "react";
import {Row, Col} from "react-bootstrap";
import Header from "@/components/panel-header"
import Aside from "@/components/panel-aside"

export default function DefaultLayout({children,}: {
  children: React.ReactNode;
}) {
  return (
    <Row>
      <Header/>
      <Aside/>
      <Col md={9} lg={10} className="py-5 flex flex-col items-stretch justify-start">
        <div className={"flex flex-col items-center"}>
          <main className={"min-w-[1120px] flex flex-col gap-4"}>
            {children}
          </main>
        </div>
      </Col>
    </Row>
  );
}
