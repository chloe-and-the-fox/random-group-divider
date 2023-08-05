import { styled } from "styled-components";

export const Icon = styled.span<{
  $contentColor?: string;
  $backgroundColor?: string;
}>`
  width: 1.5rem;
  height: 1.5rem;

  ${({ theme }) => theme.typography.Body2}
  font-weight: 700;
  color: ${({ $contentColor, theme }) => $contentColor || theme.color.White};
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.core.Primary};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
