import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { Card } from "@/components/ui/Card";
import { metrics } from "@/data/dashboard";
import { ChartNavArrow } from "./ChartNavArrow";
import { PeriodToggle } from "./PeriodToggle";
import { SalesBarChart } from "./SalesBarChart";
import { ViewTransactionsButton } from "./ViewTransactionsButton";
import { MetricTile } from "./MetricTile";

export function SalesOverviewCard() {
  return (
    <Card
      px={{ base: "16px", md: "22px" }}
      py={0}
      pt={{ base: "16px", md: "16px" }}
      pb={{ base: "16px", md: "16px" }}
      position="relative"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "stretch", md: "flex-start" }}
        gap={{ base: "16px", md: "0" }}
        mb={{ base: "20px", md: "28px" }}
      >
        <Stack gap="12px">
          <Text
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight={600}
            color="#191919"
            lineHeight="1"
          >
            Sales Overview
          </Text>
          <Text fontSize="12px" color="#606060" lineHeight="1">
            Showing overview Jan 2022 - Sep 2022
          </Text>
        </Stack>
        <Stack
          gap="17px"
          align={{ base: "flex-start", md: "flex-end" }}
          direction={{ base: "row", md: "column" }}
          flexWrap="wrap"
          mt={{ base: 0, md: "4px" }}
        >
          <ViewTransactionsButton />
          <PeriodToggle />
        </Stack>
      </Flex>

      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top="128px"
        left="0"
        right="0"
        h="1px"
        bg="#e4e4e4"
      />

      <Grid
        templateColumns={{
          base: "1fr",
          xl: "1fr 394px",
        }}
        columnGap="20px"
        rowGap={{ base: "20px", xl: "0" }}
      >
        <Box position="relative" h={{ base: "200px", md: "150px" }} minW={0}>
          <SalesBarChart />
          <Box
            position="absolute"
            left={{ base: "-8px", md: "-14px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
          >
            <ChartNavArrow direction="left" ariaLabel="Previous period" />
          </Box>
          <Box
            position="absolute"
            right="-5px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
          >
            <ChartNavArrow direction="right" ariaLabel="Next period" />
          </Box>
        </Box>

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            xl: "repeat(2, 189px)",
          }}
          templateRows={{
            base: "repeat(4, 73px)",
            sm: "repeat(2, 73px)",
            xl: "repeat(2, 73px)",
          }}
          rowGap="14px"
          columnGap="16px"
          alignContent="start"
        >
          {metrics.map((m) => (
            <MetricTile key={m.label} metric={m} />
          ))}
        </Grid>
      </Grid>
    </Card>
  );
}
