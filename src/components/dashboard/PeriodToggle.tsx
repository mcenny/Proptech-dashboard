"use client";

import { HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

type Period = "1W" | "1M" | "1Y";

const OPTIONS: { id: Period; label: string }[] = [
  { id: "1W", label: "1 Week" },
  { id: "1M", label: "1 Month" },
  { id: "1Y", label: "1 Year" },
];

export function PeriodToggle({ defaultValue = "1Y" as Period }) {
  const [value, setValue] = useState<Period>(defaultValue);
  return (
    <HStack gap="12px">
      {OPTIONS.map((opt) => {
        const active = value === opt.id;
        return (
          <Text
            key={opt.id}
            as="button"
            onClick={() => setValue(opt.id)}
            w="80px"
            h="33px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            bg={active ? "#f5f5f5" : "#ffffff"}
            color="#3d3d3d"
            fontSize="14px"
            fontWeight={active ? 600 : 400}
            cursor="pointer"
            transition="background-color 0.15s ease"
            _hover={{ bg: active ? "#f5f5f5" : "#fcfcfc" }}
          >
            {opt.label}
          </Text>
        );
      })}
    </HStack>
  );
}
