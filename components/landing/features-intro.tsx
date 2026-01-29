"use client";

export interface FeaturesIntroProps {
  /** Pill tag text. Default: "Features That Make Us Different" */
  tag?: string;
  /** Headline prefix (default color). Default: "Everything you need to" */
  headlinePrefix?: string;
  /** Headline gradient part. Default: "scale your business" */
  headlineGradient?: string;
  /** Paragraph copy. Default: design copy */
  paragraph?: string;
  /** Optional section id for anchor links */
  id?: string;
}

const DEFAULT_TAG = "Features That Make Us Different";
const DEFAULT_HEADLINE_PREFIX = "Everything you need to";
const DEFAULT_HEADLINE_GRADIENT = "scale your business";
const DEFAULT_PARAGRAPH =
  "Built for modern businesses. Designed for global payments. Powered by blockchain technology.";

export function FeaturesIntro({
  tag = DEFAULT_TAG,
  headlinePrefix = DEFAULT_HEADLINE_PREFIX,
  headlineGradient = DEFAULT_HEADLINE_GRADIENT,
  paragraph = DEFAULT_PARAGRAPH,
  id,
}: FeaturesIntroProps) {
  return (
    <section
      id={id}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#040404] transition-colors duration-300"
    >
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-6 sm:gap-8">
        {/* Tag: pill-shaped */}
        <div
          className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300
            bg-[#F4F4F5] border-[#E4E4E7] text-[#52525B]
            dark:bg-[#27272A] dark:border-[#3F3F46] dark:text-[#A1A1AA]"
          role="status"
          aria-label={tag}
        >
          {tag}
        </div>

        {/* Headline: default color + purple/lavender gradient */}
        <h2 className="font-bold tracking-tight font-inter text-[#09090B] dark:text-[#FAFAFA] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
          <span>{headlinePrefix} </span>
          <span className="bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent">
            {headlineGradient}
          </span>
        </h2>

        {/* Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#52525B] dark:text-[#A3A3A3] font-general leading-relaxed">
          {paragraph}
        </p>
      </div>
    </section>
  );
}
