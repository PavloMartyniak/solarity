"use client";

import {
  Input as BaseInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { InputProps } from "./input.type";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, isInvalid, isDisabled, errorMessage, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={isInvalid} isDisabled={isDisabled}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <BaseInput ref={ref} name={name} {...rest} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default forwardRef(Input);
