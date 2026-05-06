import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { FeaturedListing } from "@/data/dashboard";

type Props = {
  listing: FeaturedListing;
};

export function FeaturedListingCard({ listing }: Props) {
  return (
    <Box
      position="relative"
      h="286px"
      borderRadius="tile"
      overflow="hidden"
      role="article"
    >
      <Image
        src={listing.image}
        alt={listing.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover" }}
      />

      <Box
        position="absolute"
        inset="0"
        bgGradient="linear-gradient(182.365deg, rgba(0,0,0,0.05) 41%, rgba(0,0,0,0.6) 100%)"
        pointerEvents="none"
      />

      <Stack
        position="absolute"
        left="16px"
        bottom="25px"
        gap="2px"
        color="white"
      >
        <Text
          fontSize="14px"
          fontWeight={500}
          textTransform="uppercase"
          letterSpacing="0.04em"
        >
          {listing.tag}
        </Text>
        <Text fontSize="18px" fontWeight={600}>
          {listing.title}
        </Text>
      </Stack>

      <HStack
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        gap="7px"
      >
        {Array.from({ length: listing.imagesCount }).map((_, i) => (
          <Box
            key={i}
            boxSize="6px"
            borderRadius="full"
            bg={i === 0 ? "white" : "whiteAlpha.500"}
          />
        ))}
      </HStack>
    </Box>
  );
}
