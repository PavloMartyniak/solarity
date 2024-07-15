"use server";

import { Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  return <Flex w="full">{children}</Flex>;
};

export default Layout;
