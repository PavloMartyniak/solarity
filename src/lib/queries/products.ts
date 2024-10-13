import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PRODUCT, PRODUCTS } from "../constants/query-keys";
import { useParams, useSearchParams } from "next/navigation";
import { Pagination, Product } from "../types";
import { API } from "../constants/api";
import api from "./api";

export const useGetProducts = () => {
  const searchParams = useSearchParams();

  const queryClient = useQueryClient();
  const category = searchParams.get("category");
  const queryKey = Array.from(searchParams.values());

  return useQuery<Pagination<Product>>({
    queryKey: [PRODUCTS, ...queryKey],
    queryFn: async () => {
      const { data } = await api.get(API.PRODUCTS, {
        params: { category: category },
      });
      return data;
    },
    initialData: () => queryClient.getQueryData([PRODUCTS, ...queryKey]),
  });
};

export const useGetProduct = () => {
  const queryClient = useQueryClient();
  const { product } = useParams();

  return useQuery<Product>({
    queryKey: [PRODUCT, product],
    queryFn: async () => {
      const { data } = await api.get(`${API.PRODUCTS}/${product}`);
      return data;
    },
    initialData: () => queryClient.getQueryData([PRODUCT, product]),
  });
};
