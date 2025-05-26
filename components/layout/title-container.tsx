import Title from "@/components/ui/title";
import React, {ReactNode} from "react";

export default function TitleContainer({ children }: { children: ReactNode }) {
  return (
    <hgroup className={""}>
      <span className={"bg-teal-500 inline-flex px-[7.5px] h-[6px] mb-2 rounded-pill"}></span>
      <Title level={1} className={"text-balance mb-5"}>{children}</Title>
    </hgroup>
  )
}