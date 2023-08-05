import { ButtonHTMLAttributes } from "react";

import { MarginProps, SizingProps } from "@design-components/Layout";

import * as S from "./Button.style";

export type ButtonColor = "Primary" | "Gray";
export type ButtonShape = "Block" | "Text";
export type ButtonVariant = `${ButtonColor}${ButtonShape}`;

export type ButtonSize = "Large" | "Small";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  children: React.ReactNode;
} & SizingProps &
  MarginProps;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};
