import React, {ReactNode} from "react";
import Container from "@/components/ui/container";

export default function Main({children, className}: { children: ReactNode, className?: string }) {
  return (
    <main className={"bg-body-tertiary min-h-[100vh]" + (className ? " " + className : "")}>
      <Container>
        {children}
      </Container>
    </main>
  );
}
