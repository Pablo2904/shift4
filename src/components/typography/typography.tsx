import React, { JSX } from "react";
import cx from "classnames";
import "./typography.scss";

type TypographyVariants =
  | "h1"
  | "subtitle1"
  | "label1"
  | "label2"
  | "value1"
  | "value2"
  | "date1"
  | "date2"
  | "info"
  | "button--outline"
  | "button--filled";

type TypographyProps = {
  variant: TypographyVariants;
  children: React.ReactNode;
  className?: string;
};

const variantToTagMap: Record<string, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  subtitle1: "h6",
  label1: "p",
  label2: "p",
  value1: "span",
  value2: "span",
  date1: "span",
  date2: "span",
  info: "span",
  "button--outline": "span",
  "button--filled": "span",
};

const Typography = ({ variant, className, children }: TypographyProps) => {
  const Tag = variantToTagMap[variant] || "span";
  const classNames = cx([
    "typography",
    `typography-${variant}`,
    variant.includes("button") && "typography-button",
    className,
  ]);
  return <Tag className={classNames}>{children}</Tag>;
};

export default Typography;
