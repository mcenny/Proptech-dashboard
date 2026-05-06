import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ArrowCircleDown2, ArrowCircleUp2 } from "iconsax-react";
import type { Metric } from "@/data/dashboard";

const ACCENT_HEX: Record<string, string> = {
  "series.blue": "#4545FE",
  "series.green": "#12B76A",
  "series.teal": "#14B8A6",
  "series.red": "#F04438",
};

type Props = { metric: Metric };

export function MetricTile({ metric }: Props) {
  const isUp = metric.direction === "up";
  const deltaToken = isUp ? "series.green" : metric.accent;
  const deltaHex = ACCENT_HEX[deltaToken] ?? "#12B76A";
  const TrendIcon = isUp ? ArrowCircleUp2 : ArrowCircleDown2;

  return (
    <Box
      borderWidth="1px"
      borderColor="#e4e4e4"
      borderRadius="12px"
      bg="white"
      px="15px"
      py="13px"
      h="73px"
      w="full"
      display="flex"
      alignItems="flex-start"
    >
      <VStack align="stretch" gap="8px" w="full" minW={0}>
        <Text
          fontSize="19px"
          fontWeight={600}
          color={ACCENT_HEX[metric.accent] ?? metric.accent}
          lineHeight="1.3"
          whiteSpace="nowrap"
        >
          {metric.value}
        </Text>
        <HStack gap="7px" align="center" minW={0}>
          <Text
            fontSize="10px"
            fontWeight={500}
            color="#3d3d3d"
            lineHeight="1"
            truncate
          >
            {metric.label}
          </Text>
          <HStack gap="4px" align="center" flexShrink={0}>
            <TrendIcon size={14} color={deltaHex} variant="Bold" />
            <Text
              fontSize="10px"
              fontWeight={400}
              color={deltaHex}
              lineHeight="1"
            >
              {metric.delta}
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}
