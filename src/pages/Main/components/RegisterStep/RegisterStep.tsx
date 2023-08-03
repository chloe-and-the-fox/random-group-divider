import { Step } from "@pages/Main/mainPage.type";

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
  index: 2,
  title: <RegisterStepTitle />,
  isOpen: false,
  disabled: true,
  content: <RegisterStepContent />,
};
