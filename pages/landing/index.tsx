import { KeyFeatures } from "@/components/landing/key-features";
import Hero from "./hero";
import Footer from "@/components/common/footer";
import LandingPageNavBar from "@/components/landing/landing-page-nav-bar";
import BenefitsSection from "@/components/landing/benefits";
import HowItWorks from "@/components/landing/how-it-works";
import ValuePropositions from "@/components/landing/value-propositions";
import GetStartedCTA from "@/components/landing/get-started-cta";
import { FeaturesIntro } from "@/components/landing/features-intro";
import { StatsCards } from "@/components/landing/stats-cards";

const defaultStats = [
  { value: "$2.5B+", label: "Transaction Volume" },
  { value: "150K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "<3s", label: "Transaction Speed" },
];
import EnterpriseSolutionSection from "@/components/landing/enterprise-section";

export default function LandingPage() {
  return (
    <div>
      <LandingPageNavBar />
      {/* Removed: <DashBoard /> - this shouldn't be on the landing page */}
      <Hero />
      <FeaturesGrid />
      <section className="bg-[#F5F3FF] dark:bg-[#0F0A14] py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <StatsCards stats={defaultStats} />
        </div>
      </section>
      <KeyFeatures />
      <HowItWorks />
      <ValuePropositions />
      <EnterpriseSolutionSection />
      <BenefitsSection />
      <GetStartedCTA />
      <Footer />
    </div>
  );
}
