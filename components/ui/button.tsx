import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto 
          rounded-full
          bg-black dark:bg-white
          text-white dark:text-black
           border-transparent 
           px-5 
           py-3 
           disabled:cursor-not-allowed
           disabled:opacity-50
           hover:opacity-75
           transition
           `,
          className
        )}
        ref={ref}
        {...props}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "button";

export default Button;
