"use client";
import Input from "@/components/ui/Input/input";
import { Link } from "@/i18n/routing";
import { Routes } from "@/lib/constants";
import { LoginSchema } from "@/lib/schema";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";

export const LoginPage = () => {
  const t = useTranslations("Login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.output<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: Zod.output<typeof LoginSchema>) => {
    console.log("data", data);
  };

  return (
    <Flex
      h="calc(100vh - 70px)"
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card w="48rem" borderWidth={1}>
          <CardHeader>
            <Text>{t("loginTitle")}</Text>
          </CardHeader>
          <CardBody
            display="flex"
            flexDirection="column"
            gap={4}
            flex={1}
            p={4}
          >
            <Input
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              id="email"
              placeholder={t("email")}
              {...register("email")}
            />
            <Input
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              id="password"
              placeholder={t("password")}
              {...register("password")}
            />
            <Button type="submit" variant="primary">
              {t("loginButton")}
            </Button>

            <Flex placeSelf="end" alignItems="end" direction="column">
              <Text
                cursor="pointer"
                fontSize={{ base: 12, lg: 14 }}
                _hover={{ textDecoration: "underline" }}
              >
                {t("forgotPassword")}
              </Text>
              <Text
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                fontSize={{ base: 12, lg: 14 }}
                as={Link}
                href={Routes.REGISTER}
              >
                {t("dontHaveAccount")}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      </form>
    </Flex>
  );
};
