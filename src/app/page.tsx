import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import VideoPhotoSection from "@/components/VideoPhotoSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Features />
      <Pricing />
      <VideoPhotoSection /> 
      <CTA />
      <Footer />
    </>
  );
}
