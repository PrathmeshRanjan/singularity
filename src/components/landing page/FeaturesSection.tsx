"use client";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface FeaturesSectionProps {
  showFeatures: boolean;
}

export default function FeaturesSection({ showFeatures }: FeaturesSectionProps) {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 items-center justify-start bg-transparent">
      <AnimatePresence>
        {showFeatures && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.7 }}
            className="w-full flex flex-col items-center justify-center"
            style={{ zIndex: 20 }}
          >
            {/* Heading and Description */}
            <div className="w-full flex flex-col lg:flex-row justify-between gap-6 mx-auto py-8">
              <h2 
                className="text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] max-w-full lg:max-w-[40%] leading-[1] font-extrabold mb-2 text-[var(--foreground)]" 
                style={{ fontFamily: "'Unbounded', sans-serif" }}
              >
                Your Money, <AnimatedText 
                  text="Your Way" 
                  showButton={false}
                  textColor="#a66bff"
                />
              </h2>

              <div className="w-full flex flex-col lg:w-[50%]">
                <p className="text-base md:text-lg italic text-[color:var(--foreground)]/80 font-semibold mb-4">
                  Experience seamless, secure, and global financial freedom.
                  Everything you need, right at your fingertips.
                </p>
                
                <AnimatedText 
                  text=""
                  showButton={true}
                  buttonText="Launch App"
                  onButtonClick={() => console.log("Launch App clicked")}
                  className="block w-full max-w-xs"
                />
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="w-full mx-auto rounded-xl bg-[var(--background)] text-[var(--foreground)] shadow-lg border border-[#ece6ff] dark:border-neutral-800">
              <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#ece6ff] dark:divide-neutral-800">
                {/* Feature 1 */}
                <div className="flex-1 flex flex-col items-center justify-center py-8 px-2">
                  <div 
                    className="font-extrabold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] text-[#a66bff] leading-none" 
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    0<span className="text-2xl sm:text-4xl align-super">%</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#a6ffb0]" />
                    <span className="text-sm sm:text-base text-[color:var(--foreground)]/80 font-medium">Transaction Fees</span>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex-1 flex flex-col items-center justify-center py-8 px-2">
                  <div 
                    className="font-extrabold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] text-[#d4f607] leading-none" 
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    24/7
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#a6ffb0]" />
                    <span className="text-sm sm:text-base text-[color:var(--foreground)]/80 font-medium">Support & Security</span>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex-1 flex flex-col items-center justify-center py-8 px-2">
                  <div 
                    className="font-extrabold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[110px] text-[#a66bff] leading-none" 
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                  >
                    180<span className="text-2xl sm:text-4xl align-super">+</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#a6ffb0]" />
                    <span className="text-sm sm:text-base text-[color:var(--foreground)]/80 font-medium">Countries Supported</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}