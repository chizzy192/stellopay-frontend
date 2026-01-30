import { FC } from "react";
import type { StatCardItem } from "@/types/landing";

export interface StatsCardsProps {
  stats: StatCardItem[];
}

export const StatsCards: FC<StatsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
      {stats.map((item, index) => (
        <div
          key={index}
          className="
            bg-white dark:bg-[#18181B]
            rounded-2xl
            border border-[#E5E5E5] dark:border-[#333333]
            shadow-sm dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]
            px-6 py-8 md:px-8 md:py-10
            flex flex-col items-center justify-center
            text-center
          "
        >
          <span
            className="
              text-2xl sm:text-3xl md:text-4xl font-bold
              text-[#6B47ED] dark:text-[#A78BFA]
              tracking-tight
              block
            "
          >
            {item.value}
          </span>
          <span
            className="
              mt-2 text-sm md:text-base font-normal
              text-[#52525B] dark:text-[#A3A3A3]
            "
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
