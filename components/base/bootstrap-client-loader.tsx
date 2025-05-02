"use client";

import React, {useEffect, useState} from "react";

export default function BootstrapClientLoader({children}: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  if (!isClient) return null;
  return (<>{children}</>);
}
