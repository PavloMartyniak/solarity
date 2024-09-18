import { ImageType } from "./image";

export type Product = {
  id: number;
  name: string;
  description: string;
  description_short: string;
  price: string;
  category: number;
  images: ImageType[];
};
