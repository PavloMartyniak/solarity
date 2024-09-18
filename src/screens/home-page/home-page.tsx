"use client";

import { ProductCard } from "@/components/product-card";
import { ProductFilterDrawer } from "@/components/product-filter-drawer";
import { ProductCardSkeleton } from "@/components/ui/product-card-skeleton/product-card-sekeleton";
import { useGetProducts } from "@/lib/queries/products";
import { Product } from "@/lib/types/product";
import {
  Flex,
  Icon,
  Text,
  useDisclosure,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { TbArrowsShuffle } from "react-icons/tb";

export const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading } = useGetProducts();
  const products = data?.results as Product[];

  return (
    <Flex flex={1} direction="column" gap={6}>
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
        justifyContent={{ base: "center", xl: "space-between" }}
        gap={6}
        wrap="wrap"
        flex={1}
      >
        {isLoading ? (
          <ProductCardSkeleton />
        ) : (
          products?.map((item, idx) => (
            <ProductCard key={`product-card-${idx}`} data={item} />
          ))
        )}
      </Flex>
      <ProductFilterDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};
