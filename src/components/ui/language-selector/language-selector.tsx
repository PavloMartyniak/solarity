import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface LocaleInterface {
  locale: string;
  image: string;
}

export const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Locales");

  const [selectedLanguage, setSelectedLanguage] = useState<LocaleInterface>();

  useEffect(() => {
    const currentLocale = pathname.split("/")[1]; // get current locale

    if (currentLocale === "en") {
      setSelectedLanguage({ locale: "en", image: "/icons/english-flag.png" });
    } else {
      setSelectedLanguage({ locale: "ua", image: "/icons/ukraine-flag.png" });
    }
  }, [pathname]);

  const handleSwitchLanguage = (value: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    setSelectedLanguage(
      value === "ua"
        ? { image: "/icons/ukraine-flag.png", locale: "ua" }
        : { image: "/icons/english-flag.png", locale: "en" }
    );

    router.push(
      `/${value}${pathname.substring(3)}?${currentParams.toString()}`
    ); // update route with new locale
  };

  return (
    <Menu autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            bgColor="transparent"
            _hover={{ bgColor: "transparent" }}
            _active={{ bgColor: "transparent" }}
            rightIcon={<ChevronDownIcon />}
          >
            <Avatar size="sm" borderRadius={0} src={selectedLanguage?.image} />
          </MenuButton>
          <MenuList>
            <MenuItem
              display="flex"
              gap={2}
              onClick={() => handleSwitchLanguage("ua")}
            >
              <Avatar
                size="sm"
                borderRadius={0}
                src="/icons/ukraine-flag.png"
              />
              <Text fontWeight={600}>{t("ukrainian")}</Text>
            </MenuItem>
            <MenuItem
              display="flex"
              gap={2}
              onClick={() => handleSwitchLanguage("en")}
            >
              <Avatar
                size="sm"
                borderRadius={0}
                src="/icons/english-flag.png"
              />
              <Text fontWeight={600}>{t("english")}</Text>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
