import { API } from "@/lib/constants/api";
import { PRODUCT } from "@/lib/constants/query-keys";
import api from "@/lib/queries/api";
import { getQueryClient } from "@/lib/utils/get-query-client";
import { ProductPage } from "@/screens/product-page";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

export const generateMetadata = ({
  params: { product },
}: {
  params: { product: string };
}): Metadata => {
  return {
    title: `${
      product.charAt(0).toUpperCase() + product.slice(1).slice(0, 12)
    }...`,
  };
};

const Page = async ({
  params: { product },
}: {
  params: { product: string };
}) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [PRODUCT, product],
    queryFn: async () => {
      const { data } = await api.get(`${API.PRODUCTS}/${product}`);
      return data;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage />
    </HydrationBoundary>
  );
};

export default Page;
