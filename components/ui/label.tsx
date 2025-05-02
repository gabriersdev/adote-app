import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({htmlFor, children, className = '', required = false}) => (
  <label htmlFor={htmlFor} className={`form-label ${className}`}>
    {children}
    {required && <span className="text-danger ms-1">*</span>}
  </label>
);

export default Label;
