"use client";
import React from "react";
import { ProductCardProps } from "./product-card.type";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "@/i18n/routing";
import { Routes } from "@/lib/constants";

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Flex
      as={Link}
      href={`${Routes.PRODUCTS}/${data?.sku}`}
      maxW={280}
      direction="column"
    >
      <Flex rounded="xl" borderWidth={1} bg="white" py={4}>
        <Image
          w="full"
          h={280}
          objectFit="cover"
          src={data?.images[0]?.image}
          alt="product image"
        />
      </Flex>
      <Text ml={2}>{data?.name}</Text>
      <Text ml={2} fontWeight={700}>
        {data?.price}
      </Text>
    </Flex>
  );
};
