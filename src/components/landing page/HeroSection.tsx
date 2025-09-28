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
      <div className="fixed inset-0 flex items-center justify-center z-10 bg-transparent pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center justify-center w-full">
          <AnimatedText 
            text="Singularity"
            showButton={true}
            buttonText="Launch App"
            onButtonClick={handleLaunchAppClick}
            className="text-[40px] sm:text-[56px] md:text-[72px] text-[#a66bff] font-extrabold text-center leading-tight"
            textColor="var(--foreground)"
          />
        </div>
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