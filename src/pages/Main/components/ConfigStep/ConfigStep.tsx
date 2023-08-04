import { useState } from "react";

import { Step } from "@providers/useStep";

import { Input } from "@components/Input";
import { Dropdown, DropdownOption } from "@components/Dropdown";

import { Column, Row } from "@design-components/Layout";

const ConfigStepTitle = () => {
  return (
    <h3>
      <mark>몇 명</mark>의 사람을 <mark>몇 그룹</mark>으로 나누시겠어요?
    </h3>
  );
};

const ConfigStepContent = () => {
  const [memberCount, setMemberCount] = useState<number>(0);
  const optionsList: DropdownOption[] = DEFAULT_OPTIONS.filter((_, idx) => {
    return memberCount - 1 > idx;
  });

  const [groupCount, setGroupCount] = useState<number>(0);
  const [customGroupCount, setCustomGroupCount] = useState<number>(0);

  const handleMemberCountChange = (input: string) => {
    const value = Number(input);
    if (Number.isNaN(value)) {
      return;
    }
    setMemberCount(value);
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

  return (
    <Column $alignItems="flex-start" $gap="8px">
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
    </Column>
  );
};

export const ConfigStep: Step = {
  index: 1,
  title: <ConfigStepTitle />,
  isOpen: true,
  disabled: false,
  content: <ConfigStepContent />,
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
