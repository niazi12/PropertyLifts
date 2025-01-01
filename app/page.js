import { FeatureSection } from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import TeamMembers from "@/components/TeamMember";
import ServicesSection from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <FeatureSection />
    <ServicesSection />
    <TeamMembers />
    </>
  );
}
