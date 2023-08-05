import { ReactNode } from "react";

export type Section = {
  title: ReactNode;
  subTitle?: ReactNode;
  content?: ReactNode;
  contentHeight?: number;
  leadingComponent?: ReactNode;
  isOpen?: boolean;
  disabled?: boolean;
};
