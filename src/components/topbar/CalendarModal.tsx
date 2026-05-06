"use client";

import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { ArrowLeft, ArrowLeft2, ArrowRight2, CloseCircle } from "iconsax-react";
import { useEffect, useState } from "react";
import { weekdayLabels } from "@/data/calendar";
import { PAGE_PX } from "../layout/page-inset";

type Props = { open: boolean; onClose: () => void };

const PANEL_BG = "#0D0D0D";
const HEADER_BG = "#171717";
const CELL_BORDER = "#242424";
const TEXT_DIM = "#969696";
const TEXT_OUTSIDE = "rgba(187, 187, 187, 0.6)";
const PILL_BLUE = "#2525E6";

const monthNamesShort = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const monthNamesLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function CalendarModal({ open, onClose }: Props) {
  const [viewDate, setViewDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handlePrevMonth = () =>
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const handleNextMonth = () =>
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const generateGrid = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const prevMonthDays = new Date(year, month, 0).getDate();

    const grid = [];

    // Previous month trailing days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      grid.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isOutside: true,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      grid.push({
        date: new Date(year, month, i),
        isOutside: false,
      });
    }

    // Next month leading days (to complete 42 cells)
    const remainingCells = 42 - grid.length;
    for (let i = 1; i <= remainingCells; i++) {
      grid.push({
        date: new Date(year, month + 1, i),
        isOutside: true,
      });
    }

    return grid;
  };

  const grid = generateGrid();
  const calendarMonthLabel = `${monthNamesLong[viewDate.getMonth()]} ${viewDate.getFullYear()}`;

  return (
    <>
      <Box position="fixed" inset="0" zIndex={40} onClick={onClose} />

      <Box
        position={{ base: "fixed", md: "absolute" }}
        top={{ base: "50%", md: "94px" }}
        left={{ base: "50%", md: "auto" }}
        right={{ base: "auto", md: PAGE_PX }}
        transform={{ base: "translate(-50%, -50%)", md: "none" }}
        w="400px"
        maxW="calc(100vw - 24px)"
        maxH="calc(100vh - 100px)"
        bg={PANEL_BG}
        borderRadius="6px"
        boxShadow="0 24px 60px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.30)"
        zIndex={50}
        overflow="hidden"
        display="flex"
        flexDirection="column"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Calendar"
      >


        <Flex
          h="50px"
          flexShrink={0}
          bg={HEADER_BG}
          align="center"
          justify="space-between"
          px="22px"
        >
          <HStack gap="8px">
            <Box
              as="button"
              boxSize="24px"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              color="white"
              onClick={onClose}
              aria-label="Back"
            >
              <ArrowLeft size={20} variant="Linear" color="white" />
            </Box>
            <Text fontSize="16px" fontWeight={600} color="white">
              Calendar
            </Text>
          </HStack>
          <Box
            as="button"
            boxSize="24px"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            color="white"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseCircle size={20} variant="Linear" color="white" />
          </Box>
        </Flex>

        <Box
          flex="1"
          overflowY="auto"
          css={{
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-thumb": {
              background: "#2A2A2A",
              borderRadius: "4px",
            },
          }}
        >
          <Flex justify="center" align="center" py="22px" gap="29px">
            <Box
              as="button"
              boxSize="24px"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              color="white"
              aria-label="Previous month"
              onClick={handlePrevMonth}
            >
              <ArrowLeft2 size={18} variant="Bold" color="white" />
            </Box>
            <Text fontSize="16px" fontWeight={600} color="white">
              {calendarMonthLabel}
            </Text>
            <Box
              as="button"
              boxSize="24px"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              color="white"
              aria-label="Next month"
              onClick={handleNextMonth}
            >
              <ArrowRight2 size={18} variant="Bold" color="white" />
            </Box>
          </Flex>

          <Box px="25px" pb="24px">
            <Box borderWidth="1px" borderColor={CELL_BORDER} bg={CELL_BORDER}>
              <Grid templateColumns="repeat(7, 1fr)" gap="1px" mb="1px">
                {weekdayLabels.map((label) => (
                  <Box
                    key={label}
                    bg={PANEL_BG}
                    h="22px"
                    px="6px"
                    py="6px"
                    display="flex"
                    alignItems="flex-start"
                  >
                    <Text
                      fontSize="9px"
                      fontWeight={500}
                      color={TEXT_DIM}
                      letterSpacing="0.04em"
                    >
                      {label}
                    </Text>
                  </Box>
                ))}
              </Grid>

              <Grid templateColumns="repeat(7, 1fr)" gap="1px">
                {grid.map((cell, idx) => {
                  const day = cell.date.getDate();
                  const isFirstDayOfMonth = day === 1;
                  const monthLabel = isFirstDayOfMonth
                    ? monthNamesShort[cell.date.getMonth()]
                    : undefined;

                  const dayLabel = monthLabel
                    ? `${monthLabel} ${day}`
                    : String(day);

                  const isSelected =
                    selectedDate.getFullYear() === cell.date.getFullYear() &&
                    selectedDate.getMonth() === cell.date.getMonth() &&
                    selectedDate.getDate() === cell.date.getDate();

                  return (
                    <Box
                      key={idx}
                      bg={PANEL_BG}
                      h="80px"
                      px="6px"
                      pt="6px"
                      cursor="pointer"
                      onClick={() => handleSelectDate(cell.date)}
                      transition="background-color 0.15s"
                      _hover={{ bg: CELL_BORDER }}
                    >
                      {isSelected ? (
                        <Box
                          bg={PILL_BLUE}
                          display="inline-flex"
                          alignItems="center"
                          justifyContent="center"
                          px="8px"
                          py="2px"
                          borderRadius="200px"
                          minW="24px"
                        >
                          <Text fontSize="10px" fontWeight={500} color="white">
                            {dayLabel}
                          </Text>
                        </Box>
                      ) : (
                        <Text
                          fontSize="10px"
                          fontWeight={500}
                          color={cell.isOutside ? TEXT_OUTSIDE : TEXT_DIM}
                        >
                          {dayLabel}
                        </Text>
                      )}
                    </Box>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
