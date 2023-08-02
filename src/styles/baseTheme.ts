import { DefaultTheme } from "styled-components";

import { ColorToken } from "./color";
import { FontSizeToken, FontWeightToken, LineHeightToken } from "./font";

// lightTheme
export const theme: DefaultTheme = {
  core: {
    Primary: ColorToken.Purple500, // "#7D16FF"
    Secondary: ColorToken.Purple400,
  },
  color: ColorToken,
  typography: {
    H1: {
      fontSize: FontSizeToken.XXL,
      lineHeight: LineHeightToken.XXL,
      fontWeight: FontWeightToken.Bold,
    },
    H2: {
      fontSize: FontSizeToken.XL,
      lineHeight: LineHeightToken.XL,
      fontWeight: FontWeightToken.Bold,
    },
    H3: {
      fontSize: FontSizeToken.L,
      lineHeight: LineHeightToken.L,
      fontWeight: FontWeightToken.Bold,
    },
    Body1: {
      fontSize: FontSizeToken.M,
      lineHeight: LineHeightToken.M,
      fontWeight: FontWeightToken.Normal,
    },
    Body2: {
      fontSize: FontSizeToken.S,
      lineHeight: LineHeightToken.S,
      fontWeight: FontWeightToken.Normal,
    },
    // Button: {
    //   fontSize: FontSizeToken.M,
    //   lineHeight: LineHeightToken.M,
    //   fontWeight: FontWeightToken.Bold,
    // },
  },
};
