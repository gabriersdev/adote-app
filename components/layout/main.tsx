import React, {ReactNode} from "react";

export default function Main({children}: { children: ReactNode }) {
  return (
    <main className={"bg-body-tertiary min-h-[100vh]"}>
      <div className="container p-0 my-5">
        {children}
      </div>
    </main>
  );
}
