import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

type CardProps = BoxProps & {
  children: ReactNode;
};

export function Card({ children, ...rest }: CardProps) {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="border.card"
      borderRadius="card"
      overflow="hidden"
      {...rest}
    >
      {children}
    </Box>
  );
}
