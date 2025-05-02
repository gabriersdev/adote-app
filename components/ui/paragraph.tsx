import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = '', muted = false }) => {
  return (
    <p className={`p-0 m-0 ${muted ? 'text-muted' : ''} ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
