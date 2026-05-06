"use client";

import { Box, Flex, HStack, Menu, Portal, Stack, Text } from "@chakra-ui/react";
import {
  Drop,
  Lock1,
  LogoutCurve,
  Map,
  MessageNotif,
  People,
  type Icon,
} from "iconsax-react";
import { useState } from "react";
import { profile } from "@/data/profile";

type MenuRow = {
  id: string;
  label: string;
  Icon: Icon;
};

const ROWS: MenuRow[] = [
  { id: "teams", label: "Teams", Icon: People },
  { id: "snagging", label: "Snagging", Icon: Drop },
  { id: "feedback", label: "Feedback", Icon: MessageNotif },
  { id: "geo", label: "Geo-Bucket", Icon: Map },
  { id: "password", label: "Change password", Icon: Lock1 },
];

function Avatar({ size = 40 }: { size?: number }) {
  return (
    <Box
      bg="white"
      borderRadius="full"
      boxSize={`${size}px`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
    >
      <Text
        color="brand.green.solid"
        fontSize={size >= 56 ? "23px" : "18px"}
        fontWeight={600}
        lineHeight="1"
      >
        {profile.initial}
      </Text>
    </Box>
  );
}

function AvatarLarge() {
  return (
    <Box
      bg="brand.green.solid"
      borderRadius="full"
      boxSize="56px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
    >
      <Text color="white" fontSize="23px" fontWeight={500} lineHeight="1">
        {profile.initial}
      </Text>
    </Box>
  );
}

export function ProfileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box role="group" position="relative" data-menu-open={menuOpen}>
      <Menu.Root
        open={menuOpen}
        onOpenChange={(e) => setMenuOpen(e.open)}
        positioning={{ placement: "bottom-end", offset: { mainAxis: 12 } }}
      >
        <Menu.Trigger asChild>
          <Box
            as="button"
            aria-label="Open profile menu"
            cursor="pointer"
            borderRadius="full"
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "whiteAlpha.700",
              outlineOffset: "2px",
            }}
          >
            <Avatar />
          </Box>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content
              bg="white"
              borderRadius="14px"
              boxShadow="0 16px 40px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)"
              borderWidth="1px"
              borderColor="border.card"
              p="12px"
              w="320px"
              outline="none"
            >
              <Flex
                bg="surface.subtle"
                borderRadius="12px"
                p="14px"
                align="center"
                gap="14px"
                mb="12px"
              >
                <AvatarLarge />
                <Stack gap="2px" minW={0}>
                  <Text fontSize="16px" fontWeight={600} color="ink.900">
                    {profile.name}
                  </Text>
                  <Text
                    fontSize="13px"
                    fontWeight={400}
                    color="ink.400"
                    truncate
                  >
                    {profile.email}
                  </Text>
                </Stack>
              </Flex>

              <Stack gap="0">
                {ROWS.map(({ id, label, Icon }, idx) => (
                  <Menu.Item
                    key={id}
                    value={id}
                    onClick={() => setMenuOpen(false)}
                    px="8px"
                    py="14px"
                    borderTopWidth={idx === 0 ? "0" : "1px"}
                    borderTopColor="border.card"
                    bg="transparent"
                    cursor="pointer"
                    _hover={{ bg: "ink.50" }}
                    _highlighted={{ bg: "ink.50" }}
                  >
                    <HStack gap="14px" w="full">
                      <Icon size={20} color="#191919" variant="Bold" />
                      <Text fontSize="15px" fontWeight={500} color="ink.900">
                        {label}
                      </Text>
                    </HStack>
                  </Menu.Item>
                ))}
              </Stack>

              <Box borderTopWidth="1px" borderTopColor="border.card" mt="4px" />
              <Menu.Item
                value="logout"
                onClick={() => setMenuOpen(false)}
                px="8px"
                py="14px"
                bg="transparent"
                cursor="pointer"
                _hover={{ bg: "rgba(240,68,56,0.06)" }}
                _highlighted={{ bg: "rgba(240,68,56,0.06)" }}
              >
                <HStack gap="14px" w="full">
                  <LogoutCurve size={20} color="#F04438" />
                  <Text fontSize="15px" fontWeight={500} color="series.red">
                    Logout
                  </Text>
                </HStack>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      <Box
        position="absolute"
        top="calc(100% + 12px)"
        right="0"
        zIndex={20}
        bg="white"
        borderRadius="12px"
        boxShadow="0 8px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.04)"
        borderWidth="1px"
        borderColor="border.card"
        py="10px"
        px="14px"
        minW="200px"
        opacity={0}
        visibility="hidden"
        pointerEvents="none"
        transition="opacity 0.15s ease, visibility 0.15s ease"
        css={{
          "[role='group']:hover > &": {
            opacity: 1,
            visibility: "visible",
          },
          "[role='group'][data-menu-open='true'] > &": {
            opacity: 0,
            visibility: "hidden",
          },
        }}
      >
        <Stack gap="2px">
          <Text
            fontSize="14px"
            fontWeight={600}
            color="ink.900"
            whiteSpace="nowrap"
          >
            {profile.name}
          </Text>
          <Text
            fontSize="12px"
            fontWeight={400}
            color="ink.400"
            whiteSpace="nowrap"
          >
            {profile.email}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
