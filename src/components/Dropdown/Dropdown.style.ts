import { styled } from "styled-components";

import { Column, Row } from "@design-components/Layout";
import { InputStyle } from "@components/Input";

export const Container = styled.div`
  position: relative;

  transition: all 0s;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: transparent;
`;

export const Select = styled(Row)<{ $isPlaceholder: boolean }>`
  ${InputStyle}

  ${({ $isPlaceholder, theme }) =>
    $isPlaceholder ? `color: ${theme.color.Gray300}` : ""}
`;

export const Panel = styled(Column)`
  margin-top: 4px;
  padding: 1rem;
  width: 100%;

  background-color: ${({ theme }) => theme.color.White};
  border: 1px solid ${({ theme }) => theme.color.Gray050};
  border-radius: 4px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  li {
    width: 100%;
    padding: 0.25rem 0;

    ${({ theme }) => theme.typography.Body2}

    &:hover {
      background-color: ${({ theme }) => theme.color.Gray050};
      color: ${({ theme }) => theme.core.Primary};
    }
  }

  position: absolute;
  top: 100%;
`;

export const Hidden = styled.div`
  display: none;
`;
