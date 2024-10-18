"use client";
import Input from "@/components/ui/Input/input";
import { Link } from "@/i18n/routing";
import { Routes } from "@/lib/constants";
import { RegisterSchema } from "@/lib/schema";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const RegisterPage = () => {
  const t = useTranslations("Register");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.output<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: Zod.output<typeof RegisterSchema>) => {
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
            <Text>{t("registerTitle")}</Text>
          </CardHeader>
          <CardBody
            display="flex"
            flexDirection="column"
            gap={4}
            flex={1}
            p={4}
          >
            <Flex justifyContent="space-between" gap={4}>
              <Input
                isInvalid={!!errors.firstName}
                errorMessage={errors.firstName?.message}
                id="firstName"
                placeholder={t("firstName")}
                {...register("firstName")}
              />

              <Input
                isInvalid={!!errors.lastName}
                errorMessage={errors.lastName?.message}
                id="lastName"
                placeholder={t("lastName")}
                {...register("lastName")}
              />
            </Flex>

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

            <Input
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              id="password"
              placeholder={t("repeatPassword")}
              {...register("password")}
            />

            <Input
              isInvalid={!!errors.city}
              errorMessage={errors.city?.message}
              id="city"
              placeholder={t("selectCity")}
              {...register("city")}
            />

            <Button type="submit" variant="primary">
              {t("registerButton")}
            </Button>

            <Flex placeSelf="end" alignItems="end" direction="column">
              <Text
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                fontSize={{ base: 12, lg: 14 }}
                as={Link}
                href={Routes.LOGIN}
              >
                {t("alreadyHaveAccount")}
              </Text>
            </Flex>
          </CardBody>
        </Card>
      </form>
    </Flex>
  );
};
