import React from "react";
import cx from "classnames";
import "./button.scss";
import Typography from "../typography/typography";

type ButtonVariants = "outline" | "filled" | "image";

type ButtonProps = {
  variant: ButtonVariants;
  className?: string;
  children?: React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
  testId?: string;
};

const Button = ({
  variant,
  children,
  className,
  type = "button",
  onClick,
  testId,
}: ButtonProps) => {
  const classNames = cx(["button", `button--${variant}`, className]);

  return (
    <button
      onClick={onClick}
      className={classNames}
      type={type}
      data-testid={testId}
    >
      {variant !== "image" ? (
        <Typography variant={`button--${variant}`}>{children}</Typography>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
