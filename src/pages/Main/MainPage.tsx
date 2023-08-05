import { useStep } from "@providers";

import { Page } from "@design-components/Page";
import { Section } from "@design-components/Section";
import { NumberIcon } from "@components/NumberIcon";

import * as S from "./MainPage.style";
import { useEffect } from "react";

export const MainPage = () => {
  const { state, setStep } = useStep();

  useEffect(() => {
    if (!setStep) {
      return;
    }

    setStep({
      _t: "UPDATE_STEP",
      payload: {
        index: 1,
        step: {
          isOpen: true,
        },
      },
    });
  }, []);

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
          const { index, title, isOpen, disabled, content, contentHeight } =
            step;
          return (
            <li key={index}>
              <Section
                title={title}
                leadingComponent={<NumberIcon number={index} />}
                isOpen={isOpen}
                disabled={disabled}
                content={content}
                contentHeight={contentHeight}
              />
            </li>
          );
        })}
      </S.SectionList>
    </Page>
  );
};
