"use client";

import { useGetCategories } from "@/lib/queries/categories";
import { Flex, Text } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const CategoryList = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data } = useGetCategories();
  const categories = data?.results;

  const handleSelectCategory = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const category = searchParams.get("category");

  return (
    <Flex m={4} direction="column">
      {categories?.map((item, idx) => (
        <Text
          onClick={() => handleSelectCategory(item.slug)}
          cursor="pointer"
          fontWeight={category === item.slug ? "700" : "400"}
          key={`category-name-${idx}`}
        >
          {item.name}
        </Text>
      ))}
    </Flex>
  );
};
