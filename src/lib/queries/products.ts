import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "./api";
import { API } from "../constants/api";
import { PRODUCTS } from "../constants/query-keys";
import { useParams } from "next/navigation";

export const useGetProducts = () => {
  const queryClient = useQueryClient();
  const { category } = useParams();

  return useQuery<any>({
    queryKey: [PRODUCTS],
    queryFn: async () => {
      const { data } = await api.get(API.PRODUCTS, {
        params: { category_id: category },
      });
      return data;
    },
    initialData: () => queryClient.getQueryData([PRODUCTS]),
  });
};

export const useGetProduct = (productId: number) => {
  const queryClient = useQueryClient();

  return useQuery<any>({
    queryKey: [PRODUCTS],
    queryFn: async () => {
      const { data } = await api.get(`${API.PRODUCTS}/${productId}`);
      return data;
    },
    initialData: () => queryClient.getQueryData([PRODUCTS]),
  });
};
