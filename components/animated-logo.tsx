"use client"

import { Heart, Plus } from "lucide-react"
import { useEffect, useState } from "react"

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  className?: string
}

export function AnimatedLogo({ size = "md", showText = true, className = "" }: AnimatedLogoProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  }

  return (
    <div className={`flex items-center space-x-3 ${className} ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      {/* Logo Icon Container */}
      <div className="relative">
        {/* Background Pulse Effect */}
        <div
          className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 animate-pulse-slow"
          style={{ scale: 1.5 }}
        />

        {/* Main Logo Container */}
        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-2 shadow-lg animate-bounce-in">
          {/* Heart Icon */}
          <div className="relative">
            <Heart className={`${sizeClasses[size]} text-white fill-current drop-shadow-sm`} />

            {/* Plus Icon Overlay */}
            <div
              className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5 shadow-md animate-bounce-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Plus className="h-3 w-3 text-white stroke-2" />
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-float" />
        <div
          className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Text Logo */}
      {showText && (
        <div
          className={`flex flex-col ${isVisible ? "animate-slide-in" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <span
            className={`${textSizeClasses[size]} font-bold text-gray-900 dark:text-white leading-none hover:text-blue-600 transition-colors duration-200`}
          >
            MediCare
            <span className="text-blue-600 animate-pulse">+</span>
          </span>
          <span
            className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Healthcare
          </span>
        </div>
      )}
    </div>
  )
}

// Simplified version for loading states
export function AnimatedLogoSimple({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className} animate-fade-in`}>
      <div className="bg-blue-600 rounded-full p-2 animate-spin" style={{ animationDuration: "2s" }}>
        <Heart className="h-6 w-6 text-white fill-current" />
      </div>
      <span className="text-lg font-bold text-gray-900 dark:text-white animate-pulse">MediCare+</span>
    </div>
  )
}

// Logo for different contexts
export function AnimatedLogoIcon({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <div className={`relative ${className} hover:scale-105 active:scale-95 transition-transform duration-200`}>
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-in`}
      >
        <Heart className="h-5 w-5 text-white fill-current" />
        <div
          className="absolute -top-0.5 -right-0.5 bg-green-500 rounded-full p-0.5 animate-spin"
          style={{ animationDuration: "3s" }}
        >
          <Plus className="h-2 w-2 text-white stroke-2" />
        </div>
      </div>
    </div>
  )
}
