import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const PartnersBanner = () => {
  const partners = [
    "/images/goodwe-logo.png",
    "/images/goodwe-logo.png",
    "/images/goodwe-logo.png",
    "/images/goodwe-logo.png",
    "/images/goodwe-logo.png",
    "/images/goodwe-logo.png",
    "/images/goodwe-logo.png",
  ];
  return (
    <Flex
      gap={2}
      overflowX="auto"
      overflowY="hidden"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      {partners.map((item, idx) => (
        <Image
          key={`partner-logo-${idx}`}
          src={item}
          width={250}
          height={120}
          alt="partner-logo"
        />
      ))}
    </Flex>
  );
};
