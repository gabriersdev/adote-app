import React, {JSX} from "react";

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`${!className.includes("fw") && "fw-semibold"} ${!className.includes("font-inter-tight") && !className.includes("font-inter") && "font-hero-new"} ${!className.includes("mb-0") && !className.includes("pb-0") ? "mb-0 pb-0" : "mb-5"} ${className}`}>{children}</Tag>;
};

export default Title;
