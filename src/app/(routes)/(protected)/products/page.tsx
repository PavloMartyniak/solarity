import { ProductsPage } from "@/screens/products-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products",
};

const Page = () => {
  return <ProductsPage />;
};

export default Page;
