"use client"

import {useParams} from 'next/navigation';
import React, {useEffect} from "react";
import Content from "@/content/content";
import Header from "@/components/panel-header";
import Aside from "@/components/panel-aside";
import {Button, Col, Row, Alert, Dropdown} from "react-bootstrap";
import Title from "@/components/ui/title";
import moment from "moment/moment";
import TitleContainer from "@/components/layout/title-container";
import Util from "@/utils/Util";
import Stepper from "@/components/stepper";
import Link from "next/link";
import GetProcess from "@/components/get-process";

// export const metadata = {
//   title: `Contato - ${Content.UI()["app-name"]}`,
//   description: "",
// };

const propsLink: { target: string; rel: string } = {
	target: "_blank",
	rel: "noopener noreferrer",
}

export default function Page() {
	const params = useParams();
	const id = params.id;
	
	useEffect(() => {
		if (!document) return;
		document.title = `Painel de Processos ${Content.UI()["app-name"]}`;
	}, []);
	
	const MainContent: React.FC = () => {
		const breadcrumbItems = ["Processos"];
		
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
            
            <GetProcess/>
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
