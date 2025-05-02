import React from "react";
import {Form} from "react-bootstrap";
import FormControlWrapper from "@/components/ui/form-control-wrapper";

interface Option {
  label: string;
  value: string | number;
}

interface SelectFieldProps {
  id: string;
  label: string;
  options: Option[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  className?: string;
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  className = "",
  placeholder = "Selecione...",
}) => (
  <FormControlWrapper id={id} label={label} required={required} className={className}>
    <Form.Select value={value} onChange={onChange} required={required}>
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Form.Select>
  </FormControlWrapper>
);

export default SelectField;
