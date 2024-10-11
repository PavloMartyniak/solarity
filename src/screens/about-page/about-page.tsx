"use client";

import { AchivementsCard } from "@/components/achivements-card";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  FaBolt,
  FaFistRaised,
  FaGem,
  FaHandshake,
  FaTheaterMasks,
} from "react-icons/fa";
import { FaAward, FaCrown, FaShieldHalved } from "react-icons/fa6";

const achivements = [
  {
    icon: <Icon as={FaCrown} color="gray.5" h={8} w={8} />,
    title: "Trusted by thousands",
    description:
      "Delivering industry-leading solar solutions, backed by a track record of excellence in customer satisfaction and sustainable energy innovation. Join us in paving the way towards a brighter, greener future with confidence in our proven expertise and commitment to quality service.",
  },
  {
    icon: <Icon as={FaAward} color="gray.5" h={8} w={8} />,
    title: "Award-Winning Courses",
    description:
      "Delivering industry-leading solar solutions, backed by a track record of excellence in customer satisfaction and sustainable energy innovation. Join us in paving the way towards a brighter, greener future with confidence in our proven expertise and commitment to quality service.",
  },
  {
    icon: <Icon as={FaTheaterMasks} color="gray.5" h={8} w={8} />,
    title: "Positive Feedback",
    description:
      "Delivering industry-leading solar solutions, backed by a track record of excellence in customer satisfaction and sustainable energy innovation. Join us in paving the way towards a brighter, greener future with confidence in our proven expertise and commitment to quality service.",
  },
  {
    icon: <Icon as={FaShieldHalved} color="gray.5" h={8} w={8} />,
    title: "Industry Partnership",
    description:
      "Delivering industry-leading solar solutions, backed by a track record of excellence in customer satisfaction and sustainable energy innovation. Join us in paving the way towards a brighter, greener future with confidence in our proven expertise and commitment to quality service.",
  },
];

const goals = [
  {
    icon: <Icon as={FaGem} color="gray.5" h={8} w={8} />,
    title: "Excellent quality",
    description:
      "Delivering industry-leading solar solutions, backed by a track record of excellence in customer satisfaction and sustainable energy innovation. Join us in paving the way towards a brighter, greener future with confidence in our proven expertise and commitment to quality service.",
  },
  {
    icon: <Icon as={FaBolt} color="gray.5" h={8} w={8} />,
    title: "Electricity Problem - Solving",
    description:
      "Delivering industry-leading solar solutions, backed by a track record of excellence in customer satisfaction and sustainable energy innovation. Join us in paving the way towards a brighter, greener future with confidence in our proven expertise and commitment to quality service.",
  },
  {
    icon: <Icon as={FaHandshake} color="gray.5" h={8} w={8} />,
    title: "Promote Colloboration and Comunity",
    description:
      "Delivering industry-leading solar solutions, backed by a track record of excellence in customer satisfaction and sustainable energy innovation. Join us in paving the way towards a brighter, greener future with confidence in our proven expertise and commitment to quality service.",
  },
  {
    icon: <Icon as={FaFistRaised} color="gray.5" h={8} w={8} />,
    title: "Stay Ahead of the Curve",
    description:
      "Delivering industry-leading solar solutions, backed by a track record of excellence in customer satisfaction and sustainable energy innovation. Join us in paving the way towards a brighter, greener future with confidence in our proven expertise and commitment to quality service.",
  },
];

export const AboutPage = () => {
  return (
    <Flex direction="column" gap={8}>
      <Flex
        px={8}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Text
          fontSize={32}
          fontWeight={800}
          maxW={{ base: "auto", md: "50%" }}
          alignSelf={{ base: "start", md: "center" }}
        >
          About Solix
        </Text>

        <Text color="gray.5" maxW={{ base: "auto", md: "50%" }}>
          Welcome to Solix, where innovation meets sustainability. We specialize
          in harnessing the power of the sun through state-of-the-art solar
          panels. At Solix, we're committed to providing efficient, eco-friendly
          energy solutions that empower homes and businesses. Join us in
          embracing a brighter, cleaner future with renewable energy.
        </Text>
      </Flex>

      <Divider />

      <Flex direction="column" px={8} justifyContent="space-between" gap={6}>
        <Box>
          <Text fontSize={32} fontWeight={600}>
            Achivements
          </Text>
          <Text color="gray.5">
            Leading the way in renewable energy innovation, achieving
            significant milestones in solar panel technology and sustainable
            practices.
          </Text>
        </Box>

        <Grid
          templateColumns="repeat(12, 1fr)"
          gap="4"
          display={{ base: "flex", md: "grid" }}
          flexDirection={{ base: "column" }}
        >
          {achivements.map((item) => (
            <GridItem colSpan={6}>
              <AchivementsCard data={item} />
            </GridItem>
          ))}
        </Grid>
      </Flex>

      <Flex direction="column" px={8} justifyContent="space-between" gap={6}>
        <Box>
          <Text fontSize={32} fontWeight={600}>
            Our Goals
          </Text>
          <Text color="gray.5" maxWidth="90%">
            At Solix, our goals are anchored in advancing renewable energy
            accessibility and sustainability. We aim to expand our reach, making
            solar solutions accessible to more homes and businesses worldwide.
            We prioritize innovation, continuously enhancing our technology to
            maximize energy efficiency and environmental impact. Committed to
            customer satisfaction, we strive to educate and empower communities
            about the benefits of solar energy, driving positive change towards
            a cleaner, more sustainable future for generations to come.
          </Text>
        </Box>

        <Grid
          templateColumns="repeat(12, 1fr)"
          gap="4"
          display={{ base: "flex", md: "grid" }}
          flexDirection={{ base: "column" }}
        >
          {goals.map((item) => (
            <GridItem colSpan={6}>
              <AchivementsCard data={item} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
