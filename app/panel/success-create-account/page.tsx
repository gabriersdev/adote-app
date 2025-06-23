import React from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content";
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import {Button} from "react-bootstrap";
import Link from "next/link";

export const metadata = {
  title: `Conta criada com sucesso! | ${Content.UI()["app-name"]}`,
  description: "",
};

export default function Page() {
  return (
    <Main className={"flex flex-col items-center gap-5"}>
      <section className={"max-w-1/2 mx-auto flex flex-col items-start gap-4"}>
        <span className={"text-4xl text-teal-500"}><i className="bi bi-check2"></i></span>
        <Title level={2} className={""}>
          <span className={"text-teal-500"}>Bem vindo! Sua conta foi criada com sucesso</span>
        </Title>
        <Text as={"p"} className={"font-hero-new text-body"}>
          Agora você já pode adotar um novo animalzinho para alegrar a sua família e o seu novo companheiro.
        </Text>
        <Button role={"link"} variant={"primary"}>
          <Link href={"/panel"}>
            <div className={"d-flex flex-wrap items-center gap-2 font-hero-new"}>
              <i className="bi bi-house inline-block"></i>
              <span className={"inline-block"}>Ir ao início</span>
            </div>
          </Link>
        </Button>
      </section>
    </Main>
  );
}
