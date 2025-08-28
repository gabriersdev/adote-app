import Title from "@/components/ui/title";
import React from "react";
import moment from "moment";
import Link from "next/link";

export default function Header() {
  const nowHours = moment().get("hours");

  return (
    <header className={"bg-body-tertiary border-bottom py-3 px-4 flex justify-between items-center"}>
      <Link href={"/panel"} className="flex flex-wrap items-center gap-3">
        <span className={"h-[36px] w-[36px] bg-gray-300 block rounded"}></span>
        <Title level={4} className={"m-0 fw-medium"}>Painel</Title>
      </Link>
      <div className={"flex flex-wrap gap-1 items-end"}>
        <span>{nowHours > 18 ? "Boa noite" : nowHours > 12 ? "Boa tarde" : "Bom dia"},</span><b>Bruno</b>
      </div>
    </header>
  )
}