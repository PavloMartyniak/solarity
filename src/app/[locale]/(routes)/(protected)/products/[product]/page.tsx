import { ProductPage } from "@/screens/product-page";
import { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { product: string };
}): Metadata => {
  return {
    title: `${
      params.product.charAt(0).toUpperCase() +
      params.product.slice(1).slice(0, 5)
    }`,
  };
};

const Page = () => {
  return <ProductPage />;
};

export default Page;
