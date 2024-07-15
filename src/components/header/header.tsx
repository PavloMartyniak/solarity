import { Routes } from "@/lib/constants";
import { Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { MobileNavigationDrawer } from "../mobile-navigation-drawer";

export const Header = () => {
  const [small, setSmall] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 50)
      );
    }
  }, []);

  const links = [
    {
      label: "Products",
      link: Routes.PRODUCTS,
    },
    {
      label: "Categories",
      link: Routes.CATEGORIES,
    },
    {
      label: "About Solarity",
      link: Routes.ABOUT,
    },
    { label: "Solutions", link: Routes.SOLUTIONS },
  ];

  return (
    <Flex
      py={small ? 2 : 6}
      px={6}
      transition="padding 0.3s ease-in-out"
      justifyContent="space-between"
      shadow={small ? "xl" : "sm"}
      bgColor="white"
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Text
        as={Link}
        href={Routes.HOME}
        cursor="pointer"
        fontSize={32}
        fontWeight={800}
      >
        Solarity
      </Text>
      {/* DESKTOP HEADER */}
      <Flex gap={4} alignItems="center" display={{ base: "none", md: "flex" }}>
        {links.map((item, idx) => {
          if (pathname === item.link) {
            return (
              <Button
                bg="none"
                rounded="none"
                borderBottomWidth={2}
                borderColor="gray.5"
                key={`header-link-active-${idx}`}
                as={Link}
                href={item.link}
              >
                {item.label}
              </Button>
            );
          } else {
            return (
              <Button
                rounded="none"
                bg="transparent"
                key={`header-link-${idx}`}
                as={Link}
                href={item.link}
              >
                {item.label}
              </Button>
            );
          }
        })}
      </Flex>

      {/* MOBILE HEADER */}
      <Flex gap={4} alignItems="center" display={{ base: "flex", md: "none" }}>
        <Icon
          cursor={"pointer"}
          as={FiAlignRight}
          w={6}
          h={6}
          onClick={onOpen}
        />
        <MobileNavigationDrawer
          links={links}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Flex>
    </Flex>
  );
};
