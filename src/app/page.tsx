import { Box, Grid, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Home, Profile } from "iconsax-react";

import { TopBar } from "@/components/layout/TopBar";
import { TabNav } from "@/components/layout/TabNav";
import { PAGE_MAX_W, PAGE_PX } from "@/components/layout/page-inset";
import { FeaturedListingCard } from "@/components/dashboard/FeaturedListingCard";
import { OverviewCard } from "@/components/dashboard/OverviewCard";
import { SalesOverviewCard } from "@/components/dashboard/SalesOverviewCard";
import { featured, listingsOverview, usersOverview } from "@/data/dashboard";
import { Chat } from "@/components/dashboard/Chat";

const ICON_PROPS = { size: 24, strokeWidth: 1.6, color: "#4545FE" } as const;

export default function DashboardPage() {
  return (
    <Box bg="surface.page" minH="100vh">
      <Box position="sticky" top={0} zIndex={10}>
        <TopBar />
        <TabNav />
      </Box>

      <Box
        maxW={PAGE_MAX_W}
        mx="auto"
        px={PAGE_PX}
        pt={{ base: "16px", md: "20px" }}
        pb={{ base: "40px", md: "60px" }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight={600}
          color="text.heading"
          lineHeight="1.2"
        >
          Welcome, Ahmed
        </Heading>

        <Grid
          mt={{ base: "16px", md: "20px" }}
          gap={{ base: "16px", md: "20px" }}
          templateColumns={{
            base: "1fr",
            xl: "minmax(0, 856px) minmax(0, 1fr)",
          }}
        >
          <SalesOverviewCard />
          <Stack gap={{ base: "16px", md: "20px" }}>
            <OverviewCard
              title={listingsOverview.title}
              stats={listingsOverview.stats}
              icon={<Home {...ICON_PROPS} />}
              viewAllHref="#"
            />
            <OverviewCard
              title={usersOverview.title}
              stats={usersOverview.stats}
              icon={<Profile {...ICON_PROPS} />}
              viewAllHref="#"
            />
          </Stack>
        </Grid>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "16px", md: "15px" }}
          mt={{ base: "16px", md: "20px" }}
        >
          {featured.map((listing) => (
            <FeaturedListingCard key={listing.tag} listing={listing} />
          ))}
        </SimpleGrid>
      </Box>

      <Chat />
    </Box>
  );
}
