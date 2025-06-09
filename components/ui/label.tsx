import React from "react";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({htmlFor = "", children, className = "", label, required = false}) => (
  <label htmlFor={htmlFor} className={`form-label ${className}`}>
    {label && <span className={"mb-2 d-inline-block"}>{label}</span>}
    {children}
    {required && <span className="text-danger ms-1">*</span>}
  </label>
);

export default Label;
