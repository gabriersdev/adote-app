import React from 'react';
import {Form} from 'react-bootstrap';
import FormControlWrapper from '@/components/ui/form-control-wrapper';

interface TextareaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
                                                       id,
                                                       label,
                                                       value,
                                                       onChange,
                                                       required = false,
                                                       placeholder = '',
                                                       rows = 4,
                                                       className = '',
                                                     }) => (
  <FormControlWrapper id={id} label={label} required={required} className={className}>
    <Form.Control
      as="textarea"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
    />
  </FormControlWrapper>
);

export default TextareaField;
