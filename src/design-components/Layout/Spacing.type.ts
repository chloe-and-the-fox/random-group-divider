import { CSSProperties } from "react";

export type MarginProps = {
  $m?: CSSProperties["margin"];
  $mv?: CSSProperties["marginTop"];
  $mh?: CSSProperties["marginRight"];
  $mt?: CSSProperties["marginTop"];
  $mr?: CSSProperties["marginRight"];
  $mb?: CSSProperties["marginBottom"];
  $ml?: CSSProperties["marginLeft"];
};

export type PaddingProps = {
  $p?: CSSProperties["padding"];
  $pv?: CSSProperties["paddingTop"];
  $ph?: CSSProperties["paddingRight"];
  $pt?: CSSProperties["paddingTop"];
  $pr?: CSSProperties["paddingRight"];
  $pb?: CSSProperties["paddingBottom"];
  $pl?: CSSProperties["paddingLeft"];
};
