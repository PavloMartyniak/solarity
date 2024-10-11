import { AboutPage } from "@/screens/about-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About-us",
};

const Page = () => {
  return <AboutPage />;
};

export default Page;
