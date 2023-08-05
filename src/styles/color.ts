export const ColorToken = {
  Black: "#0C0C0C",
  White: "#FFFFFF",

  Gray050: "#F3F3F3",
  Gray100: "#E7E7E7",
  Gray200: "#CECECE",
  Gray300: "#B6B6B6",
  Gray500: "#858585",
  Gray800: "#3C3C3C",
  Gray900: "#242424",

  Purple500: "#7D16FF",
  Purple400: "#AD6CFF",
} as const;

export type ColorKeys = keyof typeof ColorToken;
