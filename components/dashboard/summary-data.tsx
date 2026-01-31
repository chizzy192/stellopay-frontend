import { ReactNode } from 'react';

export interface ChartData {
  value: number;
}

export interface AccountSummaryCardProps {
  title: string;
  subtitle: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: ReactNode;
  iconBgColor: string;
  chartColor: string;
  chartData: ChartData[];
}

export const summaryCardsData: AccountSummaryCardProps[] = [
  {
    title: "Total Balance",
    subtitle: "Across all chains",
    value: "$847,500.00",
    change: "+12.5% vs last month",
    isPositive: true,
    iconBgColor: "bg-blue-500/10",
    chartColor: "bg-blue-500",
    icon: null, // Will be replaced with actual icon component
    chartData: [
      { value: 40 }, { value: 70 }, { value: 45 }, { value: 90 }, { value: 65 },
      { value: 50 }, { value: 80 }, { value: 35 }, { value: 100 }, { value: 75 }
    ]
  },
  {
    title: "Paid This Month",
    subtitle: "24 transactions",
    value: "$125,340.00",
    change: "+8.2% vs last month",
    isPositive: true,
    iconBgColor: "bg-emerald-500/10",
    chartColor: "bg-emerald-500",
    icon: null,
    chartData: [
      { value: 30 }, { value: 50 }, { value: 40 }, { value: 70 }, { value: 55 },
      { value: 45 }, { value: 85 }, { value: 35 }, { value: 60 }, { value: 75 }
    ]
  },
  {
    title: "To Be Paid",
    subtitle: "12 pending contracts",
    value: "$54,200.00",
    change: "-3.1% vs last month",
    isPositive: false,
    iconBgColor: "bg-amber-500/10",
    chartColor: "bg-amber-500",
    icon: null,
    chartData: [
      { value: 60 }, { value: 40 }, { value: 80 }, { value: 50 }, { value: 90 },
      { value: 45 }, { value: 70 }, { value: 35 }, { value: 85 }, { value: 65 }
    ]
  }
];
