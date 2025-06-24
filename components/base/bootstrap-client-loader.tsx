"use client";

import React, {useCallback, useEffect, useState} from "react";

export default function BootstrapClientLoader({children}: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  const updateTargetLinks = useCallback(() => {
    Array.from(document.querySelectorAll("a")).forEach(a => {
      if (!a.href) return;

      if (a?.href.startsWith("mailto:") || a?.href.startsWith("tel:")) a.target = "_blank";
      else if (a?.href.startsWith("#") || (a?.href.includes("#") && new URL(a.href).hostname === window?.location.hostname)) console.log("");
      else if (new URL(a.href).pathname === "/" && new URL(a.href).hostname === window?.location.hostname) console.log("");
      else if (new URL(a.href).hostname === window?.location.hostname) console.log("");
      else a.target = "_blank";

      if (a.target === "_blank") a?.setAttribute("rel", "noopener noreferrer");
    })
  }, [])

  useEffect(() => {
    updateTargetLinks();

    const mutation = new MutationObserver(() => {
      setTimeout(updateTargetLinks, 0)
    })

    mutation.observe(document, {childList: true, subtree: true})
  }, [])

  if (!isClient) return null;
  return (<>{children}</>);
}
