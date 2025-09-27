import React from 'react'
import { cn } from '@/lib/utils'

interface MobileContainerProps {
  children: React.ReactNode
  className?: string
}

export function MobileContainer({ children, className }: MobileContainerProps) {
  return (
    <div className={cn(
      "w-full max-w-md mx-auto bg-background border border-border rounded-2xl shadow-lg overflow-hidden",
      className
    )}>
      {children}
    </div>
  )
}