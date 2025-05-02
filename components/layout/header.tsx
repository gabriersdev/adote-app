"use client";

import React, {useMemo, useState} from "react";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import Link from "next/link";
import CustomButton from "@/components/ui/custom-button";

export default function Header() {
    const items = useMemo(() => {
      return [
        {"label": "Início", "link": "#"},
        {"label": "Painel", "link": "#"},
        {"label": "Sobre", "link": "#"},
      ]
    }, [])

  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(new FormData(event.currentTarget));
  }

  return (
    <header className={"py-2 border-1 border-b-slate-300"}>
      <Navbar className={"container align-items-center"}>
        <Navbar.Brand className={"font-hero-new"} as={Link} href={"/"}>Adoção</Navbar.Brand>
        <Navbar.Collapse className="flex gap-2 flex-wrap justify-between">
          <ul className={"flex p-0 m-0"}>
            {
              items.map((item, index) => (
                <li key={index}><Link href={item.link} className={"p-3 text-decoration-none link-secondary"}>{item.label}</Link></li>
              ))
            }
          </ul>
          <div>
            <Form method="POST" onSubmit={handleSubmit}>
              <legend className={"flex gap-2 m-0 p-0"}>
                <FormControl type={"text"} value={input} onChange={handleChange} placeholder={"Digite..."} required={true}></FormControl>
                <CustomButton type={"submit"} variant={"outline-info"} className={"font-hero-new"} text={"Pesquisar"}></CustomButton>
              </legend>
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
