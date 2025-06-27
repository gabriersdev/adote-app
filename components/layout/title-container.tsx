import Title from "@/components/ui/title";
import React, {ReactNode} from "react";

export default function TitleContainer({ children, className, level, marginBottom }: { children: ReactNode, className?: string, level?: number, marginBottom?: boolean }) {
  return (
    <hgroup className={className}>
      <span className={"bg-teal-500 inline-flex px-[7.5px] h-[6px] mb-2 rounded-pill"}></span>
      {/*@ts-ignore*/}
      <Title level={level || 1} className={`text-balance ${["null", "undefined"].includes(marginBottom) || marginBottom ? "mb-5" : "mb-0"}`}>{children}</Title>
    </hgroup>
  )
}