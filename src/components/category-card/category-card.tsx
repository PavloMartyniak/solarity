"use client";
import React from "react";
import { CategoryCardProps } from "./category-card.type";
import { Card, CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import { Link } from "@/i18n/routing";

export const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Card
      as={Link}
      href={`/categories/${data?.id}`}
      cursor="pointer"
      w={{ base: "18rem", lg: "24rem" }}
    >
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          w={{ base: 200, lg: 280 }}
          src={data.image}
          alt="product image"
        />
      </CardBody>
      <CardFooter
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>{data.name}</Text>
      </CardFooter>
    </Card>
  );
};
