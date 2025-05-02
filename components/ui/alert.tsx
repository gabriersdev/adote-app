import React, {FC} from "react";
import {Alert} from "react-bootstrap";
import Grid from "@/components/ui/grid";
import Card from "@/components/ui/card-box";

type FeedbackErrorProps = {
  code?: number;
  text?: string;
  type?: "card" | "alert";
};

const FeedbackError: FC<FeedbackErrorProps> = ({code, text, type}) => {
  const message = (text || "").toLowerCase().trim();

  if (message === "network error") {
    if (type === "card") {
      return (
        <Grid>
          <Card title="Erro de conexão. Verifique sua internet ou contate o administrador">
            Não foi possível estabelecer conexão com o servidor. Pode ser um erro interno ou que você está sem internet.
          </Card>
        </Grid>
      );
    }

    return (
      <Alert variant="danger" className="mt-0">
        Erro de conexão com a rede. Verifique se você está conectado à internet e tente novamente.
      </Alert>
    );
  }

  const errorMessages: Record<number, string> = {
    401: "Você não tem permissão para acessar este recurso.",
    403: "Acesso não autorizado. Retorno #403.",
    404: "Recurso não encontrado.",
    500: "Erro interno do servidor. Tente novamente mais tarde.",
  };

  const messageToShow = errorMessages[code || 0] || `Erro ${code ?? "não mapeado"}. Contate o administrador ou tente novamente mais tarde.`;

  return (
    <Alert variant="danger" className="mt-0">
      {messageToShow}
    </Alert>
  );
};

export default FeedbackError;
