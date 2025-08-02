import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import VideoSection from "@/components/VideoSection";
import AccessSection from "@/components/AccessSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoursesSection />
      <VideoSection />
      <AccessSection />
      <FooterSection />
    </div>
  );
};

export default Index;
