import { ChangeEvent, InputHTMLAttributes } from "react";

import * as S from "./Input.style";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (value: string) => void;
};

export const Input = ({ onChange, ...props }: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };
  return <S.Input onChange={handleChange} {...props} />;
};
