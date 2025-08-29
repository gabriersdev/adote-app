"use client";

import React, from "react";
// import Content from "@/content/content";

// export const metadata = {
//   title: `Page Name - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function CreateAccount({setUserStatus}: { setUserStatus: Dispatch<SetStateAction<string>> }) {
  const [formData, setFormData] = useState({});
  
  const createAccFields = [
    {id: "name", name: "name", label: "Nome", type: "text", placeholder: "Seu nome", required: true},
    {id: "email", name: "email", label: "E-mail", type: "text", placeholder: "usuario@dominio.com", required: true},
    {id: "password-1", name: "password-1", label: "Senha", type: "password", placeholder: "*******", className: "mb-0", required: true},
    {id: "password-2", name: "password-2", label: "Confirmação de senha", type: "password", placeholder: "*******", className: "mb-0", required: true},
  ];
  
  const handleChange = (e: any) => {
    // Código duplicado com confirm-account/page
    // Se o e for um evento de input/select/textarea normal:
    if (e?.target) {
      const {name, value} = e.target || {};
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
    <div className={"max-w-1/2 mx-auto"}>
      <TitleContainer>Crie uma conta no portal de adoção</TitleContainer>
      <div className={"flex flex-col gap-5"}>
        <div className={"flex flex-wrap justify-between gap-4"}>
          <Title level={3} className={""}>Criar conta</Title>
        </div>
        <Form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
          {/*@ts-ignore*/}
          <DynamicForm fields={createAccFields} value={formData} onChange={handleChange}/>
          <div className={"flex flex-wrap justify-between gap-4 items-center"}>
            <Button variant={"primary"} type={"submit"} className={"font-hero-new"}>Criar conta</Button>
          </div>
        </Form>
        <div className={"text-center"}>
          <span className={"mb-0 font-hero-new d-inline-block me-1"}>Já possui conta?</span>
          <Button role={"link"} type={"button"} variant={"outline-info"} className={"border-0 p-0 m-0 font-hero-new bg-transparent text-primary"} onClick={() => {
            setUserStatus("unlogged");
          }}>Faça o login</Button>
        </div>
      </div>
    </div>
  )
}