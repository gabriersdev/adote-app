"use client";

import React, {useEffect, useState} from "react";
import Main from "@/components/layout/main";
import TitleContainer from "@/components/layout/title-container";
import {Button, Form} from "react-bootstrap";
import Link from "next/link";
import DynamicForm from "@/components/ui/dynamic-form";
import Content from "@/content/content";

// export const metadata = {
//   title: `Fase 1 de 3 - Identificação - Processo de Adoção - ${Content.UI()["app-name"]}`,
//   description: "",
// };

const FormComponent = () => {
  const [formData, setFormData] = useState({
    cep: "",
    log: "",
    num: "",
    reg: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    if (!formData["cep"]) return;
    const cep = formData["cep"];
    const cepSanitized = cep.match(/\d/g) || [];

    if (cepSanitized.length >= 8) {
      fetch(`https://viacep.com.br/ws/${cepSanitized.join("").substring(0, 8)}/json/`).then((response: Response) => {
        return response.json();
      }).then(json => {
        const [log, reg, city, state] = [json["logradouro"], json["bairro"], json["localidade"], json["uf"]]

        const data = {log, reg, city, state}
        for (let d in data) {
          // @ts-ignore
          handleChange({name: d, value: data[d]})
        }
      }).catch(error => {
        alert("Não foi possível obter os dados de localização do CEP informado. Verifique se o CEP está certo.")
        console.log(error);
      })
    }
  }, [formData["cep"]]);

  const fields = [
    {id: "cep", name: "cep", label: "CEP - Informe para preencher os campos abaixo", type: "text", placeholder: "00.000-000", required: true},
    {id: "log", name: "log", label: "Logradouro", type: "text", placeholder: "", required: true},
    {id: "num", name: "num", label: "Número", type: "text", placeholder: "", required: false},
    {id: "reg", name: "reg", label: "Bairro", type: "text", placeholder: "", required: true},
    {id: "city", name: "city", label: "Cidade", type: "text", placeholder: "", required: true},
    {id: "state", name: "state", label: "Estado (UF)", type: "text", placeholder: "", required: true},
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
              ["/adoption/2", (<Button variant={"danger"}>Voltar</Button>)],
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
    document.title = `Fase 1 de 3 - Endereço - Processo de Adoção - ${Content.UI()["app-name"]}`
  }, []);

  return (
    <Main>
      <TitleContainer>Endereço</TitleContainer>
      <section className={"flex flex-col gap-5 items-stretch"}>
        <div className=" flex flex-col gap-5">
          <FormComponent/>
        </div>
      </section>
    </Main>
  );
}
