"use client";

import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import Title from "@/components/ui/title";
import {Button, Form} from "react-bootstrap";
import DynamicForm from "@/components/ui/dynamic-form";
import Text from "@/components/ui/text";
import Content from "@/content/content";
import {useRouter} from "next/navigation";

// export const metadata = {
//   title: `Painel - ${Content.UI()["app-name"]}`,
//   description: "",
// };

function Login({setUserStatus}: {setUserStatus: Dispatch<SetStateAction<string>>}) {
  const [formData, setFormData] = useState({});

  const unloggedFields = [
    {id: "email", name: "email", label: "E-mail", type: "text", placeholder: "usuario@dominio.com", required: true},
    {id: "password", name: "password", label: "Senha", type: "password", placeholder: "*******", className: "mb-0", required: true},
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
    setUserStatus("")
  };

  return (
    <div className={"max-w-1/2 mx-auto"}>
      <TitleContainer>Acesse o portal de adoção do Abrigo</TitleContainer>
      <div className={"flex flex-col gap-5"}>
        <div className={"flex flex-wrap justify-between gap-4 items-center"}>
          <Title level={3} className={""}>Login</Title>
          <Button role={"link"} variant={"outline-info"} className={"border-0 p-0 m-0 font-hero-new bg-transparent text-primary"} onClick={() => {setUserStatus("createAcc")}}>Criar conta</Button>
        </div>
        <Form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
          {/*@ts-ignore*/}
          <DynamicForm fields={unloggedFields} value={formData} onChange={handleChange}/>
          <div className={"flex flex-wrap justify-between gap-4 items-center"}>
            <Button variant={"primary"} type={"submit"} className={"font-hero-new"}>Entrar</Button>
            <Button variant={"outline-info"} className={"border-0 p-0 m-0 font-hero-new bg-transparent text-primary"} onClick={() => {
              alert("Envie um e-mail para devgabrielribeiro@gmail.com, informando o seu endereço e-mail e a última senha que você se recorda, para recuperar a sua conta.")
            }}>Esqueci a senha</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

function CreateAccount({setUserStatus}: {setUserStatus: Dispatch<SetStateAction<string>>}) {
  const [formData, setFormData] = useState({});

  const createAccFields = [
    {id: "name", name: "name", label: "Nome", type: "text", placeholder: "Seu nome", required: true},
    {id: "email", name: "email", label: "E-mail", type: "text", placeholder: "usuario@dominio.com", required: true},
    {id: "password-1", name: "password-1", label: "Senha", type: "password", placeholder: "*******", className: "mb-0", required: true},
    {id: "password-2", name: "password-2", label: "Confirmação de senha", type: "password", placeholder: "*******", className: "mb-0", required: true},
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

function ConfirmAccount() {
  const [formData, setFormData] = useState({});

  const confirmAccFiels = [
    {id: "code", name: "code", label: "Código", type: "number", placeholder: "000000", required: true},
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
    <div className={"max-w-1/2 mx-auto"}>
      <TitleContainer>Confirme a conta que você criou</TitleContainer>
      <div className={"flex flex-col gap-5"}>
        <div className={"flex flex-wrap justify-between gap-4"}>
          <Title level={3} className={""}>Informe o código que enviamos no seu e-mail</Title>
        </div>
        <Form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
          {/*@ts-ignore*/}
          <DynamicForm fields={confirmAccFiels} value={formData} onChange={handleChange}/>
          <div className={"flex flex-wrap justify-between gap-4 items-center"}>
            <Button variant={"primary"} type={"submit"} className={"font-hero-new"}>Confirmar conta</Button>
          </div>
        </Form>
        <div className={"font-hero-new"}>
          <Text as={"p"} className={"text-body-secondary mb-0"}>Verifique também a caixa de spam.</Text>
          <Text as={"p"} className={"text-primary mb-0 opacity-50"}>Reenviar código (disponível em 58s).</Text>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [content, setContent] = useState(<></>);
  // const [userStatus, setUserStatus] = useState("createAcc")
  // const [userStatus, setUserStatus] = useState("unlogged")
  const [userStatus, setUserStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!userStatus) return;
    else if (userStatus === "unlogged") setContent(<Login setUserStatus={setUserStatus}/>)
    else if (userStatus == "createAcc") setContent(<CreateAccount setUserStatus={setUserStatus}/>)
    else if (userStatus == "confirmAcc") setContent(<ConfirmAccount/>)
  }, [userStatus])

  useEffect(() => {
    if (!document) return;
    document.title = `Painel - ${Content.UI()["app-name"]}`
  }, []);

  if (!userStatus) return router.push("/panel/dashboard");
  
  return (
    <Main className={"flex flex-col items-center gap-5"}>
      {content}
    </Main>
  );
}
