"use client";
import React from "react";
import { ProductCardProps } from "./product-card.type";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@/i18n/routing";
import { Routes } from "@/lib/constants";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { UnAuthUserModal } from "../unauth-user-modal";

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const showUnAuthModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onOpen();
  };

  return (
    <>
      <Card
        overflow="hidden"
        cursor="pointer"
        w={{ base: "16rem", lg: "22rem" }}
      >
        <CardBody
          p={{ base: 2, lg: 4 }}
          overflow="hidden"
          display="flex"
          flexDirection="column"
          as={Link}
          href={`${Routes.PRODUCTS}/${data?.sku}`}
          justifyContent="space-between"
        >
          <Image
            placeSelf="center"
            h={280}
            w={280}
            src={data?.images[0]?.image}
            alt="product image"
          />
          <Flex alignItems="end">
            <Flex flex={1} direction="column" gap={1}>
              <Text fontWeight={600} fontSize={{ base: "14", md: "18" }}>
                {data.name}
              </Text>

              <Text
                color="gray"
                fontWeight={400}
                fontSize={{ base: "12", md: "16" }}
              >
                Pylontech
              </Text>

              <Text fontWeight={600} fontSize={{ base: "14", md: "18" }}>
                ${data.price}
              </Text>
            </Flex>
            <Button
              onClick={(e) => showUnAuthModal(e)}
              bg="none"
              rounded="full"
              py={0}
              px="14px"
            >
              <FaRegHeart size={18} />
            </Button>
            <Button
              onClick={(e) => showUnAuthModal(e)}
              bg="none"
              rounded="full"
              py={0}
              px="14px"
            >
              <BsCart4 size={18} />
            </Button>
          </Flex>
        </CardBody>
      </Card>
      <UnAuthUserModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
