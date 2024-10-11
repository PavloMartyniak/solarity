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
      wrap="wrap"
      gap={4}
      w="full"
      maxW={{ base: "1200px", lg: "1500px" }}
    >
      {products?.map((item, idx) => (
        <ProductCard key={`product-card-${idx}`} data={item} />
      ))}
    </Flex>
  );
};
