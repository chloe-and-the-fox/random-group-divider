import { ReactNode, useRef, useState } from "react";

import * as S from "./Section.style";

type SectionProps = {
  title: ReactNode;
  subTitle?: ReactNode;
  children?: ReactNode;
  leadingComponent?: ReactNode;
  defaultOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  disabled?: boolean;
};

export const Section = ({
  title,
  subTitle,
  children,
  leadingComponent,
  defaultOpen = false,
  onOpen,
  onClose,
  disabled = false,
}: SectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = contentRef.current?.scrollHeight || 0;

  const handleClick = () => {
    if (disabled) {
      return;
    }

    if (isOpen) {
      setIsOpen(false);
      onClose?.();
      return;
    }
    setIsOpen(true);
    onOpen?.();
  };

  return (
    <S.Container onClick={handleClick}>
      {leadingComponent ? (
        <S.Leading $disabled={disabled}>{leadingComponent}</S.Leading>
      ) : null}
      <S.Wrapper>
        <S.Title $disabled={disabled}>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Content
          ref={contentRef}
          aria-hidden={!isOpen}
          $isOpen={isOpen}
          $height={contentHeight}
        >
          {children}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};
