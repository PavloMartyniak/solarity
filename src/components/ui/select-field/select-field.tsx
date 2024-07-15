"use client";

import {
  Icon,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { Option, SelectFieldProps } from "./select-field.type";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Input } from "../Input";

const SelectField: React.FC<SelectFieldProps> = ({
  placeholder,
  options,
  value,
  onChange,
  label,
  ...rest
}) => {
  const [selectedOption, setSelectedOption] = useState<Option>();

  useEffect(() => {
    const foundOption = options.find((option: Option) => {
      return option.value === value;
    });
    if (foundOption) {
      setSelectedOption(foundOption);
    }
  }, [value, setSelectedOption, options]);

  return (
    <Menu matchWidth>
      {({ isOpen, onClose }) => {
        return (
          <>
            <MenuButton w={"100%"} type="button">
              <InputGroup>
                <Input
                  label={label}
                  placeholder={placeholder}
                  value={selectedOption?.label || ""}
                  isReadOnly
                  {...rest}
                />
                <InputRightElement>
                  <ChevronDownIcon />
                </InputRightElement>
              </InputGroup>
            </MenuButton>
            <MenuList
              maxHeight="300px"
              overflowY="scroll"
              zIndex={5}
              p={0}
              shadow={"md"}
            >
              {options?.map((option: Option) => {
                const isSelected = selectedOption?.value === option.value;

                return (
                  <MenuItem
                    key={option.value}
                    onClick={() => {
                      onChange(option.value);
                      onClose();
                    }}
                    _hover={{
                      backgroundColor: isSelected ? "gray.2" : "gray.1",
                    }}
                    backgroundColor={isSelected ? "gray.2" : "transparent"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    py={"0.625rem"}
                    px={"0.75rem"}
                  >
                    <Text fontSize={"sm"} color="gray.9">
                      {option.label}
                    </Text>
                  </MenuItem>
                );
              })}
            </MenuList>
          </>
        );
      }}
    </Menu>
  );
};

export default memo(SelectField);
