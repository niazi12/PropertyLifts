import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/Service";
import { FeatureSection } from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import TeamMembers from "@/components/TeamMember";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <FeatureSection />
      <HowItWorks />
      <TeamMembers />
      <CtaBanner />
    </>
  );
}
