import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Asset Valuation",
    value: "₹53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Monthly Investors",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "New Investments",
    value: "17",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than last year",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Product Sales",
    value: "₹10,249",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last week",
    },
  },
];

export default statisticsCardsData;
