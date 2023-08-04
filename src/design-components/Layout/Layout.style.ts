import { styled } from "styled-components";

import { FlexProps } from "./Layout.type";

const Flex = styled.div`
  display: flex;
`;

export const Row = styled(Flex)<FlexProps>`
  flex-direction: row;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  gap: ${({ $gap }) => $gap || 0};
`;

export const Column = styled(Flex)<FlexProps>`
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => $justifyContent || "flex-start"};
  align-items: ${({ $alignItems }) => $alignItems || "stretch"};
  gap: ${({ $gap }) => $gap || 0};
`;
