import { CategoryCard } from "@/components/category-card";
import { categories_data_mocked } from "@/lib/mocked-data/categories";
import { Flex } from "@chakra-ui/react";
import React from "react";

export const CategoriesPage = () => {
  const data = categories_data_mocked;
  return (
    <Flex
      flexWrap="wrap"
      gap={6}
      w="full"
      justifyContent={{ base: "center", lg: "normal" }}
    >
      {data.map((item, idx) => (
        <CategoryCard key={`product-card-${idx}`} data={item} />
      ))}
    </Flex>
  );
};
