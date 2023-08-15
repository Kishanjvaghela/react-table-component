import React from "react";
import "./CheckBox.css";

interface CheckBoxProps extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  type,
  className,
  ...rest
}) => {
  return <input className={`${className}`} type="checkbox" {...rest} />;
};

export default CheckBox;
