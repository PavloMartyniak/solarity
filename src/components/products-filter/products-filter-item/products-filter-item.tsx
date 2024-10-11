import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ProductsFilterItemProps } from "./products-filter-item.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Option } from "@/lib/types";
import { useTranslations } from "next-intl";

export const ProductsFilterItem: React.FC<ProductsFilterItemProps> = ({
  name,
  options,
}) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const t = useTranslations("ProductsFilters");

  const handleSelect = (option: Option, isChecked: boolean) => {
    const params = new URLSearchParams(searchParams);
    const existingValues = params.get(name)?.split(",") || [];

    if (isChecked) {
      existingValues.push(option.value);
    } else {
      const index = existingValues.indexOf(option.value);
      if (index > -1) {
        existingValues.splice(index, 1);
      }
    }

    if (existingValues.length > 0) {
      params.set(name, existingValues.join(","));
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleDeleteAllFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete(name);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Menu closeOnSelect={false} autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            bgColor="transparent"
            _hover={{ bgColor: "transparent" }}
            _active={{ bgColor: "transparent" }}
            rightIcon={<ChevronDownIcon />}
          >
            <Text fontWeight={600}>{t(name)}</Text>
          </MenuButton>
          <MenuList
            display="flex"
            flexDirection="column"
            gap={1}
            p={2}
            minWidth="auto"
            width="fit-content"
          >
            {options?.map((item) => {
              const isChecked =
                searchParams.get(name)?.split(",").includes(item.value) ||
                false;

              return (
                <MenuItem
                  _hover={{ bgColor: "gray.1" }}
                  onClick={() => handleSelect(item, !isChecked)}
                  key={item.value}
                  display="flex"
                >
                  <Flex gap={2}>
                    <Checkbox
                      isChecked={isChecked}
                      onChange={(e) => handleSelect(item, e.target.checked)}
                      colorScheme="gray"
                    />
                    <Text fontWeight={600}>
                      {t(`ProductsFiltersOptions.${item.label}`)}
                    </Text>
                  </Flex>
                </MenuItem>
              );
            })}
            <Divider borderColor="gray.3" />

            <Button onClick={handleDeleteAllFilters} bg="unset" size="xs">
              {t("clearAll")}
            </Button>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
