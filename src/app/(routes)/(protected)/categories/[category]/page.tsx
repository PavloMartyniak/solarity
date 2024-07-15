import { CategoryPage } from "@/screens/category-page";
import { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}): Metadata => {
  return {
    title: `${
      params.category.charAt(0).toUpperCase() + params.category.slice(1)
    }`,
  };
};

const Page = () => {
  return <CategoryPage />;
};

export default Page;
