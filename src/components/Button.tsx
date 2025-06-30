import clsx from "clsx";
import type { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "outlined" | "gradient";
}

const Button: FC<ButtonProps> = ({ children, variant = "default" }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 border-2 cursor-pointer rounded-full text-base font-medium transition",
        {
          "bg-[var(--color-primary)] text-white border-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)]":
            variant === "default",
          "bg-transparent text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white":
            variant === "outlined",
          "bg-gradient-to-r from-[#9b5de5] to-[#706dff] text-white border-none":
            variant === "gradient",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
