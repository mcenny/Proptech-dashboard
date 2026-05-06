"use client";

import { Box, Portal, Tooltip } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function NavIconButton({ icon, label, onClick, ariaLabel }: Props) {
  return (
    <Tooltip.Root
      openDelay={150}
      closeDelay={100}
      positioning={{ placement: "bottom", offset: { mainAxis: 12 } }}
    >
      <Tooltip.Trigger asChild>
        <Box
          as="button"
          aria-label={ariaLabel ?? label}
          onClick={onClick}
          h="36px"
          minW="36px"
          px="4px"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          bg="transparent"
          color="white"
          cursor="pointer"
          transition="background-color 0.15s ease"
          _hover={{ bg: "whiteAlpha.150" }}
          _focusVisible={{
            outline: "2px solid",
            outlineColor: "whiteAlpha.700",
            outlineOffset: "2px",
          }}
        >
          {icon}
        </Box>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content
            bg="#18181B"
            color="white"
            px="12px"
            py="8px"
            borderRadius="8px"
            fontSize="10px"
            fontWeight={400}
            lineHeight="1.5"
            letterSpacing="0.3px"
            boxShadow="0 20px 20px -10px rgba(0,0,0,0.04), 0 40px 50px -10px rgba(0,0,0,0.10)"
          >
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            {label}
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
