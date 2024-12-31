import * as React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        type === "number" &&
        (e.key === "e" ||
          e.key === "E" ||
          e.key === "+" ||
          e.key === "-" ||
          e.key === "." ||
          e.key === ",")
      ) {
        e.preventDefault();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      if (type === "number") {
        const paste = e.clipboardData.getData("text");
        if (/[eE\+\-.,]/.test(paste)) {
          e.preventDefault();
        }
      }
    };

    const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
      if (type === "number") {
        const text = e.dataTransfer.getData("text");
        if (/[eE\+\-.,]/.test(text)) {
          e.preventDefault();
        }
      }
    };

    return (
      <div className="relative flex items-center">
        {leftIcon && <span className="absolute left-3">{leftIcon}</span>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            type === "number" && "no-arrows",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            className
          )}
          ref={ref}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onDrop={handleDrop}
          {...props}
        />
        {rightIcon && <span className="absolute right-3">{rightIcon}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
