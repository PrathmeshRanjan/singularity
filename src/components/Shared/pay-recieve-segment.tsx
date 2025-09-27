"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function PayReceiveSegment() {
  const pathname = usePathname()
  const isSend = pathname === "/auto-send"
  const isReceive = pathname === "/auto-receive"

  return (
    <div role="tablist" aria-label="Auto actions" className="grid grid-cols-2 rounded-full bg-secondary p-1">
      <SegmentLink href="/auto-send" active={isSend} label="Auto Pay" aria-controls="auto-send" />
      <SegmentLink href="/auto-receive" active={isReceive} label="Auto Receive" aria-controls="auto-receive" />
    </div>
  )
}

function SegmentLink({
  href,
  label,
  active,
  ...props
}: {
  href: string
  label: string
  active?: boolean
} & React.ComponentProps<"a">) {
  return (
    <Link
      href={href}
      role="tab"
      aria-selected={active ? "true" : "false"}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        active ? "bg-black text-white" : "text-foreground hover:bg-accent",
      )}
      {...props}
    >
      {label}
    </Link>
  )
}
