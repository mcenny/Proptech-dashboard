import { Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { ArrowRight2 } from "iconsax-react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

type OverviewCardProps = {
  icon: ReactNode;
  title: string;
  stats: { label: string; value: string }[];
  viewAllHref?: string;
};

export function OverviewCard({
  icon,
  title,
  stats,
  viewAllHref = "#",
}: OverviewCardProps) {
  return (
    <Card h="152px" position="relative">
      <Flex
        h="50px"
        bg="#F9FAFB"
        borderBottomWidth="0.5px"
        borderBottomColor="#E4E4E4"
        px="16px"
        align="center"
        justify="space-between"
      >
        <HStack gap="10px">
          {icon}
          <Text fontSize="14px" fontWeight={500} color="#3d3d3d">
            {title}
          </Text>
        </HStack>
        <a
          href={viewAllHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "2px",
            color: "#4545FE",
          }}
        >
          <Text fontSize="12px" fontWeight={500}>
            View all
          </Text>
          <ArrowRight2 size={16} color="currentColor" variant="Linear" />
        </a>
      </Flex>

      <Flex h="102px" justify="space-between" align="center" px="16px">
        {stats.map((stat) => (
          <Stack key={stat.label} gap="6px" flex="1" minW={0}>
            <Text fontSize="14px" fontWeight={500} color="#606060">
              {stat.label}
            </Text>
            <Text
              fontSize="24px"
              fontWeight={600}
              color="#191919"
              lineHeight="1"
            >
              {stat.value}
            </Text>
          </Stack>
        ))}
      </Flex>
    </Card>
  );
}
