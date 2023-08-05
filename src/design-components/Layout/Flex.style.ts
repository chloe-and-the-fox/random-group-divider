import { styled } from "styled-components";

import { FlexProps } from "./Flex.type";
import {
  MarginProps,
  PaddingProps,
  SizingProps,
  getMarginStyle,
  getPaddingStyle,
  getSizeStyle,
} from ".";

const Flex = styled.div`
  display: flex;
`;

export const Row = styled(Flex)<
  FlexProps & SizingProps & MarginProps & PaddingProps
>`
  flex-direction: row;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  gap: ${({ $gap }) => $gap || 0};

  ${(props) => getSizeStyle(props)};
  ${(props) => getMarginStyle(props)};
  ${(props) => getPaddingStyle(props)};
`;

export const Column = styled(Flex)<
  FlexProps & SizingProps & MarginProps & PaddingProps
>`
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "stretch"};
  gap: ${({ $gap }) => $gap || 0};

  ${(props) => getSizeStyle(props)};
  ${(props) => getMarginStyle(props)};
  ${(props) => getPaddingStyle(props)};
`;
