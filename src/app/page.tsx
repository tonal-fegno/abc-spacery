"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TransformationQuote from "../components/TransformationQuote";
import StorySection from "@/components/StorySection";
import ExperienceCenters from "@/components/ExperienceCenters";
import BrandsSection from "@/components/BrandsSection";
import SolutionSection from "@/components/SolutionSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <TransformationQuote />
      <StorySection />
      <ExperienceCenters />
      <BrandsSection />
      <SolutionSection />
      <GallerySection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}