import React from "react";
import {Form} from "react-bootstrap";
import FormControlWrapper from "@/components/ui/form-control-wrapper";

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = (
  {
    id,
    name = "",
    label,
    value,
    checked = false,
    onChange,
    type = "text",
    required = true,
    placeholder,
    className = "",
  }) => {
  if (type === "checkbox" || type === "radio") {
    return (
      <Form.Check
        type={type}
        id={id}
        name={name}
        label={label}
        value={value}
        checked={checked}
        onChange={onChange}
        className={className}
      />
    );
  }

  return (
    <FormControlWrapper id={id} label={label} required={required} className={className}>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </FormControlWrapper>
  );
};

export default InputField;
