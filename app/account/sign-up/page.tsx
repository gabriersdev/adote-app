"use client";

import React, from "react";
// import Content from "@/content/content";

// export const metadata = {
//   title: `Page Name - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function Login({setUserStatus}: {setUserStatus: Dispatch<SetStateAction<string>>}) {
  const [formData, setFormData] = useState({});
  
  const unloggedFields = [
    {id: "email", name: "email", label: "E-mail", type: "text", placeholder: "usuario@dominio.com", required: true},
    {id: "password", name: "password", label: "Senha", type: "password", placeholder: "*******", className: "mb-0", required: true},
  ];
  
  const handleChange = (e: any) => {
    // Código duplicado com confirm-account/page e sign-in/page
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