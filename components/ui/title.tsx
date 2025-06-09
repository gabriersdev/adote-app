import React, {JSX} from "react";

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`fw-semibold font-hero-new ${!["mb-0", "pb-0"].includes(className) && "mb-0 pb-0"} ${className}`}>{children}</Tag>;
};

export default Title;
