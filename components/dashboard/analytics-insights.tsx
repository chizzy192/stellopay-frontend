"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendUp,
  DollarSign,
  Activity,
  Wallet,
  ChevronDown,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/commonUtils";

export interface KPICardItem {
  icon: LucideIcon;
  value: string;
  label: string;
  change: string;
  iconColor: string;
  iconBg: string;
}

const timeRangeOptions = ["Last 7 days", "Last 30 days", "Last 90 days", "This year"];

const defaultKPIs: KPICardItem[] = [
  {
    icon: TrendUp,
    value: "$847.5K",
    label: "Total Volume",
    change: "+12.5%",
    iconColor: "text-[#2563EB] dark:text-[#60A5FA]",
    iconBg: "bg-[#EFF6FF] dark:bg-[#1E3A5F]",
  },
  {
    icon: DollarSign,
    value: "$3,245",
    label: "Avg. Transaction",
    change: "+8.2%",
    iconColor: "text-[#16A34A] dark:text-[#4ADE80]",
    iconBg: "bg-[#F0FDF4] dark:bg-[#14532D]",
  },
  {
    icon: Activity,
    value: "99.2%",
    label: "Success Rate",
    change: "+0.3%",
    iconColor: "text-[#7C3AED] dark:text-[#A78BFA]",
    iconBg: "bg-[#F5F3FF] dark:bg-[#3B2864]",
  },
  {
    icon: Wallet,
    value: "156",
    label: "Active Wallets",
    change: "+24",
    iconColor: "text-[#EA580C] dark:text-[#FB923C]",
    iconBg: "bg-[#FFF7ED] dark:bg-[#431407]",
  },
];

interface AnalyticsInsightsProps {
  kpis?: KPICardItem[];
  viewAllHref?: string;
}

export function AnalyticsInsights({
  kpis = defaultKPIs,
  viewAllHref = "/analytics-view",
}: AnalyticsInsightsProps) {
  const [timeRange, setTimeRange] = useState(timeRangeOptions[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section
      className={cn(
        "rounded-xl border p-4 md:p-6",
        "bg-white dark:bg-[#0D0D0D80] border-[#E5E5E5] dark:border-[#2D2D2D]"
      )}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#09090B] dark:text-[#E5E5E5]">
            Analytics & Insights
          </h2>
          <p className="text-sm text-[#52525B] dark:text-[#A3A3A3] mt-0.5">
            Track your payment activity and performance
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border",
                "bg-white dark:bg-[#121212] border-[#E5E5E5] dark:border-[#2E2E2E]",
                "text-[#09090B] dark:text-[#E5E5E5] hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A]"
              )}
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              aria-label="Select time range"
            >
              {timeRange}
              <ChevronDown className="h-4 w-4 shrink-0" />
            </button>
            {dropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  aria-hidden="true"
                  onClick={() => setDropdownOpen(false)}
                />
                <ul
                  role="listbox"
                  className={cn(
                    "absolute top-full left-0 mt-1 min-w-[140px] py-1 rounded-lg border shadow-lg z-20",
                    "bg-white dark:bg-[#121212] border-[#E5E5E5] dark:border-[#2E2E2E]"
                  )}
                >
                  {timeRangeOptions.map((option) => (
                    <li
                      key={option}
                      role="option"
                      aria-selected={timeRange === option}
                      onClick={() => {
                        setTimeRange(option);
                        setDropdownOpen(false);
                      }}
                      className={cn(
                        "px-3 py-2 text-sm cursor-pointer transition-colors",
                        "text-[#09090B] dark:text-[#E5E5E5]",
                        "hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A]",
                        timeRange === option && "bg-[#F5F5F5] dark:bg-[#1A1A1A]"
                      )}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-[#E5E5E5] dark:border-[#2D2D2D] text-[#09090B] dark:text-[#E5E5E5] hover:bg-[#F5F5F5] dark:hover:bg-[#2D2D2D]"
            asChild
          >
            <Link href={viewAllHref} className="flex items-center gap-1.5">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={cn(
                "rounded-xl border p-4 flex flex-col",
                "bg-white dark:bg-[#121212] border-[#E5E5E5] dark:border-[#2E2E2E]"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full shrink-0",
                    item.iconBg,
                    item.iconColor
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <span className="text-sm font-medium text-[#16A34A] dark:text-[#4ADE80] shrink-0">
                  {item.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-[#09090B] dark:text-[#E5E5E5] mt-3">
                {item.value}
              </p>
              <p className="text-sm text-[#52525B] dark:text-[#A3A3A3] mt-0.5">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
