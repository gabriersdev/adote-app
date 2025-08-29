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
			<></>
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
