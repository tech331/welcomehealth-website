import BeyondInboxCta from "@/components/BeyondInboxCta";
import CoordinationSection from "@/components/CoordinationSection";
import FitSection from "@/components/FitSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SecuritySection from "@/components/SecuritySection";
import SolutionSection from "@/components/SolutionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CoordinationSection />
      <SecuritySection />
      <FitSection />
      <BeyondInboxCta />
      <Footer />
    </>
  );
}
