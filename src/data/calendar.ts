export type CalendarCell = {
  day: number;
  monthLabel?: string;
  isOutside?: boolean;
  isSelected?: boolean;
};

export const calendarMonthLabel = "November 2023";
export const weekdayLabels = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

export const novemberGrid: CalendarCell[] = [
  { day: 29, isOutside: true },
  { day: 30, isOutside: true },
  { day: 31, isOutside: true },
  { day: 1, monthLabel: "Nov" },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15 },
  { day: 16, isSelected: true },
  { day: 17 },
  { day: 18 },
  { day: 19 },
  { day: 20 },
  { day: 21 },
  { day: 22 },
  { day: 23 },
  { day: 24 },
  { day: 25 },
  { day: 26 },
  { day: 27 },
  { day: 28 },
  { day: 29 },
  { day: 30 },
  { day: 1, monthLabel: "DEC", isOutside: true },
  { day: 2, isOutside: true },
  { day: 3, isOutside: true },
  { day: 4, isOutside: true },
  { day: 5, isOutside: true },
  { day: 6, isOutside: true },
  { day: 7, isOutside: true },
  { day: 8, isOutside: true },
  { day: 9, isOutside: true },
  { day: 10, isOutside: true },
  { day: 11, isOutside: true },
  { day: 12, isOutside: true },
  { day: 13, isOutside: true },
  { day: 14, isOutside: true },
  { day: 15, isOutside: true },
  { day: 16, isOutside: true },
];
