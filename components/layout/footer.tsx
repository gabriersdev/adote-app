import moment from "moment";
import React, {useMemo} from "react";
import {Navbar, NavbarBrand} from "react-bootstrap";
import Link from "next/link";
import Content from "@/content/content"

export default function Footer() {
  const items = useMemo(() => {
    return [
      {"label": "Contato", "link": "/contact"},
      {"label": "Termos de serviço", "link": "/terms"},
      {"label": "Suporte", "link": "/support"},
      {"label": "Privacidade", "link": "/privacy"},
    ];
  }, []);

  return (
    <footer className="py-4 border-top border-t-slate-300">
      <div className="container flex flex-wrap gap-3 justify-between align-items-center">
        <Navbar>
          <NavbarBrand className={"p-0 m-0 font-hero-new fs-6 text-body-secondary"}><i className="bi bi-c-circle"></i> {moment().get("year") || "2024"} {Content.Abrigo()["name"] || Content.UI()["app-name"]}</NavbarBrand>
        </Navbar>
        <ul className={"flex gap-3 flex-wrap p-0 m-0"}>
          {
            items.map((item, index) => (
              <li key={index}><Link href={item.link} className={"py-0 text-decoration-none link-secondary font-hero-new fw-normal"}>{item.label}</Link></li>
            ))
          }
        </ul>
      </div>
    </footer>
  );
}
