"use client";
import { useState } from "react";
import ThemeToggle from "../components/landing page/ThemeToggle";
import HeroSection from "@/components/landing page/HeroSection";
import FeaturesSection from "@/components/landing page/FeaturesSection";
import Footer from "../components/landing page/Footer";

export default function Home() {
  const [showFeatures, setShowFeatures] = useState(false);

  const handleHeroScroll = (progress: number) => {
    if (progress >= 0.98 && !showFeatures) {
      setShowFeatures(true);
    } else if (progress < 0.50 && showFeatures) {
      setShowFeatures(false);
    }
  };

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Hero Section */}
      <HeroSection onScroll={handleHeroScroll} />
      
      {/* Features Section */}
      <FeaturesSection showFeatures={showFeatures} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
