import { css } from "styled-components";

import { SizingProps } from "./Sizing.type";

export function getSizeStyle(props: SizingProps) {
  const { $width, $height } = props;
  return css`
    ${$width && `width: ${$width};`}
    ${$height && `height: ${$height};`}
  `;
}
