import { styled } from "styled-components";

const ANIMATION_DURATION = 0.3;

export const Container = styled.section`
  max-width: 100%;
  padding: 20px 24px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.White};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  * {
    transition: all ${ANIMATION_DURATION * 2}s ease-in-out;
  }

  ${({ theme }) => theme.typography.Body1};
  color: ${({ theme }) => theme.color.Black};
`;

export const Leading = styled.div<{
  $disabled: boolean;
}>`
  > *,
  span {
    background-color: ${({ $disabled, theme }) =>
      $disabled ? theme.color.Gray200 : theme.color.Purple400};
  }
`;

export const Wrapper = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.header<{ $disabled: boolean }>`
  ${({ theme }) => theme.typography.H2};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.color.Gray300 : theme.color.Black};

  mark {
    color: ${({ $disabled, theme }) =>
      $disabled ? theme.color.Gray300 : theme.core.Primary};
  }
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.typography.Body2};
  color: ${({ theme }) => theme.color.Gray500};
`;

export const Content = styled.div<{ $isOpen: boolean; $height: number }>`
  margin-top: ${({ $isOpen }) => ($isOpen ? 16 : 0)}px;
  max-height: ${({ $isOpen, $height }) => ($isOpen ? $height : 0)}px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

  transition:
    max-height ${ANIMATION_DURATION}s ease-in-out
      ${({ $isOpen }) => ($isOpen ? 0 : ANIMATION_DURATION)}s,
    opacity ${ANIMATION_DURATION}s ease
      ${({ $isOpen }) => ($isOpen ? ANIMATION_DURATION : 0)}s,
    margin-top 0s ease ${({ $isOpen }) => ($isOpen ? 0 : ANIMATION_DURATION)}s;
`;
