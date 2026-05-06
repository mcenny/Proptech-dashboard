import { Box } from "@chakra-ui/react";
import { Messages3 } from "iconsax-react";

export function Chat() {
  return (
    <Box
      as="button"
      position="fixed"
      bottom="24px"
      right="24px"
      boxSize="58px"
      borderRadius="full"
      bg="#18181B"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)"
      cursor="pointer"
      transition="transform 0.15s ease, background-color 0.15s ease"
      zIndex={50}
      _hover={{ transform: "translateY(-2px)", bg: "#000" }}
      aria-label="Open chat"
    >
      <Messages3 size={24} variant="Bold" color="white" />
    </Box>
  );
}
