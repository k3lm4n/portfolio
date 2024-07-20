import { PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";

type ContainerProps = {
  className?: string;
};

export const Container = ({
  children,
  className,
}: PropsWithChildren & ContainerProps) => {
  return (
    <div className={twJoin("w-full h-full ", className)}>
      <div className="container mx-auto px-8">{children}</div>
    </div>
  );
};
