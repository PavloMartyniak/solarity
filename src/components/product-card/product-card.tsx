"use client";
import React from "react";
import { ProductCardProps } from "./product-card.type";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { formatRoute } from "@/lib/helpers/route-formater";
import { Routes } from "@/lib/constants";

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Card
      as={Link}
      href={`${Routes.PRODUCTS}/${formatRoute(data.title)}`}
      cursor="pointer"
      maxW={{ base: "18rem", lg: "24rem" }}
      w="full"
    >
      <CardHeader>
        <Text maxW="20rem" fontSize={{ base: "lg", md: "xl" }}>
          {data.title}
        </Text>
      </CardHeader>
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image w={220} src={data.images[0]} alt="product image" />
      </CardBody>
      <CardFooter
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize={{ base: "lg", md: "xl" }}>{`${data.price.toFixed(
          2
        )} $`}</Text>
        <Button variant="secondary">Buy it</Button>
      </CardFooter>
    </Card>
  );
};
