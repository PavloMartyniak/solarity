import { RegisterPage } from "@/screens/register-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register",
};

const Page = () => {
  return <RegisterPage />;
};

export default Page;
