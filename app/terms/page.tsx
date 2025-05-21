import React from "react";

import Main from "@/components/layout/main";
import Title from "@/components/ui/title";

export const metadata = {
  title: "Title Page",
  description: "Page description",
};

export default function Page() {
  return (
    <Main>
      <hgroup className={""}>
        <span className={"bg-teal-500 inline-flex px-[12.5px] h-[6px] mb-2 rounded-pill"}></span>
        <Title level={1} className={"fs-1 font-hero-new text-balance mb-5"}>Termos de serviço</Title>
      </hgroup>
    </Main>
  );
}
