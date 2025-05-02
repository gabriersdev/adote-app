import React from "react";
import {Button, ButtonProps} from "react-bootstrap";

type ButtonVariant =
  | "primary" | "secondary" | "success" | "danger"
  | "warning" | "info" | "light" | "dark" | "link"
  | "outline-info" | "outline-primary" | "outline-secondary" | "outline-light" | "outline-dark" | "outline-danger";

type ButtonSize = "sm" | "lg";

interface CustomButtonProps extends Omit<ButtonProps, "variant" | "size" | "type"> {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = "primary",
  size,
  type = "button",
  onClick,
  disabled = false,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={!rest.className ? "font-inter" : rest.className}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
