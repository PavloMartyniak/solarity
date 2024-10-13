"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";
import { ProductsFilterItem } from "./products-filter-item";
import { panelTypes } from "@/lib/constants";

export const ProductsFilter = () => {
  return (
    <Flex
      flex={1}
      borderBottomWidth={1}
      bg="gray.1"
      position={{ base: "unset", lg: "sticky" }}
      shadow="sm"
      top={0}
      zIndex={1}
    >
      <ProductsFilterItem name={"panelType"} options={panelTypes} />
      <ProductsFilterItem name={"glassType"} options={panelTypes} />
      <ProductsFilterItem name={"cellType"} options={panelTypes} />
      <ProductsFilterItem name={"output"} options={panelTypes} />
    </Flex>
  );
};
