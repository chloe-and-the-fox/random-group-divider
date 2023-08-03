import { ReactNode } from "react";

import * as S from "./Page.style";

type PageProps = {
  title?: string;
  subTitle?: string;
  children: ReactNode;
};

export const Page = ({ title, subTitle, children }: PageProps) => {
  return (
    <S.Page>
      {title ? <S.Title>{title}</S.Title> : null}
      {subTitle ? <S.SubTitle>{subTitle}</S.SubTitle> : null}
      {children}
    </S.Page>
  );
};
