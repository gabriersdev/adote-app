"use client";

import React, {useState} from "react";
import Main from "@/components/layout/main";
import Select, {MultiValue} from 'react-select';
import Label from "@/components/ui/label";
import SelectField from "@/components/ui/select-field";
import Grid from "@/components/ui/grid";
import Title from "@/components/ui/title";
import Modal from "@/components/ui/modal";
import Image from "next/image";

// export const metadata = {
//   title: "Home",
//   description: "Page description",
// };

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
  return (
    <div>
      <Grid cols={1}>
        {
          Array.from({length: 4}).map((_, i) => (
            <button role={"button"} key={i} className={"d-flex border rounded-0 inline p-3 min-h-[300px]"}>
              <div className="d-flex flex-column align-bottom justify-end flex-grow-1">
                <div className="d-flex justify-content-between align-items-end gap-3 flex-wrap">
                  <div className="text-left">
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
          ))
        }
      </Grid>
    </div>
  )
}

export default function Home() {
  return (
    <Main className={""}>
      <div className="d-flex flex-column gap-5">
        <Modal title={""} backdrop={true}>
          <div className="d-flex flex-row sm:flex-wrap overflow-x-auto md:flex-nowrap justify-content-between align-items-stretch gap-5 font-hero-new">
            <div><Image alt={"Imagem do animal"} src={"/"} width={50} height={50} className={""}/></div>
            <div className={"flex-shrink-1 d-flex justify-content-between flex-column gap-3"}>
              <Title level={3} className={"font-hero-new "}>Alessandra</Title>
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
        <AnimalsSearch/>
        <AnimalsList/>
      </div>
    </Main>
  );
}
