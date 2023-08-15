import React from "react";
import "./IconButton.css";

interface SortingButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

const IconButton: React.FC<SortingButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={`sort-button ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
