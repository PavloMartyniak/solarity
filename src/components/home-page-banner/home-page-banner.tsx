"use client";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

export const HomePageBanner = () => {
  const t = useTranslations("HomePage.Banner");

  return (
    <Flex
      userSelect="none"
      h="75vh"
      w="full"
      bgImage="/images/solar-panel-home.avif"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      alignItems="start"
    >
      <Flex pt={12} pl={8} direction="column">
        <Text
          color="white"
          display="inline-block"
          lineHeight={1.2}
          fontSize={{ base: 40, lg: 80 }}
          fontWeight={700}
        >
          {t("be")}
        </Text>
        <Text
          display="inline-block"
          lineHeight={1.2}
          color="white"
          fontSize={{ base: 40, lg: 80 }}
          fontWeight={700}
        >
          {t("independent")}
        </Text>
      </Flex>

      <Flex
        pt={12}
        pr={8}
        justifyContent="end"
        alignItems="center"
        gap={4}
        flex={1}
      >
        <Text color="white" fontSize={{ base: 14, lg: 20 }} fontWeight={300}>
          {t("with")}
        </Text>
        <Text color="white" fontSize={{ base: 20, lg: 40 }} fontWeight={700}>
          <span
            style={{
              backgroundColor: "black",
              color: "white",
              paddingInline: 3,
              display: "inline-block",
              verticalAlign: "middle",
              lineHeight: 1,
            }}
          >
            S
          </span>
          olix
        </Text>
      </Flex>
    </Flex>
  );
};
