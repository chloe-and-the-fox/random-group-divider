import { css, styled } from "styled-components";

import { parsePascalCase } from "@utils";

import { getMarginStyle, getSizeStyle } from "@design-components/Layout";

import { ButtonColor, ButtonProps, ButtonShape } from "./Button";

export const Button = styled.button<ButtonProps>`
  ${({ $variant }) => getButtonStyle($variant)};
  ${({ $size }) => getButtonSize($size)};

  border-radius: 4px;

  ${(props) => getMarginStyle(props)};
  ${(props) => getSizeStyle(props)};
`;

function getButtonStyle(variant: ButtonProps["$variant"] = "PrimaryBlock") {
  const [color, shape] = parsePascalCase(variant) as [ButtonColor, ButtonShape];

  if (shape === "Text") {
    return css`
      background-color: transparent;
      color: ${({ theme }) =>
        color === "Primary" ? theme.core.Primary : theme.color.Gray300};

      &:disabled {
        color: ${({ theme }) => theme.color.Gray200};
      }
    `;
  }

  return css`
    ${({ theme }) =>
      color === "Primary"
        ? `
          background-color: ${theme.core.Primary};
          color: ${theme.color.White};
          &:disabled {
            background-color: ${theme.color.Gray200};
          };
        `
        : `
          background-color: ${theme.color.Gray100};
          color: ${theme.color.Black};
          &:disabled {
            color: ${theme.color.Gray300};
          };
        `}
  `;
}

function getButtonSize(size: ButtonProps["$size"]) {
  switch (size) {
    case "Small":
      return css`
        height: 2.5rem;
        padding: 0rem 0.625rem;
        ${({ theme }) => theme.typography.Button}
      `;
    case "Large":
    default:
      return css`
        height: 3.25rem;
        padding: 0rem 1rem;
        ${({ theme }) => theme.typography.H3};
      `;
  }
}
