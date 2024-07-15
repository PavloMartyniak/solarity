"use client";

import { chakraTheme } from "@/lib/styles/theme";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Header } from "./header";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Flex direction="column" bgColor="gray.1">
        <Header />
        <Flex py={6} px={{ base: 12, md: 24 }}>
          {children}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
