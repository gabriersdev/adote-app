import React from "react";
import AnimatedComponent from "@/components/ui/animated-components/animated-component";
import {AnimatePresence} from "framer-motion";

export default function AnimatedComponents({children}: { children: React.ReactNode }) {
  return Array.isArray(children) ? children.map((child, key) => {
    return (
      <AnimatePresence mode={"wait"} key={key}>
        <AnimatedComponent>
          {child}
        </AnimatedComponent>
      </AnimatePresence>
    )
  }) : (
    <AnimatePresence mode={"wait"}>
      <AnimatedComponent>
        {children}
      </AnimatedComponent>
    </AnimatePresence>
  )
};
