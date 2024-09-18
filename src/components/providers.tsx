"use client";

import { chakraTheme } from "@/lib/styles/theme";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Header } from "./header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={chakraTheme}>
      <QueryClientProvider client={queryClient}>
        <Flex direction="column" bgColor="gray.1">
          <Header />
          <Flex py={6} px={{ base: 12, md: 24 }} flex={1}>
            {children}
          </Flex>
        </Flex>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};
