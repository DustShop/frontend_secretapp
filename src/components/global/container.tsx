"use client";

import { cn } from "../../lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
}

const Container = ({ children, className }: Props) => {
  return <div className={cn("w-full h-full", className)}>{children}</div>;
};

export default Container;
