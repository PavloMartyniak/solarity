import { InputProps } from "../Input/input.type";

export type Option = {
  value: string;
  label: string;
};

export type SelectFieldProps = Omit<InputProps, "onChange"> & {
  options: Option[];
  onChange: (value: string) => void;
};
