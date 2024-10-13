"use client";

import { ProductCard } from "@/components/product-card";
import { useGetProducts } from "@/lib/queries/products";
import { Product } from "@/lib/types/product";
import { Flex } from "@chakra-ui/react";
import React from "react";

export const ProductsPage = () => {
  const { data } = useGetProducts();

  const products = data?.results as Product[];

  return (
    <Flex
      my={12}
      justifyContent={{ base: "center", lg: "start" }}
      pr={12}
      wrap="wrap"
      gap={8}
      w="full"
    >
      {products?.map((item, idx) => (
        <ProductCard key={`product-card-${idx}`} data={item} />
      ))}
    </Flex>
  );
};
