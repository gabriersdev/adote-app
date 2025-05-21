import React, {ReactNode} from "react";
import Container from "@/components/ui/container";

export default function Main({children}: { children: ReactNode }) {
  return (
    <main className={"bg-body-tertiary min-h-[100vh]"}>
      <Container>
        {children}
      </Container>
    </main>
  );
}
