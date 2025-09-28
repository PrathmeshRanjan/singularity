"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CardDashboard from "@/components/Shared/promo-card";
import { PayReceiveSegment } from "@/components/Shared/pay-recieve-segment";
import GlowyBackground  from "@/components/Shared/background";

export default function LaunchAppLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black flex items-center justify-center p-4">
      <main className="relative h-[98vh] overflow-hidden border-green-300 p  bg-[#0c0c0c] backdrop-blur-sm border rounded-2xl md:w-[45%]">
        {/* Glowy background layer (pointer-events-none keeps it non-interactive) */}
        <div className="absolute inset-0 pointer-events-none">
          <GlowyBackground />
        </div>

        {/* Foreground content — keep this above the background */}
        <div className="relative z-10 mx-auto w-full">
          <CardDashboard 
            name="Gm!"
            subtitle="Singularity User"
            currency="ACTIVE"
            balance="All Systems Ready"
            transaction="Last sync: 2 mins ago"
            profileImage="/profile.jpg"
          />

          {children}

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
