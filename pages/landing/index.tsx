import { KeyFeatures } from "@/components/landing/key-features";
import Hero from "./hero";
import Footer from "@/components/common/footer";
// import DashBoard from "@/components/dashboard/dashboard-page"
import LandingPageNavBar from "@/components/landing/landing-page-nav-bar";
import BenefitsSection from "@/components/landing/benefits";
import ValuePropositions from "@/components/landing/value-propositions";
import GetStartedCTA from "@/components/landing/get-started-cta";
import { FeaturesIntro } from "@/components/landing/features-intro";
import EnterpriseSolutionSection from "@/components/landing/enterprise-section";

export default function LandingPage() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#09090B]">
      {<LandingPageNavBar />}
      {/* Removed: <DashBoard /> - this shouldn't be on the landing page */}
      <Hero />
      <FeaturesIntro id="features" />
      <KeyFeatures />
      <ValuePropositions />
      <EnterpriseSolutionSection />
      <BenefitsSection />
      <GetStartedCTA />
      <Footer />
    </div>
  );
}
