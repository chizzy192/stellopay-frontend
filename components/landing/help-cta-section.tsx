"use client";

import { Button } from "@/components/ui/button";

export default function HelpCTASection() {
  return (
    <section className="py-20 bg-[#F5F3FF] dark:bg-[#0F0A14]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#09090B] dark:text-white">Need help?</h2>
        <p className="text-[#52525B] dark:text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
          Our support team is available 24/7 to assist you with any questions or issues.
        </p>
        <Button variant="default" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
          Contact Support
        </Button>
      </div>
    </section>
  );
}
