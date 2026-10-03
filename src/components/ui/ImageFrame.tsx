import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ImageFrame({ src, alt, className, imageClassName, priority = false }: ImageFrameProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Offset gold frame behind the image */}
      <div className="absolute inset-0 border border-accent/50 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 ease-out -z-10 pointer-events-none" />
      
      {/* Image container */}
      <div className="relative w-full h-full overflow-hidden bg-background-alt">
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={cn("w-full h-full object-cover origin-center scale-100 group-hover:scale-105 group-hover:brightness-90 transition-all duration-1000 ease-out", imageClassName)}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
