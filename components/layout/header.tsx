"use client";

import React, {useMemo, useState} from "react";
import {Form, FormControl, Navbar} from "react-bootstrap";
import Link from "next/link";
import CustomButton from "@/components/ui/custom-button";
import Content from "@/content/content";
import {useRouter} from "next/navigation";

export default function Header() {
  const router = useRouter();
  
  const items = useMemo(() => {
    return [
      {"label": "Início", "link": "/"},
      {"label": "Painel", "link": "/panel"},
      {"label": "Sobre", "link": "/about"},
    ];
  }, []);

  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-ignore
    const data = new FormData(event.target);
    // @ts-ignore
    const searchInput = (data.get("search-input") || "")?.trim();
    if (searchInput) router.push(`/search/?s=${searchInput}`);
  };

  return (
    <header className={"py-2 border-1 border-b-slate-300 px-2 md:px-0"}>
      <Navbar className={"container align-items-center flex-wrap"}>
        <Navbar.Brand className={"font-hero-new"} as={Link} href={"/"}>{Content.UI()["app-name"] || "Portal de Adoção"}</Navbar.Brand>
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
                <FormControl type={"text"} value={input} id={"search-input"} name={"search-input"} autoComplete={"off"} onChange={handleChange} placeholder={"Digite..."} required={true}></FormControl>
                <CustomButton type={"submit"} variant={"primary"} className={"font-hero-new"} text={"Pesquisar"}></CustomButton>
              </legend>
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
