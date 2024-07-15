import { CategoriesPage } from "@/screens/categories-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Categories",
};

const Page = () => {
  return <CategoriesPage />;
};

export default Page;
