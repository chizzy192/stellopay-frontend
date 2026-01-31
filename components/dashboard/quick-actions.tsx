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
        "rounded-2xl border p-6 transition-all",
        "bg-white dark:bg-[#111111] border-zinc-200 dark:border-zinc-800 shadow-sm"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Quick Actions
        </h2>
        <div className="flex items-center gap-4">
          {customizeHref ? (
            <Link
              href={customizeHref}
              className="text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Customize
            </Link>
          ) : (
            <button
              type="button"
              onClick={onCustomize}
              className="text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Customize
            </button>
          )}
        </div>
      </div>

      {/* Action cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {actions.map((action, index) => {
          const Icon = action.icon;
          const content = (
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-transform group-hover:scale-110",
                  action.bgColor,
                  action.iconColor
                )}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-zinc-900 dark:text-white text-sm truncate">
                  {action.title}
                </p>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                  {action.subtitle}
                </p>
              </div>
            </div>
          );
          const cardClass = cn(
            "group flex flex-col rounded-2xl border p-5 transition-all cursor-pointer",
            "bg-zinc-50/50 dark:bg-zinc-900/30 border-zinc-100 dark:border-zinc-800/50",
            "hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:shadow-md active:scale-[0.98]"
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
