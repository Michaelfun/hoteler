import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PageHeroProps {
  title: string;
  image: string;
  breadcrumb?: string;
}

export function PageHero({ title, image, breadcrumb }: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden z-0">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover brightness-[0.45]"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-transparent to-background-dark/80 pointer-events-none z-10" />

      {/* Frame that starts BELOW the sticky navbar (~80px tall) */}
      <div className="absolute top-24 bottom-4 left-4 right-4 md:top-28 md:bottom-8 md:left-8 md:right-8 border border-accent/30 pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-2xl"
        >
          {title}
        </motion.h1>
        {breadcrumb && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">{breadcrumb}</span>
            <div className="w-8 h-px bg-accent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
