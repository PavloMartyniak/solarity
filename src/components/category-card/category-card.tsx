"use client";
import React from "react";
import { CategoryCardProps } from "./category-card.type";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { formatRoute } from "@/lib/helpers/route-formater";

export const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Card
      as={Link}
      href={`/categories/${formatRoute(data.title)}`}
      cursor="pointer"
      maxW={{ base: "18rem", lg: "24rem" }}
      w="full"
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
        <Text>{data.title}</Text>
      </CardFooter>
    </Card>
  );
};
