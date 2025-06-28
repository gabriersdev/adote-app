"use client";

import React, {useState, useCallback, ReactNode} from "react";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";

/**
 * Tenta extrair uma representação de texto simples de um ReactNode.
 * Funciona bem para strings, números e elementos aninhados simples.
 * @param children O ReactNode a ser processado.
 * @returns Uma string representando o conteúdo.
 */
const extractTextFromChildren = (children: ReactNode): string => {
  if (typeof children === "string" || typeof children === "number") {
    return children.toString();
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }
  // @ts-ignore
  if (React.isValidElement(children) && children.props.children) {
    // @ts-ignore
    return extractTextFromChildren(children.props.children);
  }
  return "";
};

interface ClipboardCopyProps {
  children: ReactNode;
  // O valor exato a ser copiado. Se não for fornecido, tentará extrair texto dos children.
  copyValue?: string;
  // Texto do tooltip antes da cópia
  tooltipText?: string;
  successTooltipText?: string;
  successDuration?: number;
}

const ClipboardCopy: React.FC<ClipboardCopyProps> = (
  {
    children,
    copyValue,
    tooltipText = "Clique para copiar",
    successTooltipText = "Conteúdo copiado!",
    successDuration = 2000,
  }) => {
  const [currentTooltipText, setCurrentTooltipText] = useState(tooltipText);

  const handleCopy = useCallback(async () => {
    // Determina o texto a ser copiado. Usa `copyValue` se existir, senão extrai dos `children`.
    const textToCopy = copyValue ?? extractTextFromChildren(children);

    if (!textToCopy) {
      alert("ClipboardCopy: Nenhum texto para copiar.");
      return;
    }

    try {
      // Usa a API do Clipboard para copiar o texto
      await navigator.clipboard.writeText(textToCopy);

      // Atualiza o tooltip para dar feedback de sucesso
      setCurrentTooltipText(successTooltipText);

      // Retorna ao texto original do tooltip após um tempo
      setTimeout(() => {
        setCurrentTooltipText(tooltipText);
      }, successDuration);

    } catch (err) {
      alert("Falha ao copiar para a área de transferência: " + err);
      setCurrentTooltipText("Erro ao copiar! X5");
      setTimeout(() => {
        setCurrentTooltipText(tooltipText);
      }, successDuration);
    }
  }, [children, copyValue, tooltipText, successTooltipText, successDuration]);

  // Reseta o tooltip se o texto principal mudar, para evitar "Copiado!" preso na tela.
  React.useEffect(() => {
    setCurrentTooltipText(tooltipText);
  }, [tooltipText]);

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-copy-${Math.random()}`}><span className={"text-[16px]"}>{currentTooltipText}</span></Tooltip>}
    >
      <div
        onClick={handleCopy}
        className={"inline-flex gap-1 items-center"}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleCopy().then(() => {
          })
        }}
      >
        {children}
        <button role={"img"} className={"bg-transparent p-0 m-0 border-0"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000">
            <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/>
          </svg>
        </button>
      </div>
    </OverlayTrigger>
  );
};

export default ClipboardCopy;