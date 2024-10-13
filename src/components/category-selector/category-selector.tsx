import { useGetCategories } from "@/lib/queries/categories";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const CategorySelector = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const { data } = useGetCategories();
  const categories = data?.results;

  const handleSelectCategory = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const selectedCategory = categories?.find(
    (item) => item.slug === searchParams.get("category")
  )?.name;

  return (
    <Menu autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            bgColor="white"
            _active={{ bg: "white" }}
            _hover={{ bg: "white" }}
            rightIcon={<ChevronDownIcon />}
          >
            <Text>{selectedCategory ?? "Select category"}</Text>
          </MenuButton>
          <MenuList>
            {categories?.map((item) => (
              <MenuItem
                onClick={() => handleSelectCategory(item.slug)}
                display="flex"
                gap={2}
              >
                <Text fontWeight={600}>{item.name}</Text>
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
