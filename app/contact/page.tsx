import React from "react";

import Util from "@/utils/Util";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import Content from "@/content/content";
import Main from "@/components/layout/main";
import Title from "@/components/ui/title";
import Link from "next/link";

export const metadata = {
  title: `Contato - ${Content.UI()["app-name"]}`,
  description: "",
};

export default function Page() {
  const data = [["cnpj", "70.900.156/00001-01"], ["tel", "(31) 3014-3014"], ["mail", "abrigo@abrigo.com"], ["address", "Rua da Serra, N.º 200 - Serra, Sabará-MG"]];

  return (
    <Main>
      <hgroup className={""}>
        <span className={"bg-teal-500 inline-flex px-[12.5px] h-[6px] mb-2 rounded-pill"}></span>
        <Title level={1} className={"fs-1 font-hero-new text-balance mb-5"}>Contato</Title>
      </hgroup>

      <ListGroup activeKey={-1}>
        {
          data.map((item, index) => {
            return (
              <ListGroupItem key={index} className={"d-flex gap-2 bg-body border-tertiary text-body"} style={{borderColor: "var(--bs-gray-300)"}} as={Link} href={
                item[0] === "tel" ? `tel:${item[1]}` :
                  item[0] === "mail" ? `mailto:${item[1]}` :
                    item[0] === "address" ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item[1])}` :
                      ''
              }>
                <div className={"text-teal-500"}>
                  {
                    item[0] === "tel" ? <span><i className="bi bi-phone-fill"></i></span> :
                      item[0] === "mail" ? <span><i className="bi bi-at"></i></span> :
                        item[0] === "address" ? <span><i className="bi bi-compass-fill"></i></span> :
                          item[0] === "cnpj" ? <span><i className="bi bi-123"></i></span> :
                            <span><i className="bi bi-info"></i></span>
                  }
                </div>
                {
                  <span>{Util.renderText(item[1])}</span>
                }
              </ListGroupItem>
            )
          })
        }
      </ListGroup>
    </Main>
  );
}
