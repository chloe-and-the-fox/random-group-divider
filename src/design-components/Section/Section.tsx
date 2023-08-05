import { Section as SectionProps } from "./section.type";

import * as S from "./Section.style";

export const Section = ({
  title,
  subTitle,
  content,
  contentHeight = 0,
  leadingComponent,
  isOpen = false,
  disabled = false,
}: SectionProps) => {
  return (
    <S.Container>
      {leadingComponent ? (
        <S.Leading $disabled={disabled}>{leadingComponent}</S.Leading>
      ) : null}
      <S.Wrapper>
        <S.Title $disabled={disabled}>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Content
          aria-hidden={!isOpen}
          $isOpen={isOpen}
          $height={contentHeight}
        >
          {content}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};
