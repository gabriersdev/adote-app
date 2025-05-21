import React, {ReactNode} from "react";

export default function Container({children}: { children: ReactNode }) {
  return (
    <div className="container my-12 md:my-20">
      {children}
    </div>
  );
}
