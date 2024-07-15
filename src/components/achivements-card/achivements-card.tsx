import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AchivementsCardProps } from "./achivements-card.type";

export const AchivementsCard: React.FC<AchivementsCardProps> = ({ data }) => {
  return (
    <Card>
      <CardBody display="flex" flexDirection="column" gap={4} p={6}>
        <Flex
          p={2}
          borderWidth={1}
          w="fit-content"
          rounded="lg"
          borderColor="gray.6"
          bgColor="gray.1"
        >
          {data.icon}
        </Flex>

        <Text fontSize={24} fontWeight={500}>
          {data.title}
        </Text>

        <Text color="gray.5">{data.description}</Text>
      </CardBody>
    </Card>
  );
};
