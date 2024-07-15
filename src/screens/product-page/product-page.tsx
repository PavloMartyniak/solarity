"use client";

import { product_data_mocked } from "@/lib/mocked-data/products";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const ProductPage = () => {
  const product = product_data_mocked[0];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap="8">
      <GridItem colSpan={6}>
        <Flex direction="column" gap={4} maxW={450} overflow="hidden">
          <Image src={selectedImage} w={450} h={450} alt="product-image" />
          <Flex gap={3} overflowX="scroll">
            {product.images.map((item) => (
              <Box
                as={Image}
                onClick={() => setSelectedImage(item)}
                src={item}
                w={250}
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
          <Text fontWeight="bold" fontSize={{ base: 18, lg: 24 }}>
            {product.title}
          </Text>
          <Text textColor="gray.4" fontSize={{ base: 16, lg: 18 }}>
            {product.description}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};
