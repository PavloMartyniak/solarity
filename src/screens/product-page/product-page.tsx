"use client";

import { useGetProduct } from "@/lib/queries/products";
import { ImageType } from "@/lib/types/image";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const ProductPage = () => {
  const { product: product_id } = useParams();
  const { data: product, isLoading } = useGetProduct(Number(product_id));

  const [selectedImage, setSelectedImage] = useState<string>();

  useEffect(() => {
    product ? setSelectedImage(product?.images?.[0]?.image) : null;
  }, [product]);

  return (
    <Grid
      display={{ base: "flex", lg: "grid" }}
      flexDirection="column"
      templateColumns="repeat(12, 1fr)"
      gap="8"
    >
      <GridItem colSpan={6}>
        <Flex direction="column" gap={4} maxW={450} overflow="hidden">
          {isLoading ? (
            <Skeleton height={450} w={450} />
          ) : (
            <Image
              src={selectedImage}
              w={{ base: 300, lg: 450 }}
              h={{ base: 300, lg: 450 }}
              alt="product-image"
            />
          )}
          <Flex gap={3} overflowX="scroll">
            {isLoading
              ? Array.from({ length: 4 }).map((_, idx) => (
                  <Skeleton key={idx} height={120} width={250} />
                ))
              : product?.images?.map((item: ImageType, idx: number) => (
                  <Box
                    key={idx}
                    as={Image}
                    onClick={() => setSelectedImage(item?.image)}
                    src={item?.image}
                    w={{ base: 120, lg: 250 }}
                    h={120}
                    cursor="pointer"
                    alt="product-small-image"
                  />
                ))}
          </Flex>
        </Flex>
      </GridItem>

      <GridItem colSpan={6}>
        <Box>
          {isLoading ? (
            <Skeleton w="full" h={20} />
          ) : (
            <Text fontWeight="bold" fontSize={{ base: 18, lg: 24 }}>
              {product?.name}
            </Text>
          )}

          {isLoading ? (
            <Skeleton mt={6} w="full" h={300} />
          ) : (
            <Text textColor="gray.4" fontSize={{ base: 16, lg: 18 }}>
              {product?.description}
            </Text>
          )}
        </Box>
      </GridItem>
    </Grid>
  );
};
