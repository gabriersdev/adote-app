"use client";

import Title from "@/components/ui/title";
import React from "react";
import moment from "moment";
import Link from "next/link";
import {Dropdown} from "react-bootstrap";
import Util from "@/utils/Util";

export default function Header() {
  const nowHours = moment().get("hours");

  return (
    <header className={"bg-body-tertiary border-bottom py-3 px-4 flex justify-between items-center"}>
      <Link href={"/panel"} className="flex flex-wrap items-center gap-3">
        <span className={"h-[36px] w-[36px] bg-gray-300 block rounded"}></span>
        <Title level={4} className={"mb-0 pb-0 fw-medium"}>Painel</Title>
      </Link>
      <div className={"flex flex-wrap gap-1 items-end"}>
        <Dropdown>
          <Dropdown.Toggle split variant="default" id="dropdown-split-basic" className={"p-0 m-0 border-0 select-none"}>
            <span>{nowHours > 18 ? "Boa noite" : nowHours > 12 ? "Boa tarde" : "Bom dia"} </span><b className={"mr-2"}>Bruno</b>
          </Dropdown.Toggle>
          
          <Dropdown.Menu>
            <Dropdown.ItemText className="d-flex flex-column gap-1 mb-3">
              <span className={"line-clamp-2"}>Janaína Barbosa de Almeida</span>
              <span className={"line-clamp-1"}>Colaboradora</span>
              <span className={"text-muted line-clamp-2"}>{Util.censorEmail("gabriel@gmail.com")}</span>
            </Dropdown.ItemText>
            
            <Dropdown.ItemText className={"d-flex justify-content-between align-items-center gap-2 mb-2 flex-wrap"}>
              <span>Tema</span>
              <button className={"rounded-pill bg-gray-200 hover:bg-gray-300 text-gray-800 font-light border-0 px-3 py-1 d-flex align-items-center gap-2"}>
                <i className="bi bi-sun text-gray-800"></i>
                Claro
              </button>
            </Dropdown.ItemText>
            
            <Dropdown.ItemText className={"d-flex justify-content-between align-items-center gap-3 flex-wrap"}>
              <Link href={"/account"} className={"rounded-pill bg-gray-200 hover:bg-gray-300 text-gray-800 font-light border-0 px-3 py-1"}>
                Sair da conta
              </Link>
              
              <Link href={"/exit"} className={"rounded-pill bg-gray-200 hover:bg-gray-300 text-gray-800 font-light border-0 px-3 py-1"}>
                Alterar senha
              </Link>
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}