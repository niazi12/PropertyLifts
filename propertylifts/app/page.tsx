import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import TeamMember from "../components/TeamMember";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TeamMember />
    </>
  );
}