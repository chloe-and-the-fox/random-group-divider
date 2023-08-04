import { useStep } from "@providers";

import { Page } from "@design-components/Page";
import { Section } from "@design-components/Section";
import { NumberIcon } from "@components/NumberIcon";

import * as S from "./MainPage.style";

export const MainPage = () => {
  const { state } = useStep();

  if (!state || !state.steps) {
    return null;
  }
  return (
    <Page
      title={"랜덤 그룹 메이커"}
      subTitle={"랜덤으로 그룹을 나눠드려요! 가중치를 줄 수도 있어요."}
    >
      <S.SectionList>
        {state.steps.map((step) => {
          const { index, title, isOpen, disabled, content } = step;
          return (
            <li key={index}>
              <Section
                title={title}
                leadingComponent={<NumberIcon number={index} />}
                isOpen={isOpen}
                disabled={disabled}
              >
                {content}
              </Section>
            </li>
          );
        })}
      </S.SectionList>
    </Page>
  );
};
