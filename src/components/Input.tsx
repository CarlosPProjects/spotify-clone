import { FC, InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `
      flex
      w-full
      rounded-md
      bg-transparent
      border
      border-neutral-400/40
      outline-none
      focus:border-neutral-400
      px-3
      py-3
      text-sm
      file:border-0
      file:bg-transparent
      file:text-sm
      file:font-medium
      placeholder:text-neutral-300
      disabled:cursor-not-allowed
      disabled:opacity-50
    `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;