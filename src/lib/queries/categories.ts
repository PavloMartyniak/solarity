import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CATEGORIES } from "../constants/query-keys";
import api from "./api";
import { API } from "../constants/api";

export const useGetCategories = () => {
  const queryClient = useQueryClient();

  return useQuery<any>({
    queryKey: [CATEGORIES],
    queryFn: async () => {
      const { data } = await api.get(API.CATEGORIES);
      return data;
    },
    initialData: () => queryClient.getQueryData([CATEGORIES]),
  });
};
