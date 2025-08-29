"use client";

import React, from "react";
// import Content from "@/content/content";

// export const metadata = {
//   title: `Page Name - ${Content.UI()["app-name"]}`,
//   description: "",
// };

export default function ConfirmAccount() {
  const [formData, setFormData] = useState({});
  
  const confirmAccFiels = [
    {id: "code", name: "code", label: "Código", type: "number", placeholder: "000000", required: true},
  ];
  
  const handleChange = (e: any) => {
    // Código duplicado com sign-in/page
    // Se o e for um evento de input/select/textarea normal:
    if (e?.target) {
      const {name, value} = e.target ? e.target : {};
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