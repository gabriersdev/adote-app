"use client";

import React, {useEffect, useState} from "react";
import Main from "@/components/layout/main";
import Select, {MultiValue} from 'react-select';
import Label from "@/components/ui/label";
import SelectField from "@/components/ui/select-field";
import Grid from "@/components/ui/grid";
import Title from "@/components/ui/title";
import Modal from "@/components/ui/modal";
import Image from "next/image";
import {Button, Card} from "react-bootstrap";

import {createContext, useContext} from "react";
import axios from "axios";
import Content from "@/content/content";

// export const metadata = {
//   title: "Home",
//   description: "Page description",
// };

const ThemeContext = createContext({});

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  {value: 'dog', label: 'Cachorro'},
  {value: 'cat', label: 'Gato'},
];

function MultipleSelect({label, value, onChange, className, labelClassName}: { label: string, value: any, onChange: any, className?: string, labelClassName?: string }) {
  return (
    <div>
      <Label htmlFor={"select-ms"} className={labelClassName} label={label}>
        <Select
          id="select-ms"
          isMulti
          options={options}
          value={value}
          onChange={onChange}
          placeholder="Selecione as espécies"
          className={`basic-multi-select ${className}`}
          classNamePrefix="select"
        />
      </Label>
    </div>
  )
}

function AnimalsSearch() {
  // @ts-ignore
  const {list} = useContext(ThemeContext);
  // console.log(list);
  
  const [species, setSpecies] = useState<MultiValue<OptionType>>([
    {value: 'dog', label: 'Cachorro'},
    {value: 'cat', label: 'Gato'},
  ]);
  
  const genderOptions = [
    {label: "Macho", value: "Macho"},
    {label: "Fêmea", value: "Fêmea"},
    {label: "Todos", value: "Todos"}
  ];
  
  const [gender, setGender] = useState<string>("");
  
  return (
    <div>
      <div className="bg-body-secondary d-flex justify-content-between align-items-center w-full px-4 py-3 border border-secondary-subtle flex-wrap gap-3">
        <div>
          <MultipleSelect value={species} onChange={setSpecies} label={"Espécie"} labelClassName={"mb-0"}/>
        </div>
        <div className={"min-w-full md:min-w-64"}>
          <SelectField id={"select-gender"} label={"Sexo"} options={genderOptions} value={gender} onChange={(e: any) => setGender(e.target.value)} className={"mb-0"}/>
        </div>
      </div>
    </div>
  )
}

function AnimalsList() {
  // @ts-ignore
  const {list} = useContext(ThemeContext);
  
  return (
    <div>
      <Grid cols={3}>
        {
          // @ts-ignore
          // list
          Array.from({length: 3}, (v, i) => v +1).map((item, i) => (
            <div key={i}>
              <Modal
                actionChildren={(
                  <button role={"button"} key={i} className={"d-flex border rounded-0 inline p-3 min-h-[300px] w-full relative [&_*]:text-white"} style={{backgroundImage: "url('/images/cat.jpg')", backgroundSize: "cover"}}>
                    <div className={"absolute bg-gradient-to-b from-black/0 to-black/70 w-full h-full top-0 left-0"}></div>
                    <div className="d-flex flex-column align-bottom justify-end flex-grow-1 z-1">
                      <div className="d-flex justify-content-between align-items-end gap-3 flex-wrap">
                        <div className="text-left">
                          <span className={"hidden"}>{JSON.stringify(item)}</span>
                          <Title level={3} className={"font-hero-new"}>Alessandra</Title>
                          <span className={"p-0 m-0"}>Gato fêmea</span>
                        </div>
                        <div className={"d-flex flex-column text-right"}>
                          <span>2 anos</span>
                          <span>Pequeno porte</span>
                        </div>
                      </div>
                    </div>
                  </button>
                )}
                actionsFooter={(
                  <Button variant={"primary"} className={"font-hero-new"} onClick={() => {
                  }}>Adotar</Button>
                )}
                title={""} backdrop={true}>
                <div className="d-flex flex-row sm:flex-wrap overflow-x-auto md:flex-nowrap justify-content-between align-items-stretch gap-5 font-hero-new">
                  <div><Image alt={"Imagem do animal"} src={"/images/cat.jpg"} width={500} height={100} className={"h-full w-[1600px] rounded-lg object-cover"}/></div>
                  <div className={"flex-shrink-1 d-flex justify-content-between flex-column gap-3"}>
                    <Title level={3} className={"font-hero-new"}>Alessandra</Title>
                    <ul className={"m-0 p-0"}>
                      {
                        ["Gato", "Fêmea", "3.2kg", "Saudável", "2 anos"].map((e, i) => {
                          return (<li key={i} className={""}>{e}</li>)
                        })
                      }
                    </ul>
                    <div>
                      <p className={"m-0"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste facere suscipit corporis rem nesciunt a. Itaque, impedit, ipsum officiis distinctio tenetur ducimus, maxime natus odio modi consequuntur ratione sequi? Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          ))
        }
      </Grid>
    </div>
  )
}

export default function Home() {
  const [list, setList] = useState<Array<any>>([])
  
  const contextData = {
    list,
    setList
  }
  
  useEffect(() => {
  
  }, []);
  
  useEffect(() => {
    axios.get(`${Content.Host()}/`).then((r) => {
      console.log(r.data)
    })
  }, []);
  
  return (
    <Main>
      <div className={"flex flex-col gap-4"}>
        <div className="flex flex-col gap-4 pb-4 border-bottom border-secondary-subtle">
          <Title level={2} className={"mb-0 pb-0"}>Seus processos</Title>
          <Grid cols={2}>
            <Card>
              <Card.Header className={"bg-body-secondary"}>
                <span className={"font-semibold"}>Processo 12345678909</span>
              </Card.Header>
              <Card.Body className={"flex flex-col items-start gap-3"}>
                <Title level={3}>Seu processo de adoção está em andamento</Title>
                <div>
                  <span className={"text-muted"}>Status:</span>
                  {" "}
                  <span>Aguardando análise</span>
                </div>
                <Button variant={"primary"} className={"font-hero-new"}>
                  Acompanhar processo
                </Button>
              </Card.Body>
            </Card>
          </Grid>
        </div>
        <div className="flex flex-col gap-4">
          <ThemeContext.Provider value={contextData}>
            <Title level={2} className={"mb-0 pb-0"}>Animais em adoção</Title>
            <AnimalsSearch/>
            <AnimalsList/>
          </ThemeContext.Provider>
        </div>
      </div>
    </Main>
  );
}
