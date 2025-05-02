import React from 'react';
import {Container} from 'react-bootstrap';

interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({children, className = '', fluid = false}) => {
  return (
    <Container fluid={fluid} className={className}>
      {children}
    </Container>
  );
};

export default ContainerWrapper;
