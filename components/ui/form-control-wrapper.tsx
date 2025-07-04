import React from "react";
import {Form} from "react-bootstrap";
import Label from "@/components/ui/label";

interface FormControlWrapperProps {
  id?: string;
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

const FormControlWrapper: React.FC<FormControlWrapperProps> = ({
  id,
  label,
  required = false,
  className = "",
  children,
}) => (
  <Form.Group className={`${className} ${!className.includes("mb-0") && "mb-3"}`} controlId={id}>
    <Label htmlFor={id} required={required}>{label}</Label>
    {children}
  </Form.Group>
);

export default FormControlWrapper;
