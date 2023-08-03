import { Step } from "@pages/Main/mainPage.type";

const OptionStepTitle = () => {
  return <h3>분리하거나 붙일 조합을 입력해주세요 (선택)</h3>;
};

const OptionStepContent = () => {
  return <></>;
};

export const OptionStep: Step = {
  index: 3,
  title: <OptionStepTitle />,
  isOpen: false,
  disabled: true,
  content: <OptionStepContent />,
};
