"use client";

import { HomePageBanner } from "@/components/home-page-banner";
import { PartnersBanner } from "@/components/partners-banner";
import { ProductCard } from "@/components/product-card";

import { useGetProducts } from "@/lib/queries/products";
import { Product } from "@/lib/types/product";
import { Flex } from "@chakra-ui/react";
import React from "react";

export const HomePage = () => {
  const { data } = useGetProducts();
  const products = data?.results as Product[];

  return (
    <Flex direction="column" gap={12} flex={1} alignItems="center">
      <HomePageBanner />
      <PartnersBanner />

      <Flex
        justifyContent={{ base: "center", lg: "start" }}
        wrap="wrap"
        gap={6}
        mb={12}
        w="full"
        maxW="1200px"
      >
        {products?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </Flex>
    </Flex>
  );
};
