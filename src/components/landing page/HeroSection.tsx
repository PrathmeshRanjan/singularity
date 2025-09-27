"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import AnimatedText from "./AnimatedText";
import image from "../../../public/Gemini_Generated_Image_s9tg66s9tg66s9tg__1_-removebg-preview.png";
import image2 from "../../../public/Gemini_Generated_Image_htv1jrhtv1jrhtv1-removebg-preview.png";

interface HeroSectionProps {
  onScroll?: (progress: number) => void;
}

export default function HeroSection({ onScroll }: HeroSectionProps) {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLaunchAppClick = () => {
    router.push("/auto-send");
  };

  // Scroll-linked animation for hero text
  useEffect(() => {
    function handleScroll() {
      if (!heroTextRef.current || !heroSectionRef.current) return;

      const heroRect = heroSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only animate if user has scrolled
      if (window.scrollY === 0) {
        gsap.to(heroTextRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          overwrite: "auto",
        });
        onScroll?.(0);
        return;
      }

      // Progress: 0 (top of hero) to 1 (bottom of hero at top of viewport)
      const progress = Math.min(
        1,
        Math.max(
          0,
          (windowHeight - heroRect.top) / (heroRect.height + windowHeight * 0.5)
        )
      );

      gsap.to(heroTextRef.current, {
        scale: 1 + progress * 1.2,
        opacity: 1 - progress * 1.2,
        duration: 1,
        ease: "power2.out",
        overwrite: "auto",
      });

      onScroll?.(progress);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);

  return (
    <div ref={heroSectionRef} className="relative min-h-screen overflow-x-hidden flex flex-col px-4 sm:px-6">
      {/* Left Side Image */}
      <div className="hidden md:flex items-center justify-center absolute -left-10 top-1/2 -translate-y-1/2 ml-8">
        <Image
          src={image}
          alt="Finance Illustration"
          className="rounded-xl"
        />
      </div>
      
      {/* Centered Text */}
      <div ref={heroTextRef} className="flex flex-1 items-center justify-center will-change-transform">
        <h1
          className="text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] font-sans text-center font-bold leading-[1.05] sm:leading-[1] break-words"
          style={{ fontFamily: "'Unbounded', sans-serif" }}
        >
          Make <span className="text-[#a66bff]">Your</span>
          <br />
          <span className="text-[#a66bff]">finances</span>
          <br />
          <AnimatedText 
            text="Move" 
            showButton={true}
            buttonText="Launch App"
            onButtonClick={handleLaunchAppClick}
          />
        </h1>
      </div>
      
      {/* Right Side Image */}
      <div className="hidden md:flex items-center justify-center absolute -right-10 top-1/2 -translate-y-1/2 ml-8">
        <Image
          src={image2}
          alt="Finance Illustration"
          width={600}
          height={600}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}