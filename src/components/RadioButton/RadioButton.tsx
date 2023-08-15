import React, { ComponentPropsWithoutRef } from "react";
import "./RadioButton.css";

interface RadioButtonProps extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  type,
  className,
  ...rest
}) => {
  return <input className={`${className}`} type="radio" {...rest} />;
};

export default RadioButton;
