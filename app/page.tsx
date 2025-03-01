import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import BlogPreview from "@/components/blog-preview";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}