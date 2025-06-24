import React from "react";
import Main from "@/components/layout/main";
import Content from "@/content/content";
import Title from "@/components/ui/title";
import Text from "@/components/ui/text";
import {Button} from "react-bootstrap";
import Link from "next/link";
import ClipboardCopy from "@/components/ui/clipboard-copy";

export const metadata = {
  title: `Seus dados foram enviados e serão analisados por nós! | ${Content.UI()["app-name"]}`,
  description: "",
};

export default function Page() {
  return (
    <Main className={"flex flex-col items-center gap-5"}>
      <section className={"max-w-1/2 mx-auto flex flex-col items-start gap-4"}>
        <span className={"text-4xl text-teal-500"}><i className="bi bi-check2"></i></span>
        <Title level={2} className={""}>
          <span className={"text-teal-500"}>Seus dados foram enviados e serão analisados por nós</span>
        </Title>
        <div>
          <span>ID do processo: <ClipboardCopy>12345678909</ClipboardCopy> </span>
        </div>
        <Text as={"p"} color={"body"} className={"font-hero-new"}>
          Fique atento aqui e no seu e-mail pois alguma informação ou documento complementar pode ser solicitado.
        </Text>
        <div className={"flex flex-wrap gap-1"}>
          <Link href={"/"}>
            <Button role={"link"} variant={"secondary"}>
              <div className={"d-flex flex-wrap items-center gap-2 font-hero-new"}>
                <i className="bi bi-house inline-block"></i>
                <span className={"inline-block"}>Ir ao início</span>
              </div>
            </Button>
          </Link>
          <Link href={"/panel/details/12345678909"}>
            <Button role={"link"} variant={"primary"}>
              <div className={"d-flex flex-wrap items-center gap-2 font-hero-new"}>
                <i className="bi bi-card-heading"></i>
                <span className={"inline-block"}>Acompanhar processo</span>
              </div>
            </Button>
          </Link>
        </div>
      </section>
    </Main>
  );
}
