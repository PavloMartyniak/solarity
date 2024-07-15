import { z } from "zod";

export const ProductsFilterSchema = z.object({
  category: z.string().optional(),
});
