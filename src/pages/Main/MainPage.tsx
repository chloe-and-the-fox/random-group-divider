import { NumberIcon } from "@components/NumberIcon";
import { Page } from "@design-components/Page";
import { Section } from "@design-components/Section";

import * as S from "./MainPage.style";

export const MainPage = () => {
  return (
    <Page
      title={"🧩 랜덤 그룹 메이커"}
      subTitle={"랜덤으로 그룹을 나눠드려요! 가중치를 줄 수도 있어요."}
    >
      <S.SectionList>
        <Section
          title={
            <h3>
              <mark>몇 명</mark>의 사람을 <mark>몇 그룹</mark>으로 나누시겠어요?
            </h3>
          }
          leadingComponent={<NumberIcon number={1} />}
          defaultOpen
        ></Section>
        <Section
          title={
            <h3>
              나눌 사람들의 <mark>이름</mark>을 입력해주세요
            </h3>
          }
          leadingComponent={<NumberIcon number={2} />}
          defaultOpen={false}
          disabled
        ></Section>
        <Section
          title={<h3>분리하거나 붙일 조합을 입력해주세요 (선택)</h3>}
          leadingComponent={<NumberIcon number={3} />}
          defaultOpen={false}
          disabled
        ></Section>
      </S.SectionList>
    </Page>
  );
};
