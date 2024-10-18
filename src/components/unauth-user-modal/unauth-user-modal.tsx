import React from "react";
import { UnAuthModalProps } from "./unauth-user-modal.type";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Button,
  ModalFooter,
  VStack,
} from "@chakra-ui/react";
import { Link } from "@/i18n/routing";
import { Routes } from "@/lib/constants";
import { useTranslations } from "next-intl";

export const UnAuthUserModal: React.FC<UnAuthModalProps> = ({
  isOpen,
  onClose,
}) => {
  const t = useTranslations("UnAuthModal");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="lg" boxShadow="lg">
        <ModalBody textAlign="center" p={8}>
          <VStack spacing={4}>
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              {t("title")}
            </Text>
            <Text fontSize="md" color="gray.600">
              {t("subTitle")}
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center" p={6}>
          <Button
            as={Link}
            href={Routes.LOGIN}
            colorScheme="blue"
            variant="primary"
            size="lg"
            borderRadius="md"
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
          >
            {t("goLoginButton")}
          </Button>
          <Button
            ml={4}
            onClick={onClose}
            variant="secondary"
            size="lg"
            borderRadius="md"
            colorScheme="gray"
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
          >
            {t("closeButton")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
