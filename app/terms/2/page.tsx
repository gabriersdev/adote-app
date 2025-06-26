"use client";

import React, {useEffect, useState} from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import Title from "@/components/ui/title";
import {Button, Form} from "react-bootstrap";
import Link from "next/link";
import DynamicForm from "@/components/ui/dynamic-form";
import Content from "@/content/content";

// export const metadata = {
//   title: `Fase 1 de 3 - Identificação - Processo de Adoção - ${Content.UI()["app-name"]}`,
//   description: "",
// };

const FormConfirmationData = () => {
  const [formData, setFormData] = useState({});

  const fields = [
    {id: "name", name: "name", label: "Nome", type: "text", placeholder: "Seu nome", required: true},
    {id: "lastname", name: "lastname", label: "Sobrenome", type: "text", placeholder: "Sobrenome", required: true},
    {id: "nascdate", name: "nascdate", label: "Data de nascimento", type: "date", placeholder: "01/01/2000", required: true},
    {id: "cpf", name: "cpf", label: "CPF", type: "text", placeholder: "000.000.000-00", required: true},
  ];

  const handleChange = (e: any) => {
    // Se o e for um evento de input/select/textarea normal:
    if (e?.target) {
      const {name, value} = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      // Caso seja um objeto custom (exemplo no checkbox)
      const {name, value} = e;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // aqui você pode enviar os dados para API, etc
  };

  return (
    <div className={""}>
      <Form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
        {/*@ts-ignore*/}
        <DynamicForm fields={fields} value={formData} onChange={handleChange}/>
        <div className={"flex flex-wrap gap-1 font-hero-new"}>
          {
            [
              ["/adoption/1", (<Button variant={"danger"}>Voltar</Button>)],
              ["#", (<Button variant={"secondary"} type={"button"} onClick={() => {
                const con = confirm("Tem certeza que deseja abandonar o processo? Seu progresso será perdido.")
                if (con) window.location.href = "/"
              }}>Sair</Button>)],
              ["#", (<Button variant={"primary"} type={"submit"}>Próximo</Button>)],
            ].map((arr, i) => {
              // @ts-ignore
              return arr[0] === "#" ? <div key={i}>{arr[1]}</div> : <Link key={i} href={arr[0] ?? "#"}>{arr[1]}</Link>
            })
          }
        </div>
      </Form>
    </div>
  )
}

export default function Page() {
  useEffect(() => {
    if (!document) return;
    document.title = `Fase 1 de 3 - Identificação - Processo de Adoção - ${Content.UI()["app-name"]}`
  }, []);

  return (
    <Main>
      <TitleContainer>Identificação</TitleContainer>
      <section className={"flex flex-col gap-5 items-stretch"}>
        <div className=" flex flex-col gap-5">
          <Title level={2} className={"font-hero-new"}>
            Confirme e informe seus dados de identificação
          </Title>
          <FormConfirmationData/>
        </div>
      </section>
    </Main>
  );
}
