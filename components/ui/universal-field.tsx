import React from "react";
import {Form} from "react-bootstrap";
import Label from "@/components/ui/label";

export type FieldOption = {
  id: string;
  label: string;
  value: string;
};

export type FieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "textarea" | "checkbox" | "radio" | "select";
  value?: any;
  checked?: boolean;
  placeholder?: string;
  required?: boolean;
  className?: string;
  options?: FieldOption[];
  onChange: (e: React.ChangeEvent<any>) => void;
};

const UniversalField: React.FC<FieldProps> = ({
                                                id,
                                                name,
                                                label,
                                                type,
                                                value = "",
                                                checked = false,
                                                placeholder,
                                                required = true,
                                                className = "",
                                                options = [],
                                                onChange,
                                              }) => {
  if (type === "textarea") {
    return (
      <Form.Group className={className} controlId={id}>
        <Label htmlFor={id} required={required}>{label}</Label>
        <Form.Control
          as="textarea"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </Form.Group>
    );
  }

  if (type === "checkbox") {
    return (
      <Form.Check
        id={id}
        type="checkbox"
        name={name}
        label={label}
        checked={checked}
        onChange={(e) =>
          onChange({
            ...e,
            target: {
              ...e.target,
              name,
              value: e.target.checked,
            },
          })
        }
        className={className}
      />
    );
  }

  if (type === "radio") {
    return (
      <Form.Group className={className}>
        <Label htmlFor={id} required={required}>{label}</Label>
        {options.map((opt) => (
          <Form.Check
            key={opt.id}
            id={opt.id}
            type="radio"
            name={name}
            label={opt.label}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
          />
        ))}
      </Form.Group>
    );
  }

  if (type === "select") {
    return (
      <Form.Group className={className} controlId={id}>
        <Label htmlFor={id} required={required}>{label}</Label>
        <Form.Control
          as="select"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="">Selecione</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  }

  // text, email, number, password...
  return (
    <Form.Group className={className} controlId={id}>
      <Label htmlFor={id} required={required}>{label}</Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </Form.Group>
  );
};

export default UniversalField;
