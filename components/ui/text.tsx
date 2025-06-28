import React, {JSX} from "react";
import clsx from "clsx";

type BootstrapTextColor =
  | "body-secondary"
  | "body-primary"
  | "body-tertiary"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "muted"
  | "white"
  | "body"
  | "black-50"
  | "white-50";

type TextAlign = "start" | "center" | "end";
type Transform = "uppercase" | "lowercase" | "capitalize";
type WeightTypes = "bold" | "medium" | "light" | "semibold";

type Props = {
  children: React.ReactNode;
  color?: BootstrapTextColor;
  weigth?: WeightTypes;
  italic?: boolean;
  underline?: boolean;
  monospace?: boolean;
  balance?: boolean;
  transform?: Transform;
  align?: TextAlign;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

const Text: React.FC<Props> = (
  {
    children,
    color = "body-secondary",
    weigth,
    italic,
    underline,
    monospace,
    balance = true,
    transform,
    align,
    className,
    as,
  }) => {
  const classes = clsx(
    color && `text-${color}`,
    weigth && `fw-${weigth}`,
    italic && "fst-italic",
    underline && "text-decoration-underline",
    monospace && "font-monospace",
    balance && "text-balance",
    transform && `text-${transform}`,
    align && `text-${align}`,
    className,
  );

  const Component: keyof JSX.IntrinsicElements = as || "span";

  return <Component className={classes}>
    {typeof children === "string" ? children.trim().endsWith(".") ? children.trim() : `${children.trim()}.` : children}
  </Component>;
};

export default Text;
