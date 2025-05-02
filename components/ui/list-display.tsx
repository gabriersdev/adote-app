import React from 'react';

interface ListDisplayProps {
  items: string[];
  ordered?: boolean;
  className?: string;
}

const ListDisplay: React.FC<ListDisplayProps> = ({
                                                   items,
                                                   ordered = false,
                                                   className = '',
                                                 }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <ListTag className={`list-unstyled ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="mb-1">
          {item}
        </li>
      ))}
    </ListTag>
  );
};

export default ListDisplay;
