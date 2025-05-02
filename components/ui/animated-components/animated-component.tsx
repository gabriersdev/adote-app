import React from "react";
import { motion } from "framer-motion";

export default function AnimatedComponent ({ children }: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

