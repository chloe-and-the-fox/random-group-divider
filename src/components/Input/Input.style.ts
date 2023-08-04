import { css, styled } from "styled-components";

export const InputStyle = css`
  width: 9.25rem;
  height: 2.75rem;
  padding: 0.625rem 1rem;

  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.Gray050};

  ${({ theme }) => theme.typography.Body1};
  color: ${({ theme }) => theme.color.Black};

  &::placeholder {
    color: ${({ theme }) => theme.color.Gray300};
  }
`;

export const Input = styled.input`
  ${InputStyle}
`;
