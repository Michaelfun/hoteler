import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="fixed inset-0 z-[999] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            {/* Crown Logo SVG Path animation */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4"
            >
              <motion.path
                d="M10 40L15 20L25 30L30 15L35 30L45 20L50 40H10Z"
                stroke="#b8895b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, fill: "rgba(184,137,91,0)" }}
                animate={{ pathLength: 1, fill: "rgba(184,137,91,0.2)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M10 45H50"
                stroke="#b8895b"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
              />
            </svg>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-foreground font-serif tracking-[0.2em] uppercase text-sm"
            >
              Hoteler
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
