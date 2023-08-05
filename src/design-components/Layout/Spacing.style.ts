import { css } from "styled-components";

import { MarginProps, PaddingProps } from "./Spacing.type";

export function getMarginStyle(props: MarginProps) {
  const { $m, $mv, $mh, $mt, $mr, $mb, $ml } = props;
  return css`
    ${$m && `margin: ${$m};`}
    ${($mt || $mv) && `margin-top: ${$mt || $mv};`}
    ${($mr || $mh) && `margin-right: ${$mr || $mh};`}
    ${($mb || $mv) && `margin-bottom: ${$mb || $mv};`}
    ${($ml || $mh) && `margin-left: ${$ml || $mh};`}
  `;
}

export function getPaddingStyle(props: PaddingProps) {
  const { $p, $pv, $ph, $pt, $pr, $pb, $pl } = props;
  return css`
    ${$p && `padding: ${$p};`}
    ${($pt || $pv) && `padding-top: ${$pt || $pv};`}
    ${($pr || $ph) && `padding-right: ${$pr || $ph};`}
    ${($pb || $pv) && `padding-bottom: ${$pb || $pv};`}
    ${($pl || $ph) && `padding-left: ${$pl || $ph};`}
  `;
}
