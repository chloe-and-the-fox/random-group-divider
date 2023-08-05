import { styled } from "styled-components";

export const HelperText = styled.p`
  ${({ theme }) => theme.typography.Body2};
  color: ${({ theme }) => theme.color.Purple400};
`;
