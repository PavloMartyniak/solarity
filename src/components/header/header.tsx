import { Routes } from "@/lib/constants";
import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { MobileNavigationDrawer } from "../mobile-navigation-drawer";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "../ui/language-selector";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const Header = () => {
  const t = useTranslations("Links");
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
      label: t("products"),
      link: Routes.PRODUCTS,
    },

    {
      label: t("about-us"),
      link: Routes.ABOUT,
    },
  ];

  return (
    <Flex
      userSelect="none"
      h={16}
      px={6}
      transition="padding 0.3s ease-in-out"
      justifyContent="space-between"
      shadow={small ? "xl" : "sm"}
      bgColor="white"
      position="sticky"
      top={0}
      zIndex={2}
    >
      <Text
        as={Link}
        href={Routes.HOME}
        color="black"
        fontSize={{ base: 20, lg: 40 }}
        fontWeight={700}
      >
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

      {/* DESKTOP HEADER */}
      <Flex gap={4} alignItems="center" display={{ base: "none", md: "flex" }}>
        {links.map((item, idx) => {
          if (pathname.includes(item.link)) {
            return (
              <Button
                bg="none"
                rounded="none"
                borderBottomWidth={2}
                borderColor="gray"
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

        <Menu autoSelect={false}>
          {({ isOpen }) => (
            <>
              <MenuButton
                p={0}
                bg="unset"
                _hover={{ bg: "unset" }}
                _active={{ bg: "unset" }}
                isActive={isOpen}
                as={Button}
              >
                <Avatar cursor="pointer" size="sm" />
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} href={Routes.LOGIN}>
                  Login
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

        <LanguageSelector />
      </Flex>

      {/* MOBILE HEADER */}
      <Flex alignItems="center" display={{ base: "flex", md: "none" }}>
        <LanguageSelector />

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
