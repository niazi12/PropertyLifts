import { FeatureSection } from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import TeamMembers from "@/components/TeamMember";
import ServicesSection from "@/components/Service";
import Image from "next/image";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
        <title>Property Lifts Ltd | Premium Lift Solutions</title>
        <meta
          name="description"
          content="We provide high-quality lift maintenance, installations, repairs, and modernizations to keep your elevators running safely, efficiently, and seamlessly."
        />
        <meta
          name="keywords"
          content="lift maintenance, lift installation, lift repair, lift modernization, Property Lifts Ltd, elevator services"
        />
        <meta name="author" content="Property Lifts Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <HeroSection />
    <FeatureSection />
    <ServicesSection />
    <TeamMembers />
    </>
  );
}
