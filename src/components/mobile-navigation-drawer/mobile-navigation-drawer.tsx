import { Routes } from "@/lib/constants";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import React from "react";

export const MobileNavigationDrawer = ({
  onClose,
  isOpen,
  links,
}: {
  onClose: () => void;
  isOpen: boolean;
  links: {
    label: string;
    link: string;
  }[];
}) => {
  const pathname = usePathname();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottom="1px solid gray">
          <Text
            as={Link}
            href={Routes.HOME}
            cursor="pointer"
            fontSize={32}
            fontWeight={800}
          >
            Solix
          </Text>
        </DrawerHeader>

        <DrawerBody display="flex" flexDirection="column">
          {links.map((item, idx) => {
            if (pathname.includes(item.link)) {
              return (
                <Button
                  onClick={onClose}
                  alignSelf="start"
                  rounded="none"
                  key={`header-link-active-${idx}`}
                  as={Link}
                  w="full"
                  href={item.link}
                >
                  {item.label}
                </Button>
              );
            } else {
              return (
                <Button
                  onClick={onClose}
                  alignSelf="start"
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
