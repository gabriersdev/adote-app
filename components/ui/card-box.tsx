import React from 'react';
import {Card} from 'react-bootstrap';

interface CardBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const CardBox: React.FC<CardBoxProps> = ({title, children, className = ''}) => (
  <Card className={`mb-3 ${className}`}>
    {title && <Card.Header>{title}</Card.Header>}
    <Card.Body>{children}</Card.Body>
  </Card>
);

export default CardBox;
