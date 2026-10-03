import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, className, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2 w-full", className)}>
        <label className="text-[10px] uppercase tracking-widest text-foreground font-medium">
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            className="w-full bg-transparent border-b border-background-alt py-2 text-sm text-foreground-muted focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer pr-8"
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-background-dark text-foreground">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-foreground-muted" />
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";
