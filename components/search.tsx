"use client";

import React, {useEffect, useState} from "react";
import Text from "@/components/ui/text";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const term = searchParams.get("s");
  const [termSearch, setTermSearch] = useState<string>("");
  const [results, setResults] = useState<Array<any>>([])

  useEffect(() => {
    if (!term) setTermSearch("");
    else setTermSearch(decodeURIComponent(term.trim()));
    
    // TODO - fazer a pesquisa aqui
    setResults([]);
  }, [term]);

  return (
    <>
      <Text as={"p"} color={"dark"} className={"font-hero-new"}>
        {termSearch ? (<>Você pesquisou por {"\""}<b className={"capitalize"}>{termSearch}</b>{"\""}</>) : (<>Busque por um termo</>)}
      </Text>
      <div className={"flex flex-col gap-2"}>
        {
          (!termSearch || !results.length) && (
            <Link href={"#"}>
              <div className={"border rounded flex flex-col bg-body p-3 m-0 font-hero-new"}>
                <b className={"text-body"}>Opa!</b>
                <div className={"text-secondary"}>
                  <span>Nenhum resultado foi encontrado</span>
                </div>
              </div>
            </Link>
          )
        }

        {
          // Array.from({length: 3}, (_, i) => i).map((_, i) => (
          results.map((_, i) => (
            <Link href={"#"} key={i}>
              <div className={"border rounded flex flex-col bg-body p-3 m-0 font-hero-new"}>
                <b className={"text-body"}>Processos</b>
                <div className={"text-secondary"}>
                  <span>Portal</span>{" "}
                  <i className="bi bi-arrow-right"></i>
                  {" "}<span>Processos</span></div>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}