import { type FC, type ReactNode } from "react";

interface TagsProps {
  children: ReactNode;
}

const Tags: FC<TagsProps> = ({ children }) => {
  return (
    <p className="flex items-center text-base font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-lg px-3 py-2 hover:-translate-y-2 transition">
      {children}
    </p>
  );
};

export default Tags;
