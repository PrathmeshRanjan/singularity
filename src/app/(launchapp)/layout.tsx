"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CardDashboard from "@/components/Shared/promo-card";
import { PayReceiveSegment } from "@/components/Shared/pay-recieve-segment";
import background from "../../../public/Gemini_Generated_Image_krecmwkrecmwkrec.png";

export default function LaunchAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Prevent hydration errors by ensuring component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className="h-screen bg-[#060807] flex items-center justify-center p-4"
    >
      <main className="h-[98vh] overflow-hidden bg-white/90 backdrop-blur-sm border rounded-2xl md:w-[55%]">
      <div className="mx-auto w-full px-4 py-6">
        {/* Header */}

        {/* Promo Card with integrated PayReceiveSegment */}
        <CardDashboard 
          name="Akshata"
          subtitle="Singularity User"
          currency="USD"
          balance="$1,234.56"
          transaction="123"
          profileImage="/profile.jpg"
        />

        {/* Page Content - for auto-send and auto-receive pages */}
        {children}

        {/* Optional info text - only show on main dashboard */}
        {(pathname === "/" || pathname === "/launchapp" || pathname.endsWith("/(launchapp)")) && (
          <p className="mt-4 text-sm text-gray-500">
            Choose an option to continue. You can swap the illustration anytime.
          </p>
        )}
      </div>
    </main>
    </div>
  );
}