import BookingSection from "../components/BookingSection";
import BranchesSection from "../components/BranchesSection";
import ChildHealthSection from "../components/ChildHealthSection";
import DirectionsSection from "../components/DirectionsSection";
import EmergencyGuideSection from "../components/EmergencyGuideSection";
import FacilitiesSection from "../components/FacilitiesSection";
import FaqSection from "../components/FaqSection";
import FinalCtaSection from "../components/FinalCtaSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import InfrastructureSection from "../components/InfrastructureSection";
import MaternitySection from "../components/MaternitySection";
import QuickActions from "../components/QuickActions";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import WhyRioSection from "../components/WhyRioSection";

export default function HomePage() {
  return (
    <div className="rio">
      <div className="estrip">
        <span className="estrip-dot" />
        <span>
          24/7 Emergency - NICU - PICU&nbsp;-&nbsp;
          <a href="tel:+917708318222">Call now: +91 77083 18222</a>
        </span>
      </div>

      <Header />

      <main id="top">
        <HeroSection />
        <StatsSection />
        <EmergencyGuideSection />
        <WhyRioSection />
        <ServicesSection />
        <MaternitySection />
        <ChildHealthSection />
        <FacilitiesSection />
        <TeamSection />
        <BranchesSection />
        <InfrastructureSection />
        {/* <BookingSection /> */}
        <FaqSection />
        <DirectionsSection />
        <FinalCtaSection />
      </main>

      <QuickActions />
      <Footer />
    </div>
  );
}
