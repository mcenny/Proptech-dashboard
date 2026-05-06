import { Box } from "@chakra-ui/react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

type Props = {
  direction: "left" | "right";
  onClick?: () => void;
  ariaLabel?: string;
};

export function ChartNavArrow({ direction, onClick, ariaLabel }: Props) {
  const Icon = direction === "left" ? ArrowLeft2 : ArrowRight2;
  return (
    <Box
      as="button"
      aria-label={ariaLabel ?? `Scroll ${direction}`}
      onClick={onClick}
      boxSize="18px"
      borderRadius="full"
      bg="#e4e4e4"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="#606060"
      cursor="pointer"
      transition="background-color 0.15s ease, color 0.15s ease"
      _hover={{ bg: "#f5f5f5", color: "#191919" }}
      flexShrink={0}
    >
      <Icon size={14} color="currentColor" variant="Bold" />
    </Box>
  );
}
