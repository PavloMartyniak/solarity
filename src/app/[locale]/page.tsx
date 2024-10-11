import { CategoryList } from "@/components/category-list";
import { ProductsFilter } from "@/components/products-filter";
import { API } from "@/lib/constants/api";
import { CATEGORIES, PRODUCTS } from "@/lib/constants/query-keys";
import api from "@/lib/queries/api";
import { getQueryClient } from "@/lib/utils/get-query-client";
import { HomePage } from "@/screens/home-page";
import { ProductsPage } from "@/screens/products-page/products-page";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products",
};

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const queryClient = getQueryClient();
  const queryKey = Object.values(searchParams);

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [PRODUCTS, ...queryKey],
      queryFn: async () => {
        const { data } = await api.get(API.PRODUCTS);
        return data;
      },
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage />
    </HydrationBoundary>
  );
};

export default Page;
