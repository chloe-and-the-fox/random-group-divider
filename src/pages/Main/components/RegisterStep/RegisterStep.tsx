import { Step } from "@providers";

const RegisterStepTitle = () => {
  return (
    <h3>
      나눌 사람들의 <mark>이름</mark>을 입력해주세요
    </h3>
  );
};

const RegisterStepContent = () => {
  return <></>;
};

export const RegisterStep: Step = {
  _t: "register",
  title: <RegisterStepTitle />,
  isOpen: false,
  disabled: true,
  content: <RegisterStepContent />,
};
