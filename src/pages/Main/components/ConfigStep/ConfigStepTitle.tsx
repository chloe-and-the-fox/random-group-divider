import { Button } from "@design-components/Button";
import { Row } from "@design-components/Layout";
import { useConfig, useStep } from "@providers";

export const ConfigStepTitle = () => {
  const {
    state: { currentStep },
    setStep,
  } = useStep();
  const {
    config: { memberCount, groupCount },
  } = useConfig();

  const handleEditClick = () => {
    setStep({
      _t: "OPEN_STEP",
      payload: {
        _t: "config",
      },
    });
  };

  if (memberCount && groupCount && currentStep !== "config") {
    return (
      <Row $width="100%" $justifyContent="space-between" $alignItems="center">
        <h3>
          <mark>{memberCount}명</mark>을 <mark>{groupCount}개 그룹</mark>으로
          나눌게요
        </h3>
        <Button
          $variant="PrimaryText"
          $size="Small"
          $height="1.25rem"
          onClick={handleEditClick}
        >
          변경하기
        </Button>
      </Row>
    );
  }
  return (
    <h3>
      <mark>몇 명</mark>의 사람을 <mark>몇 그룹</mark>으로 나누시겠어요?
    </h3>
  );
};
