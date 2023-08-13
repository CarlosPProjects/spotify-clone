import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Box: FC<Props> = ({ children, className }) => {
  return (
    <div className={twMerge("h-fit px-4 py-2 w-full", className)}>
      {children}{" "}
    </div>
  );
};

export default Box;
