export type SalesPoint = {
  month: string;
  blue: number;
  green: number;
  red: number;
};

export const salesSeries: SalesPoint[] = [
  { month: "Jan", blue: 33, green: 26, red: 10 },
  { month: "Feb", blue: 6, green: 26, red: 10 },
  { month: "Mar", blue: 14, green: 7, red: 4 },
  { month: "Apr", blue: 14, green: 24, red: 10 },
  { month: "May", blue: 10, green: 3, red: 8 },
  { month: "Jun", blue: 34, green: 45, red: 8 },
  { month: "Jul", blue: 23, green: 35, red: 18 },
  { month: "Aug", blue: 23, green: 7, red: 18 },
  { month: "Sep", blue: 35, green: 32, red: 7 },
];

export type Metric = {
  label: string;
  value: string;
  delta: string;
  direction: "up" | "down";
  accent: string;
};

export const metrics: Metric[] = [
  {
    label: "Total Inflow",
    value: "₦120,000,000.00",
    delta: "2.5%",
    direction: "up",
    accent: "series.blue",
  },
  {
    label: "MRR",
    value: "₦50,000,000.00",
    delta: "2.5%",
    direction: "up",
    accent: "series.green",
  },
  {
    label: "Commission Revenue",
    value: "₦200,000,000.00",
    delta: "0.5%",
    direction: "down",
    accent: "series.teal",
  },
  {
    label: "GMV",
    value: "₦100,000,000.00",
    delta: "0.5%",
    direction: "down",
    accent: "series.red",
  },
];

export type OverviewStats = {
  title: string;
  stats: { label: string; value: string }[];
};

export const listingsOverview: OverviewStats = {
  title: "Listings Overview",
  stats: [
    { label: "Total", value: "1.8k" },
    { label: "Active", value: "80" },
    { label: "Archived", value: "1k" },
  ],
};

export const usersOverview: OverviewStats = {
  title: "Users Overview",
  stats: [
    { label: "Total", value: "20.7k" },
    { label: "Riders", value: "8.5k" },
    { label: "Subscribers", value: "7.5k" },
  ],
};

export type FeaturedListing = {
  tag: string;
  title: string;
  image: string;
  imagesCount: number;
};

export const featured: FeaturedListing[] = [
  {
    tag: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    image: "/images/building-1.png",
    imagesCount: 2,
  },
  {
    tag: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    image: "/images/building-2.png",
    imagesCount: 5,
  },
  {
    tag: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    image: "/images/building-3.png",
    imagesCount: 5,
  },
];
