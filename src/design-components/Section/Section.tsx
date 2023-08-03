import { ReactNode, useRef, useState } from "react";

import * as S from "./Section.style";

type SectionProps = {
  title: ReactNode;
  subTitle?: ReactNode;
  children?: ReactNode;
  leadingComponent?: ReactNode;
  isOpen?: boolean;
  disabled?: boolean;
};

export const Section = ({
  title,
  subTitle,
  children,
  leadingComponent,
  isOpen = false,
  disabled = false,
}: SectionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = contentRef.current?.scrollHeight || 0;

  return (
    <S.Container>
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
