import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "./api";
import { API } from "../constants/api";
import { PRODUCTS } from "../constants/query-keys";

export const useGetProducts = () => {
  const queryClient = useQueryClient();

  return useQuery<any>({
    queryKey: [PRODUCTS],
    queryFn: async () => {
      const { data } = await api.get(API.PRODUCTS);
      return data;
    },
    initialData: () => queryClient.getQueryData([PRODUCTS]),
  });
};
