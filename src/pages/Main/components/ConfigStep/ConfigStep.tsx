import { Step } from "@pages/Main/mainPage.type";

const ConfigStepTitle = () => {
  return (
    <h3>
      <mark>몇 명</mark>의 사람을 <mark>몇 그룹</mark>으로 나누시겠어요?
    </h3>
  );
};

const ConfigStepContent = () => {
  return <></>;
};

export const ConfigStep: Step = {
  index: 1,
  title: <ConfigStepTitle />,
  isOpen: true,
  disabled: false,
  content: <ConfigStepContent />,
};
