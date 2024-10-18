import { LoginPage } from "@/screens/login-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

const Page = () => {
  return <LoginPage />;
};

export default Page;
