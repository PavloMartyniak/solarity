"use client";

import { useGetProduct } from "@/lib/queries/products";
import { EmailIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const ProductPage = () => {
  const { data: product } = useGetProduct();

  const [selectedImage, setSelectedImage] = useState<string>();

  useEffect(() => {
    product ? setSelectedImage(product?.images?.[0]?.image) : null;
  }, [product]);

  return (
    <Flex
      minH={`calc(100vh - 60px)`}
      alignItems="start"
      py={12}
      px={12}
      justifyContent="center"
      flex={1}
    >
      <Grid
        templateColumns="repeat(12, 1fr)"
        w="full"
        maxW={{ base: "1200px", lg: "1500px" }}
        display={{ base: "flex", lg: "grid" }}
        flexDirection={{ base: "column", lg: "unset" }}
        gap={4}
      >
        <GridItem colSpan={8}>
          <Flex direction={{ base: "column-reverse", lg: "row" }} gap={6}>
            <Flex direction={{ base: "row", lg: "column" }} gap={4}>
              {product?.images?.map((item) => (
                <Flex
                  overflow="hidden"
                  cursor="pointer"
                  onClick={() => setSelectedImage(item?.image)}
                  borderWidth={1}
                  shadow="md"
                  rounded="md"
                >
                  <Image
                    src={item.image}
                    w={{ base: 20, lg: 32 }}
                    h={{ base: 20, lg: 32 }}
                    alt={`${item.alt_text}`}
                  />
                </Flex>
              ))}
            </Flex>
            <Flex borderWidth={1} overflow="hidden" shadow="md" rounded="lg">
              <Image
                src={selectedImage}
                w={{ base: 300, lg: 550 }}
                h={{ base: 300, lg: 550 }}
                alt="product-image"
              />
            </Flex>
          </Flex>
        </GridItem>

        <GridItem colSpan={4}>
          <Flex direction="column" gap={4}>
            <Flex direction="column" pl={{ base: 0, lg: 4 }}>
              <Text fontSize={24} fontWeight={400}>
                {product?.name}
              </Text>
              <Text fontWeight={300} fontSize={18}>
                {product?.description_short}
              </Text>
              <Text fontWeight={700} fontSize={24}>
                {product?.price} $
              </Text>
            </Flex>

            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Characteristics
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Instructions
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Text pl={{ base: 0, lg: 4 }} fontSize={24}>
              Send an application and we will contact You or give us a call
            </Text>

            <Flex
              pl={{ base: 0, lg: 4 }}
              justifyContent="space-between"
              alignItems="center"
              direction={{ base: "column-reverse", lg: "row" }}
              gap={4}
            >
              <Button
                w={{ base: "full", lg: "fit-content" }}
                variant="primary"
                rightIcon={<EmailIcon />}
              >
                Send
              </Button>

              <UnorderedList>
                <ListItem>Free consultation</ListItem>
                <ListItem>Selection of products for your needs</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};
