"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import imagefooter from "../../../public/66a079d975d3de69dc0e2254_1.png"

export default function Footer() {
  const mascotRef = useRef<HTMLDivElement>(null);

  const handleMascotHover = () => {
    if (mascotRef.current) {
      gsap.to(mascotRef.current, {
        rotateY: "+=360",
        duration: 1.4,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(mascotRef.current, {
            rotateY: 0,
            duration: 0,
            ease: "power2.out",
          });
        },
      });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission logic here
    console.log("Newsletter form submitted");
  };

  return (
    <footer className="relative w-full mt-[-40px] sm:mt-[-80px] z-10">
      <div className="w-full bg-[#a66bff] rounded-t-[48px] sm:rounded-t-[120px] pt-12 sm:pt-24 pb-8 sm:pb-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 shadow-2xl">
        {/* Newsletter */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-md">
          <span className="uppercase tracking-widest text-white/80 text-xs mb-2 font-semibold">Stay up to date</span>
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight" 
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            get our<br />newsletter
          </h2>
          <form className="w-full flex items-center gap-2 sm:gap-4 mt-2" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent border-b-2 border-white/70 text-white placeholder-white/80 py-2 px-2 outline-none text-base sm:text-lg"
              required
            />
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#a66bff" }}
              transition={{ type: "spring", stiffness: 300 }}
              type="submit"
              className="rounded-full bg-white text-[#a66bff] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg text-xl sm:text-2xl font-bold transition-colors"
            >
              →
            </motion.button>
          </form>
        </div>

        {/* Mascot image with GSAP 3D hover */}
        <motion.div
          ref={mascotRef}
          className="flex-1 flex items-center justify-center cursor-pointer"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          style={{ perspective: 1000 }}
          onMouseEnter={handleMascotHover}
        >
          <Image
            src={imagefooter}
            alt="Mascot"
            width={200}
            height={200}
            className="drop-shadow-2xl"
            style={{ willChange: "transform" }}
          />
        </motion.div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-start md:items-end justify-center max-w-md">
          <span className="uppercase tracking-widest text-white/80 text-xs mb-2 font-semibold">Get in touch</span>
          <div className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
            hello@Singularity.com<br />
            +1 234 567 8901
          </div>
          <div className="text-white text-lg md:text-xl font-medium mb-2">
            123 Finance Street<br />
            Mumbai, India
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-3 sm:py-4 bg-[#a66bff] border-t border-white/10 rounded-b-3xl">
        <div className="flex gap-4 sm:gap-6 text-white/80 text-[11px] sm:text-xs font-medium mb-2 md:mb-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Disclaimer</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
        <div className="flex gap-3 sm:gap-4 text-white text-lg sm:text-xl">
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
        </div>
        <div className="flex gap-2 sm:gap-4 text-white/80 text-[11px] sm:text-xs font-medium">
          <span>ENGLISH</span>
        </div>
      </div>
    </footer>
  );
}