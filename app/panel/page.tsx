"use client";

import React, {useState} from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import Title from "@/components/ui/title";
import {Button, Form} from "react-bootstrap";
import DynamicForm from "@/components/ui/dynamic-form";

// export const metadata = {
//   title: `Painel - ${Content.UI()["app-name"]}`,
//   description: "",
// };

const unloggedFields = [
  {id: "email", name: "email", label: "E-mail", type: "text", placeholder: "usuario@dominio.com", required: true},
  {id: "password", name: "password", label: "Senha", type: "password", placeholder: "*******", className: "mb-0", required: true},
];


export default function Page() {
  const [formData, setFormData] = useState({});

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
    <Main className={"flex flex-col items-center gap-5"}>
      <div className={"max-w-1/2 mx-auto"}>
        <TitleContainer>Acesse o portal de adoção do Abrigo</TitleContainer>
        <div className={"flex flex-col gap-5"}>
          <div className={"flex flex-wrap justify-between gap-4 items-center"}>
            <Title level={3} className={""}>Login</Title>
            <Button variant={"outline-info"} className={"border-0 p-0 m-0 font-hero-new bg-transparent text-primary"}>Criar conta</Button>
          </div>
          <Form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
            {/*@ts-ignore*/}
            <DynamicForm fields={unloggedFields} value={formData} onChange={handleChange}/>
            <div className={"flex flex-wrap justify-between gap-4 items-center"}>
              <Button variant={"primary"} type={"submit"} className={"font-hero-new"}>Entrar</Button>
              <Button variant={"outline-info"} className={"border-0 p-0 m-0 font-hero-new bg-transparent text-primary"}>Esqueci a senha</Button>
            </div>
          </Form>
        </div>
      </div>
    </Main>
  );
}
