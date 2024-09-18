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
import { Routes } from "@/lib/constants";

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Card
      as={Link}
      href={`${Routes.PRODUCTS}/${data?.id}`}
      cursor="pointer"
      w={{ base: "18rem", lg: "24rem" }}
    >
      <CardHeader>
        <Text maxW="20rem" fontSize={{ base: "lg", md: "xl" }}>
          {data.name}
        </Text>
      </CardHeader>
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image w={220} src={data?.images[0]?.image} alt="product image" />
      </CardBody>
      <CardFooter
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {data?.price ? (
          <Text fontSize={{ base: "lg", md: "xl" }}>{data?.price + "$"}</Text>
        ) : null}
        <Button ml="auto" variant="secondary">
          Buy it
        </Button>
      </CardFooter>
    </Card>
  );
};
