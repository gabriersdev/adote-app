import React from 'react';
import { Form } from 'react-bootstrap';
import FormControlWrapper from '@/components/ui/form-control-wrapper';

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
                                                 id,
                                                 label,
                                                 value,
                                                 onChange,
                                                 type = 'text',
                                                 required = false,
                                                 placeholder = '',
                                                 className = '',
                                               }) => (
  <FormControlWrapper id={id} label={label} required={required} className={className}>
    <Form.Control
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </FormControlWrapper>
);

export default InputField;
