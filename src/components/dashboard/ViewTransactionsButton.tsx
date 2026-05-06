import { Box } from "@chakra-ui/react";

export function ViewTransactionsButton() {
  return (
    <Box
      as="button"
      h="46px"
      w="177px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="72px"
      borderWidth="1px"
      borderColor="#d6d6d6"
      bg="#ffffff"
      color="#191919"
      fontSize="12px"
      fontWeight={500}
      cursor="pointer"
      whiteSpace="nowrap"
      transition="background-color 0.15s ease"
      _hover={{ bg: "#fcfcfc" }}
    >
      View Transactions
    </Box>
  );
}
