import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import {
  Briefcase,
  TableDocument,
  Home,
  type Icon as IconsaxIcon,
  Profile,
  Scroll,
  TaskSquare,
} from "iconsax-react";
import { PAGE_MAX_W, PAGE_PX } from "./page-inset";

type Tab = {
  id: string;
  label: string;
  Icon: IconsaxIcon;
};

const TABS: Tab[] = [
  { id: "dashboard", label: "Dashboard", Icon: Home },
  { id: "listings", label: "Listings", Icon: Briefcase },
  { id: "users", label: "Users", Icon: Profile },
  { id: "request", label: "Request", Icon: TableDocument },
  { id: "applications", label: "Applications", Icon: Scroll }, // couldn't find the exact icon from the figma design and I didn't want to use SVG icons.
  { id: "tasks", label: "Tasks", Icon: TaskSquare },
];

const ACTIVE = "dashboard";

export function TabNav() {
  return (
    <Box
      bg="white"
      h="67px"
      borderBottomWidth="1px"
      borderBottomColor="#F4F4F5"
    >
      <Flex
        maxW={PAGE_MAX_W}
        mx="auto"
        px={PAGE_PX}
        h="full"
        align="center"
        gap={{ base: "8px", lg: "0" }}
        justify={{ base: "flex-start", lg: "space-between" }}
        overflowX={{ base: "auto", lg: "visible" }}
        css={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {TABS.map(({ id, label, Icon }) => {
          const active = id === ACTIVE;
          return (
            <HStack
              key={id}
              as="button"
              flexShrink={0}
              w="auto"
              minW="auto"
              h="38px"
              px="16px"
              borderRadius="chip"
              gap="8px"
              justify="center"
              align="center"
              bg={active ? "#E6F0ED" : "transparent"}
              color={active ? "#105B48" : "#606060"}
              cursor="pointer"
              transition="background-color 0.15s ease"
              _hover={{ bg: active ? "#E6F0ED" : "#F5F5F5" }}
            >
              <Icon
                size={20}
                color="currentColor"
                variant={active ? "Bold" : "Linear"}
              />
              <Text
                fontSize="14px"
                fontWeight={active ? 600 : 400}
                whiteSpace="nowrap"
              >
                {label}
              </Text>
            </HStack>
          );
        })}
      </Flex>
    </Box>
  );
}
