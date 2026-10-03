import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2 w-full", className)}>
        <label className="text-[10px] uppercase tracking-widest text-foreground font-medium">
          {label}
        </label>
        <div className="relative">
          <input
            type="date"
            ref={ref}
            className="w-full bg-transparent border-b border-background-alt py-2 text-sm text-foreground-muted focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
            {...props}
          />
        </div>
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
