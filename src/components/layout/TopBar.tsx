"use client";

import { Box, Flex, HStack, Menu, Portal, Text } from "@chakra-ui/react";
import {
  Calculator,
  Calendar,
  SearchStatus,
  Shop,
  Wallet2,
  HambergerMenu,
} from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { BudgetingModal } from "@/components/topbar/BudgetingModal";
import { CalendarModal } from "@/components/topbar/CalendarModal";
import { NavIconButton } from "@/components/topbar/NavIconButton";
import { ProfileMenu } from "@/components/topbar/ProfileMenu";
import { PAGE_MAX_W, PAGE_PX } from "./page-inset";

const ICON_COLOR = "white";
const ICON_VARIANT = "Linear" as const;
const ICON_SIZE = 26;

export function TopBar() {
  const [budgetingOpen, setBudgetingOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <Box bg="brand.green.solid" w="full">
      <Flex
        h="82px"
        align="center"
        justify="space-between"
        color="white"
        maxW={PAGE_MAX_W}
        mx="auto"
        px={PAGE_PX}
        position="relative"
      >
        <Box w={{ base: "170px", md: "200px" }} flexShrink={0}>
          <Image
            src="/icons/logo.svg"
            alt="Expert Listing"
            width={200}
            height={27}
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </Box>

        <HStack gap={{ base: "8px", md: "16px" }}>
          <HStack
            gap={{ md: "16px", lg: "24px" }}
            display={{ base: "none", md: "flex" }}
          >
            <NavIconButton
              label="Budgeting"
              onClick={() => setBudgetingOpen(true)}
              icon={
                <Calculator
                  size={ICON_SIZE}
                  color={ICON_COLOR}
                  variant={ICON_VARIANT}
                />
              }
            />
            <Box>
              <NavIconButton
                label="Calendar"
                onClick={() => setCalendarOpen((v) => !v)}
                icon={
                  <Calendar
                    size={ICON_SIZE}
                    color={ICON_COLOR}
                    variant={ICON_VARIANT}
                  />
                }
              />
            </Box>
            <NavIconButton
              label="Activity Search"
              icon={
                <SearchStatus
                  size={ICON_SIZE}
                  color={ICON_COLOR}
                  variant={ICON_VARIANT}
                />
              }
            />
            <NavIconButton
              label="Payout Center"
              icon={
                <Wallet2
                  size={ICON_SIZE}
                  color={ICON_COLOR}
                  variant={ICON_VARIANT}
                />
              }
            />
            <NavIconButton
              label="Marketplace"
              icon={
                <Shop
                  size={ICON_SIZE - 2}
                  color={ICON_COLOR}
                  variant={ICON_VARIANT}
                />
              }
            />
          </HStack>

          <Box display={{ base: "block", md: "none" }} position="relative">
            <Menu.Root positioning={{ placement: "bottom-end", offset: { mainAxis: 12 } }}>
              <Menu.Trigger asChild>
                <Box
                  as="button"
                  aria-label="Open navigation menu"
                  cursor="pointer"
                  w="40px"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="8px"
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "whiteAlpha.700",
                    outlineOffset: "2px",
                  }}
                >
                  <HambergerMenu size={26} color="white" variant="Linear" />
                </Box>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner zIndex={60}>
                  <Menu.Content
                    bg="white"
                    borderRadius="14px"
                    boxShadow="0 16px 40px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)"
                    borderWidth="1px"
                    borderColor="border.card"
                    p="12px"
                    w="220px"
                    outline="none"
                  >
                    <Menu.Item value="budgeting" onClick={() => setBudgetingOpen(true)} py="12px" px="12px" cursor="pointer" borderRadius="6px" _hover={{ bg: "ink.50" }} _highlighted={{ bg: "ink.50" }} bg="transparent">
                      <HStack gap="12px">
                        <Calculator size={20} color="#191919" variant="Linear" />
                        <Text fontSize="15px" fontWeight={500} color="ink.900">Budgeting</Text>
                      </HStack>
                    </Menu.Item>
                    <Menu.Item value="calendar" onClick={() => setCalendarOpen(true)} py="12px" px="12px" cursor="pointer" borderRadius="6px" _hover={{ bg: "ink.50" }} _highlighted={{ bg: "ink.50" }} bg="transparent">
                      <HStack gap="12px">
                        <Calendar size={20} color="#191919" variant="Linear" />
                        <Text fontSize="15px" fontWeight={500} color="ink.900">Calendar</Text>
                      </HStack>
                    </Menu.Item>
                    <Menu.Item value="activity" py="12px" px="12px" cursor="pointer" borderRadius="6px" _hover={{ bg: "ink.50" }} _highlighted={{ bg: "ink.50" }} bg="transparent">
                      <HStack gap="12px">
                        <SearchStatus size={20} color="#191919" variant="Linear" />
                        <Text fontSize="15px" fontWeight={500} color="ink.900">Activity Search</Text>
                      </HStack>
                    </Menu.Item>
                    <Menu.Item value="payout" py="12px" px="12px" cursor="pointer" borderRadius="6px" _hover={{ bg: "ink.50" }} _highlighted={{ bg: "ink.50" }} bg="transparent">
                      <HStack gap="12px">
                        <Wallet2 size={20} color="#191919" variant="Linear" />
                        <Text fontSize="15px" fontWeight={500} color="ink.900">Payout Center</Text>
                      </HStack>
                    </Menu.Item>
                    <Menu.Item value="store" py="12px" px="12px" cursor="pointer" borderRadius="6px" _hover={{ bg: "ink.50" }} _highlighted={{ bg: "ink.50" }} bg="transparent">
                      <HStack gap="12px">
                        <Shop size={20} color="#191919" variant="Linear" />
                        <Text fontSize="15px" fontWeight={500} color="ink.900">Marketplace</Text>
                      </HStack>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>

          <ProfileMenu />
        </HStack>

        <CalendarModal
          open={calendarOpen}
          onClose={() => setCalendarOpen(false)}
        />
      </Flex>

      <BudgetingModal open={budgetingOpen} onOpenChange={setBudgetingOpen} />
    </Box>
  );
}
