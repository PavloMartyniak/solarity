import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";

export const ProductCardSkeleton = () => {
  return Array.from({ length: 6 }).map((_, idx) => (
    <Box key={`skeleton-${idx}`} w={{ base: "18rem", lg: "24rem" }}>
      <Skeleton height="200px" />
      <Skeleton height="20px" mt={2} />
      <Skeleton height="20px" mt={2} width="50%" />
      <Skeleton height="40px" mt={2} />
    </Box>
  ));
};
