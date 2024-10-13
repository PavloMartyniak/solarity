import { CategoryList } from "@/components/category-list";
import { ProductsFilter } from "@/components/products-filter";
import { API } from "@/lib/constants/api";
import { CATEGORIES, PRODUCTS } from "@/lib/constants/query-keys";
import api from "@/lib/queries/api";
import { getQueryClient } from "@/lib/utils/get-query-client";
import { ProductsPage } from "@/screens/products-page/products-page";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
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

  const category = searchParams.category;

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [PRODUCTS, ...queryKey],
      queryFn: async () => {
        const { data } = await api.get(API.PRODUCTS, {
          params: { category: category },
        });
        return data;
      },
    }),

    queryClient.prefetchQuery({
      queryKey: [CATEGORIES],
      queryFn: async () => {
        const { data } = await api.get(API.CATEGORIES);
        return data;
      },
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Grid templateColumns="repeat(12, 1fr)" width="full" height="100%">
        <GridItem
          display={{ base: "none", lg: "grid" }}
          width="full"
          colSpan={2}
          borderRightWidth={1}
        >
          <CategoryList />
        </GridItem>

        <GridItem
          colSpan={{ base: 12, lg: 10 }}
          overflowY="auto"
          width="full"
          height={`calc(100vh - 60px)`}
        >
          <Flex overflowX={{ base: "auto", lg: "unset" }}>
            <ProductsFilter />
          </Flex>

          <Flex ml={{ base: "unset", lg: 12 }}>
            <ProductsPage />
          </Flex>
        </GridItem>
      </Grid>
    </HydrationBoundary>
  );
};

export default Page;
