"use client";

import {
  Box,
  Dialog,
  Flex,
  HStack,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AlignBottom, Calculator, Setting4, TrendUp } from "iconsax-react";
import type { Icon } from "iconsax-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type Feature = {
  Icon: Icon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    Icon: Setting4,
    title: "Set up annual budgets by account category",
    description:
      "Allocate funds across income and expense lines with full visibility.",
  },
  {
    Icon: TrendUp,
    title: "Track actuals vs budget in real time",
    description:
      "See how your community is performing against plan, month by month.",
  },
  {
    Icon: AlignBottom,
    title: "Adjust figures and forecast with ease",
    description:
      "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
  },
];

export function BudgetingModal({ open, onOpenChange }: Props) {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => onOpenChange(e.open)}
      placement="center"
      motionPreset="scale"
    >
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.500" backdropFilter="blur(2px)" />
        <Dialog.Positioner>
          <Dialog.Content
            w={{ base: "calc(100vw - 32px)", sm: "438px" }}
            maxW="438px"
            borderRadius="10px"
            overflow="hidden"
            pb="24px"
            bg="white"
          >
            <Dialog.Title srOnly>Budgeting</Dialog.Title>

            <Box
              h="213px"
              w="full"
              bg="#0C2841"
              position="relative"
              overflow="hidden"
            >
              <Box position="absolute" inset="0">
                <Box
                  position="absolute"
                  top="26px"
                  left="50%"
                  transform="translateX(-50%)"
                  w="385px"
                  borderTopRadius="11px"
                  bg="#061520"
                  borderWidth="1px"
                  borderColor="whiteAlpha.100"
                  overflow="hidden"
                  h="259px"
                >
                  <HStack gap="9px" pl="13px" pt="8px">
                    <Box boxSize="11px" borderRadius="full" bg="#FF5F57" />
                    <Box boxSize="11px" borderRadius="full" bg="#FEBC2E" />
                    <Box boxSize="11px" borderRadius="full" bg="#28C840" />
                  </HStack>
                  <Flex
                    mx="auto"
                    mt="14px"
                    w="320px"
                    h="38px"
                    borderRadius="20px"
                    bg="#031B2E"
                    borderWidth="1px"
                    borderColor="#0C2841"
                    align="center"
                    px="14px"
                    gap="10px"
                  >
                    <Box
                      boxSize="13px"
                      borderRadius="2px"
                      bg="whiteAlpha.300"
                    />
                    <Box flex="1" />
                    <Box
                      h="26px"
                      w="119px"
                      borderRadius="10px"
                      bg="#031B2E"
                      borderWidth="1px"
                      borderColor="whiteAlpha.100"
                    />
                    <Box flex="1" />
                  </Flex>
                  {[0, 1].map((row) => (
                    <HStack key={row} gap="8px" mt="14px" pl="32px">
                      {[0, 1, 2].map((c) => (
                        <Box
                          key={c}
                          w="101px"
                          h="81px"
                          borderRadius="2px"
                          bg="#031B2E"
                          borderWidth="1px"
                          borderColor="#0C2841"
                          position="relative"
                        >
                          <Stack
                            gap="3px"
                            position="absolute"
                            left="4px"
                            bottom="4px"
                            opacity={0.8}
                          >
                            <Box
                              w="64px"
                              h="5px"
                              borderRadius="6px"
                              bg="#0A2336"
                            />
                            <Box
                              w="57px"
                              h="5px"
                              borderRadius="6px"
                              bg="#0A2336"
                            />
                            <Box
                              w="43px"
                              h="5px"
                              borderRadius="6px"
                              bg="#0A2336"
                            />
                          </Stack>
                        </Box>
                      ))}
                    </HStack>
                  ))}
                </Box>
              </Box>

              <Box
                position="absolute"
                inset="0"
                bg="rgba(9,22,32,0.30)"
                backdropFilter="blur(4px)"
              />

              <Flex
                position="absolute"
                inset="0"
                align="center"
                justify="center"
              >
                <Calculator size={80} color="white" variant="Linear" />
              </Flex>
            </Box>

            <Stack gap="23px" w="344px" mx="auto" mt="24px">
              {FEATURES.map(({ Icon, title, description }) => (
                <HStack key={title} align="flex-start" gap="12px">
                  <Box pt="2px" flexShrink={0}>
                    <Icon size={24} color="#191919" variant="Linear" />
                  </Box>
                  <Stack gap="4px">
                    <Text
                      fontSize="16px"
                      fontWeight={600}
                      color="text.heading"
                      lineHeight="1.25"
                    >
                      {title}
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight={400}
                      color="text.muted"
                      lineHeight="1.4"
                    >
                      {description}
                    </Text>
                  </Stack>
                </HStack>
              ))}
            </Stack>

            <Flex justify="center" mt="24px">
              <Box
                as="button"
                w="344px"
                h="46px"
                borderRadius="full"
                bg="#18181B"
                color="white"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                gap="10px"
                cursor="pointer"
                transition="background-color 0.15s ease"
                _hover={{ bg: "#000" }}
              >
                <Text fontSize="15px" fontWeight={500} letterSpacing="0.16px">
                  Create Budget
                </Text>
              </Box>
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
