import { styled } from "styled-components";

export const Page = styled.main`
  width: 37.5rem; // 600px

  margin: 40px auto 60px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.H1}
  color: ${({ theme }) => theme.color.Black};
`;

export const SubTitle = styled.h2`
  ${({ theme }) => theme.typography.Body1};
  color: ${({ theme }) => theme.color.Black};

  margin-top: 0.5rem;
`;
