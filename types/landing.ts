import React from "react";

// Landing page component props
export interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export interface FeatureGridItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
}

export interface FeaturesGridProps {
  className?: string;
export interface StatCardItem {
  value: string;
  label: string;
}

export const HeroContent = {
  titleOne: "Secure Digital Payments",
  titleTwo: "For a Smarter Future",
  description:
    "Stellopay, automating salary payments globally, while experiencing instant, secure payroll on the stellar blockchain",
  button: "Get started",
  buttonSecondary: "Learn More",
  image: "/landing/heroCards.png",
  imageAlt: "Stellopay Cards",
  imageWidth: 400,
  imageHeight: 250,
  imageClassName: "w-full h-auto shadow-xl",
};
