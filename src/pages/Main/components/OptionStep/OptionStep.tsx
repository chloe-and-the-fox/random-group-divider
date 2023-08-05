import { Step } from "@providers";

const OptionStepTitle = () => {
  return <h3>분리하거나 붙일 조합을 입력해주세요 (선택)</h3>;
};

const OptionStepContent = () => {
  return <></>;
};

export const OptionStep: Step = {
  _t: "option",
  title: <OptionStepTitle />,
  isOpen: false,
  disabled: true,
  content: <OptionStepContent />,
};
