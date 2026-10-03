import * as React from "react"
import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  magnetic?: boolean
  children?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", magnetic = true, children, ...props }, ref) => {
    
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    const variants = {
      primary: "bg-background-dark text-foreground border border-background-dark hover:border-accent group relative overflow-hidden",
      secondary: "bg-accent text-background-dark font-medium",
      outline: "border border-accent text-accent hover:bg-accent hover:text-background-dark",
      ghost: "hover:bg-background-alt text-foreground-muted hover:text-foreground",
    }

    const sizes = {
      default: "h-12 px-8 py-3 text-xs tracking-[0.2em] uppercase",
      sm: "h-10 px-6 text-[10px] tracking-widest uppercase",
      lg: "h-14 px-10 text-sm tracking-[0.2em] uppercase",
    }

    return (
      <motion.button
        ref={ref}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className={cn(
          "inline-flex items-center justify-center rounded-none font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {variant === "primary" && (
          <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
        )}
        <span className={cn("relative z-10", variant === "primary" && "group-hover:text-background-dark transition-colors duration-500 delay-100")}>
          {children}
        </span>
      </motion.button>
    )
  }
)
Button.displayName = "Button"
