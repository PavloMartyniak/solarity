import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

export const RegisterSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(3).max(20),
  city: z.string().min(3, { message: "please select city" }),
});

export const ProductsFilterSchema = z.object({
  category: z.string().optional(),
});
