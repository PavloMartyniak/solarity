"use client";

import { CategoryCard } from "@/components/category-card";
import { ProductCardSkeleton } from "@/components/ui/product-card-skeleton/product-card-sekeleton";
import { useGetCategories } from "@/lib/queries/categories";
import { Category } from "@/lib/types/category";
import { Flex } from "@chakra-ui/react";
import React from "react";

export const CategoriesPage = () => {
  const { data, isLoading } = useGetCategories();

  const categories = data?.results as Category[];

  return (
    <Flex
      flexWrap="wrap"
      gap={6}
      w="full"
      justifyContent={{ base: "center", lg: "normal" }}
    >
      {isLoading ? (
        <ProductCardSkeleton />
      ) : (
        categories?.map((item, idx) => (
          <CategoryCard key={`product-card-${idx}`} data={item} />
        ))
      )}
    </Flex>
  );
};
