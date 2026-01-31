"use client";

import Link from "next/link";
import {
  Send,
  ArrowDownToLine,
  Plus,
  FileText,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/utils/commonUtils";

export interface QuickActionItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href?: string;
  onClick?: () => void;
  borderColor: string;
  bgColor: string;
  iconColor: string;
}

const defaultActions: QuickActionItem[] = [
  {
    icon: Send,
    title: "Send Payment",
    subtitle: "Transfer funds instantly",
    href: "/transactions",
    borderColor: "border-[#3B82F6] dark:border-[#2563EB]",
    bgColor: "bg-[#EFF6FF] dark:bg-[#1E3A5F]",
    iconColor: "text-[#2563EB] dark:text-[#60A5FA]",
  },
  {
    icon: ArrowDownToLine,
    title: "Request Payment",
    subtitle: "Create payment request",
    href: "/transactions",
    borderColor: "border-[#22C55E] dark:border-[#16A34A]",
    bgColor: "bg-[#F0FDF4] dark:bg-[#14532D]",
    iconColor: "text-[#16A34A] dark:text-[#4ADE80]",
  },
  {
    icon: Plus,
    title: "New Contract",
    subtitle: "Setup escrow contract",
    href: "#",
    borderColor: "border-[#E5E5E5] dark:border-[#2E2E2E]",
    bgColor: "bg-[#F5F5F5] dark:bg-[#1A1A1A]",
    iconColor: "text-[#7C3AED] dark:text-[#A78BFA]",
  },
  {
    icon: FileText,
    title: "Create Invoice",
    subtitle: "Generate invoice",
    href: "#",
    borderColor: "border-[#E5E5E5] dark:border-[#2E2E2E]",
    bgColor: "bg-[#F5F5F5] dark:bg-[#1A1A1A]",
    iconColor: "text-[#EA580C] dark:text-[#FB923C]",
  },
  {
    icon: Users,
    title: "Add Recipient",
    subtitle: "Save new contact",
    href: "#",
    borderColor: "border-[#E5E5E5] dark:border-[#2E2E2E]",
    bgColor: "bg-[#F5F5F5] dark:bg-[#1A1A1A]",
    iconColor: "text-[#EC4899] dark:text-[#F472B6]",
  },
  {
    icon: BarChart3,
    title: "View Reports",
    subtitle: "Analytics & insights",
    href: "/analytics-view",
    borderColor: "border-[#E5E5E5] dark:border-[#2E2E2E]",
    bgColor: "bg-[#F5F5F5] dark:bg-[#1A1A1A]",
    iconColor: "text-[#0D9488] dark:text-[#2DD4BF]",
  },
];

interface QuickActionsProps {
  actions?: QuickActionItem[];
  customizeHref?: string;
  onCustomize?: () => void;
}

export function QuickActions({
  actions = defaultActions,
  customizeHref,
  onCustomize,
}: QuickActionsProps) {
  return (
    <section
      className={cn(
        "rounded-xl border p-4 md:p-6",
        "bg-white dark:bg-[#0D0D0D80] border-[#E5E5E5] dark:border-[#2D2D2D]"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#09090B] dark:text-[#E5E5E5]">
          Quick Actions
        </h2>
        {customizeHref ? (
          <Link
            href={customizeHref}
            className="text-sm font-medium text-[#52525B] dark:text-[#A3A3A3] hover:text-[#09090B] dark:hover:text-[#E5E5E5] transition-colors"
          >
            Customize
          </Link>
        ) : (
          <button
            type="button"
            onClick={onCustomize}
            className="text-sm font-medium text-[#52525B] dark:text-[#A3A3A3] hover:text-[#09090B] dark:hover:text-[#E5E5E5] transition-colors"
          >
            Customize
          </button>
        )}
      </div>

      {/* Action cards - wrap on small, horizontal scroll on medium if needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 overflow-x-auto pb-2 -mx-1 px-1 md:overflow-visible md:mx-0 md:px-0">
        {actions.map((action, index) => {
          const Icon = action.icon;
          const content = (
            <>
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full shrink-0",
                  action.bgColor,
                  action.iconColor
                )}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[#09090B] dark:text-[#E5E5E5] text-sm truncate">
                  {action.title}
                </p>
                <p className="text-xs text-[#52525B] dark:text-[#A3A3A3] truncate mt-0.5">
                  {action.subtitle}
                </p>
              </div>
            </>
          );
          const cardClass = cn(
            "flex items-center gap-3 rounded-xl border p-4 min-w-[200px] md:min-w-0",
            "bg-white dark:bg-[#121212]",
            action.borderColor,
            "hover:opacity-90 transition-opacity cursor-pointer touch-manipulation"
          );
          if (action.href) {
            return (
              <Link key={index} href={action.href} className={cardClass}>
                {content}
              </Link>
            );
          }
          return (
            <button
              key={index}
              type="button"
              onClick={action.onClick}
              className={cn(cardClass, "text-left w-full")}
            >
              {content}
            </button>
          );
        })}
      </div>
    </section>
  );
}
