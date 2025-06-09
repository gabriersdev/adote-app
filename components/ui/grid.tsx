import React, {ReactNode, JSX} from "react";

type GridProps = {
  children: ReactNode;
  cols?: number;
  rows?: number;
  gap?: number;
  className?: string;
};

const Grid = ({children, cols = 1, gap = 4, className = "", rows = 1}: GridProps): JSX.Element => {
  const gridCols = `grid-cols-${cols}`;
  const gridGap = `gap-${gap}`;
  const gridRows = `grid-rows-${rows}`;

  return (
    <div className={`grid ${gridCols} sm:grid-cols-2 md:grid-cols-3 ${gridGap} ${gridRows} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
