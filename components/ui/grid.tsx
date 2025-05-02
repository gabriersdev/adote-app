import React, {ReactNode, JSX} from "react";

type GridProps = {
  children: ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
};

const Grid = ({children, cols = 1, gap = 4, className = ""}: GridProps): JSX.Element => {
  const gridCols = `grid-cols-${cols}`;
  const gridGap = `gap-${gap}`;

  return (
    <div className={`grid ${gridCols} ${gridGap} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
