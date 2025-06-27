import { type FC, type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Tags: FC<ButtonProps> = ({ children }) => {
  return (
    <p className="flex items-center text-base font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-lg px-3 py-2">
      {children}
    </p>
  );
};

export default Tags;
