import clsx from "clsx";
import type { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "outlined";
}

const Button: FC<ButtonProps> = ({ children, variant = "default" }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 border-2 cursor-pointer rounded-full text-base font-medium transition",
        {
          "bg-[var(--color-primary)] text-white border-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)]":
            variant === "default",
          "bg-white text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white":
            variant === "outlined",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
