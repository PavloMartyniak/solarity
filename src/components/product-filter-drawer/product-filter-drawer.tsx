import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { categoriesOptions } from "@/lib/constants";
import { SelectField } from "../ui/select-field";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { ProductsFilterSchema } from "@/lib/schema";

export const ProductFilterDrawer = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(100000);

  const handleSliderChange = (newValues: number[]) => {
    setMinValue(newValues[0]);
    setMaxValue(newValues[1]);
  };

  const {
    control,
    formState: { errors },
  } = useForm<z.output<typeof ProductsFilterSchema>>();

  return (
    <form>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter by</DrawerHeader>

          <DrawerBody>
            <Box mb={4}>
              <Text fontSize={16} fontWeight={600} mb={2}>
                Price
              </Text>
              <Flex justifyContent="space-between">
                <Text>{minValue.toLocaleString()} $</Text>
                <Text>{maxValue.toLocaleString()} $</Text>
              </Flex>
              <RangeSlider
                aria-label={["min", "max"]}
                defaultValue={[minValue, maxValue]}
                min={0}
                max={100000}
                step={10}
                onChange={handleSliderChange}
                colorScheme="gray"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </Box>

            <Box>
              <Text fontSize={16} fontWeight={600} mb={2}>
                Category
              </Text>
              <Controller
                control={control}
                name="category"
                render={({ field }) => {
                  return (
                    <SelectField
                      options={categoriesOptions}
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Choose Category"
                      isInvalid={!!errors?.category}
                      errorMessage={errors?.category?.message}
                    />
                  );
                }}
              />
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="secondary" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} variant="primary">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </form>
  );
};
