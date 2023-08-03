import * as S from "./NumberIcon.style";

// TODO: colorKeys로 변경
type NumberIconProps = {
  number: number | string;
  contentColor?: string;
  backgroundColor?: string;
};

export const NumberIcon = ({
  number,
  contentColor,
  backgroundColor,
}: NumberIconProps) => {
  return (
    <S.Icon $contentColor={contentColor} $backgroundColor={backgroundColor}>
      {number}
    </S.Icon>
  );
};
