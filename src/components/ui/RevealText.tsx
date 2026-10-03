import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { defaultEase } from "@/lib/animations";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into lines for animation
  const lines = text.split("\n");

  return (
    <div ref={ref} className={cn("overflow-hidden flex flex-col", className)}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 1,
              ease: defaultEase,
              delay: delay + i * 0.1,
            }}
          >
            {line === "" ? "\u00A0" : line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
