import React from 'react'

export function StatusBar() {
  return (
    <div className="h-6 bg-background flex items-center justify-center">
      <div className="flex items-center space-x-1">
        <div className="w-1 h-1 bg-foreground rounded-full"></div>
        <div className="w-1 h-1 bg-foreground rounded-full"></div>
        <div className="w-1 h-1 bg-foreground rounded-full"></div>
      </div>
    </div>
  )
}