import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import StatisticsSection from "@/components/statistics-section";
import ExpertiseSection from "@/components/expertise-section";
import HistorySection from "@/components/history-section";
import SuccessSection from "@/components/success-section";
import ProjectExecutionSection from "@/components/project-execution-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-arc-dark overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StatisticsSection />
      <ExpertiseSection />
      <HistorySection />
      <SuccessSection />
      <ProjectExecutionSection />
      <Footer />
    </div>
  );
}
