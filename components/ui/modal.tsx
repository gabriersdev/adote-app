import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import BSModal from "react-bootstrap/Modal";
import Title from "@/components/ui/title";

type Props = {
  actionChildren: React.ReactNode;
  className?: string,
  title?: string,
  children?: React.ReactNode,
  actionsFooter?: React.ReactNode,
  backdrop?: boolean,
  size?: "lg" | "sm" | "md" | "xl",
}

function Modal({actionChildren, className, title, children, actionsFooter, backdrop, size}: Props) {
  if (!size) size = "lg";

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={"m-0 b-0"} onClick={handleShow}>
        {actionChildren}
      </div>

      {/*// @ts-ignore*/}
      <BSModal show={show} onHide={handleClose} backdrop={backdrop && "static"} keyboard={backdrop && false} centered className={className} size={size || "lg"}>
        <BSModal.Header closeButton className={"border-0"}>
          <Title level={4} className={"font-inter-tight mb-0"}>{title}</Title>
        </BSModal.Header>

        <BSModal.Body>
          {children}
        </BSModal.Body>

        <BSModal.Footer className="border-0">
          {actionsFooter}
          <Button variant="secondary" className={"font-hero-new leading-normal"} onClick={handleClose}>Fechar</Button>
        </BSModal.Footer>
      </BSModal>
    </>
  );
}

export default Modal;