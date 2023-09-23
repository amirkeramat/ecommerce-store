import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center rounded-full justify-center  border shadow-md p-2 hover:scale-110 transition ",
        className
      )}>
        {icon}
      </button>
  );
};

export default IconButton;
