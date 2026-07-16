"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export default function AnimateIn({ children, delay = 0, direction = "up", className = "" }: AnimateInProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Custom Apple-like cubic bezier
      },
    },
  };

  if (direction === "none") {
    variants.hidden = { opacity: 0, y: 0, x: 0, filter: "blur(0px)" };
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
