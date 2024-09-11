"use client";

import { ProductCard } from "@/components/product-card";
import { ProductFilterDrawer } from "@/components/product-filter-drawer";
import { product_data_mocked } from "@/lib/mocked-data/products";
import { useGetProducts } from "@/lib/queries/products";
import { Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { TbArrowsShuffle } from "react-icons/tb";

export const HomePage = () => {
  const data = product_data_mocked;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: products } = useGetProducts();

  return (
    <Flex direction="column" gap={6}>
      <Flex
        w="fit-content"
        onClick={onOpen}
        justifyContent="end"
        cursor="pointer"
        gap={2}
      >
        <Text fontSize={18} fontWeight={600}>
          Filters
        </Text>
        <Icon as={TbArrowsShuffle} w={6} h={6} />
      </Flex>
      <Flex
        flexWrap="wrap"
        justifyContent={{ base: "center", xl: "normal" }}
        gap={6}
      >
        {data.map((item, idx) => (
          <ProductCard key={`product-card-${idx}`} data={item} />
        ))}
      </Flex>
      <ProductFilterDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};
