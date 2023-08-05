import { useEffect, useRef, useState } from "react";

import { Step, useStep } from "@providers/useStep";

import { Input } from "@components/Input";
import { Dropdown, DropdownOption } from "@components/Dropdown";

import { Column, Row } from "@design-components/Layout";
import * as S from "./ConfigStep.style";
import { getAverageMemberCount } from "@pages/Main/utils";

const ConfigStepTitle = () => {
  return (
    <h3>
      <mark>몇 명</mark>의 사람을 <mark>몇 그룹</mark>으로 나누시겠어요?
    </h3>
  );
};

const ConfigStepContent = () => {
  const { setStep } = useStep();
  const ref = useRef<HTMLDivElement>(null);

  const [memberCount, setMemberCount] = useState<number>(0);
  const [groupCount, setGroupCount] = useState<number>(0);
  const [customGroupCount, setCustomGroupCount] = useState<number>(0);

  const avgMemberCount = getAverageMemberCount({
    teamCount: groupCount === -1 ? customGroupCount : groupCount,
    totalMemberCount: memberCount,
  });
  const avgMemberCountText = avgMemberCount.join(", ");

  const optionsList: DropdownOption[] = DEFAULT_OPTIONS.filter((_, idx) => {
    return memberCount - 1 > idx;
  });

  const handleMemberCountChange = (input: string) => {
    const value = Number(input);
    if (Number.isNaN(value)) {
      return;
    }
    setMemberCount(value);

    if (value < groupCount) {
      setGroupCount(0);
    }
  };

  const handleGroupCountChange = (input: string | number) => {
    const value = Number(input);
    if (Number.isNaN(value)) {
      return;
    }
    setGroupCount(value);
  };

  const handleCustomGroupCountChange = (input: string) => {
    const value = Number(input);
    if (Number.isNaN(value)) {
      return;
    }
    setCustomGroupCount(value);
  };

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }

    const contentHeight = ref.current.scrollHeight;

    if (!setStep) {
      return;
    }

    setStep({
      _t: "UPDATE_STEP",
      payload: {
        index: 1,
        step: {
          contentHeight,
        },
      },
    });
  }, [memberCount, groupCount, customGroupCount]);

  return (
    <Column ref={ref} $alignItems="flex-start" $gap="8px">
      <Row $justifyContent="flex-start" $alignItems="center" $gap="10px">
        <Input
          type={"number"}
          value={memberCount || ""}
          min={2}
          onChange={handleMemberCountChange}
          placeholder="나눌 인원 수"
        />
        명을
      </Row>
      <Row $justifyContent="flex-start" $alignItems="center" $gap="10px">
        <Dropdown
          placeholder="선택해주세요"
          value={groupCount || ""}
          options={optionsList}
          onChange={handleGroupCountChange}
          disabled={memberCount === 0}
        />
        {groupCount === -1 ? (
          <Input
            type={"number"}
            value={customGroupCount || ""}
            onChange={handleCustomGroupCountChange}
            placeholder="나눌 팀 수"
            min={6}
            max={memberCount}
          />
        ) : null}
        개 그룹으로 나눌게요.
      </Row>
      {memberCount > 0 && (groupCount > 0 || customGroupCount > 0) ? (
        <S.HelperText>
          🙋‍♀️ 한 팀당 {avgMemberCountText}명씩 배치될 거예요
        </S.HelperText>
      ) : null}
    </Column>
  );
};

export const ConfigStep: Step = {
  index: 1,
  title: <ConfigStepTitle />,
  isOpen: false,
  disabled: false,
  content: <ConfigStepContent />,
  contentHeight: 0,
};

const DEFAULT_OPTIONS: DropdownOption[] = [
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
  {
    label: "직접 입력",
    value: -1,
  },
];
