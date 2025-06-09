"use client";

import React, {useState} from "react";
import Main from "@/components/layout/main";
import Select, {MultiValue} from 'react-select';
import Label from "@/components/ui/label";
import SelectField from "@/components/ui/select-field";

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
    { label: "Macho", value: "Macho" },
    { label: "Fêmea", value: "Fêmea" },
    { label: "Todos", value: "Todos" }
  ];

  const [gender, setGender] = useState<string>("");

  return (
    <div>
      <div className="bg-body-secondary d-flex justify-content-between align-items-center w-full px-4 py-3 border border-secondary-subtle">
        <div>
          <MultipleSelect value={species} onChange={setSpecies} label={"Espécie"} labelClassName={"mb-0"}/>
        </div>
        <div className={"min-w-64"}>
          <SelectField id={"select-gender"} label={"Sexo"} options={genderOptions} value={gender} onChange={(e: any) => setGender(e.target.value)} className={"mb-0"}/>
        </div>
      </div>
    </div>
  )
}

function AnimalsList() {
  return null
}

export default function Home() {
  return (
    <Main className={""}>
      <div className="h-[200px] d-flex flex-column gap-5">
        <AnimalsSearch/>
        <AnimalsList/>
      </div>
    </Main>
  );
}
