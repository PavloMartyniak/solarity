import { InputProps as BaseInputProps } from "@chakra-ui/react";

export type InputProps = BaseInputProps & {
  label?: string;
  errorMessage?: string;
};
