import { ChangeEvent, ReactNode, useState } from "react";

import * as S from "./Dropdown.style";
import { Chevron } from "@design-components/Icon";

export type DropdownOption = {
  label: ReactNode;
  value: string | number;
};

type DropdownProps = {
  placeholder?: string;
  options: DropdownOption[];
  value: DropdownOption["value"];
  onChange: (value: DropdownOption["value"]) => void;
  disabled?: boolean;
};

export const Dropdown = ({
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const label = options.find((option) => option.value === value)?.label;

  const handleSelectClick = () => {
    if (disabled) {
      return;
    }

    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: DropdownProps["value"]) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const handleSelectTag = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    onChange(selected);
  };

  return (
    <>
      <S.Container>
        <S.Select
          aria-hidden
          $isPlaceholder={!label}
          $justifyContent="space-between"
          $alignItems="center"
          onClick={handleSelectClick}
        >
          {label || placeholder}
          <Chevron.Down />
        </S.Select>
        {isOpen ? (
          <>
            <S.Overlay onClick={handleOverlayClick} />
            <S.Panel as="ol">
              {options.map(({ label, value }, idx) => (
                <li
                  key={`${idx}-${value}`}
                  onClick={() => handleOptionClick(value)}
                >
                  {label}
                </li>
              ))}
            </S.Panel>
          </>
        ) : null}
      </S.Container>
      <S.Hidden>
        <select value={value} onChange={handleSelectTag} disabled={disabled}>
          {placeholder ? (
            <option value={""} disabled={true}>
              {placeholder}
            </option>
          ) : null}
          {options.map(({ label, value }, idx) => (
            <option key={`${idx}-${value}`} value={value}>
              {label}
            </option>
          ))}
        </select>
      </S.Hidden>
    </>
  );
};
