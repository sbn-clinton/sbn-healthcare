"use client"

import { useEffect, useState } from "react"

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "footer" | "minimal"
  className?: string
}

export function AnimatedBackground({ variant = "section", className = "" }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const variants = {
    hero: {
      particles: 20,
      size: "large",
      colors: ["bg-blue-200", "bg-green-200", "bg-blue-300", "bg-green-300"],
      opacity: "opacity-25",
    },
    section: {
      particles: 12,
      size: "medium",
      colors: ["bg-blue-100", "bg-green-100", "bg-blue-200"],
      opacity: "opacity-15",
    },
    footer: {
      particles: 15,
      size: "small",
      colors: ["bg-blue-300", "bg-green-300", "bg-blue-400"],
      opacity: "opacity-30",
    },
    minimal: {
      particles: 8,
      size: "small",
      colors: ["bg-blue-50", "bg-green-50", "bg-purple-50"],
      opacity: "opacity-10",
    },
  }

  const config = variants[variant]

  const generateParticles = () => {
    return Array.from({ length: config.particles }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size:
        config.size === "large"
          ? 20 + Math.random() * 40
          : config.size === "medium"
            ? 15 + Math.random() * 25
            : 8 + Math.random() * 15,
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      duration: 12 + Math.random() * 18,
      delay: Math.random() * 8,
    }))
  }

  const [particles] = useState(generateParticles)

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle Gradient Overlay */}
      <div
        className="absolute inset-0 animate-pulse-slow"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle Mesh Background */}
      <div
        className="absolute inset-0 animate-pulse-slow"
        style={{
          background: "linear-gradient(45deg, rgba(59, 130, 246, 0.03) 0%, rgba(34, 197, 94, 0.03) 100%)",
          animationDuration: "8s",
        }}
      />

      {/* Reduced Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} ${config.opacity} dark:opacity-10 animate-float`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Subtle Interactive Mouse Effect */}
      <div
        className="absolute w-96 h-96 rounded-full animate-pulse-slow transition-all duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(34, 197, 94, 0.02) 50%, transparent 70%)",
          left: mousePosition.x * (typeof window !== "undefined" ? window.innerWidth : 1920) - 192,
          top: mousePosition.y * (typeof window !== "undefined" ? window.innerHeight : 1080) - 192,
          transform: `scale(${1 + mousePosition.x * 0.1})`,
        }}
      />

      {/* Reduced Medical Cross Pattern */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i}>
            {/* Vertical lines */}
            <div
              className="absolute w-1 h-8 bg-blue-100 dark:bg-blue-800 opacity-15 animate-pulse-slow rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${15 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "6s",
              }}
            />
            {/* Horizontal lines */}
            <div
              className="absolute w-8 h-1 bg-green-100 dark:bg-green-800 opacity-15 animate-pulse-slow rounded-full"
              style={{
                left: `${16 + i * 20}%`,
                top: `${18.5 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5 + 0.3}s`,
                animationDuration: "6s",
              }}
            />
          </div>
        ))}
      </div>

      {/* Reduced Pulse Rings */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute border border-blue-200 dark:border-blue-700 rounded-full opacity-10 animate-pulse-slow"
            style={{
              width: 100 + i * 60,
              height: 100 + i * 60,
              left: `${65 + i * 5}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: "10s",
            }}
          />
        ))}
      </div>

      {/* Reduced Medical Icons */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`medical-icon-${i}`}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          >
            {/* Simple shapes only */}
            {i % 3 === 0 && <div className="w-4 h-4 bg-blue-200 dark:bg-blue-700 rounded-full"></div>}
            {i % 3 === 1 && (
              <div className="relative w-4 h-4">
                <div className="absolute top-1 left-0 w-4 h-1 bg-green-200 dark:bg-green-700 rounded"></div>
                <div className="absolute top-0 left-1.5 w-1 h-4 bg-green-200 dark:bg-green-700 rounded"></div>
              </div>
            )}
            {i % 3 === 2 && <div className="w-3 h-3 bg-purple-200 dark:bg-purple-700 transform rotate-45"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// Reduced Hero Background
export function HeroAnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main animated background */}
      <AnimatedBackground variant="hero" />

      {/* Reduced hero-specific elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse-slow blur-sm" />

      <div
        className="absolute top-40 right-20 w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse-slow blur-sm"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-15 animate-pulse-slow blur-sm"
        style={{ animationDelay: "2s" }}
      />

      {/* Reduced floating medical icons */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`hero-icon-${i}`}
            className="absolute opacity-15 animate-float"
            style={{
              left: `${8 + i * 12}%`,
              top: `${12 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          >
            {/* Smaller, simpler medical symbols */}
            {i % 2 === 0 && <div className="w-6 h-6 bg-blue-300 dark:bg-blue-600 rounded-full animate-pulse-slow" />}
            {i % 2 === 1 && (
              <div className="relative w-6 h-6">
                <div className="absolute top-2 left-0 w-6 h-1 bg-green-300 dark:bg-green-600 rounded"></div>
                <div className="absolute top-0 left-2.5 w-1 h-6 bg-green-300 dark:bg-green-600 rounded"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reduced Light Rays */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute opacity-5 animate-pulse-slow"
            style={{
              width: "1px",
              height: "100vh",
              background: "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent)",
              left: `${20 + i * 30}%`,
              transform: `rotate(${i * 20}deg)`,
              transformOrigin: "center bottom",
              animationDelay: `${i * 1}s`,
              animationDuration: "12s",
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Reduced Footer Background
export function FooterAnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatedBackground variant="footer" />

      {/* Subtle footer wave effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 animate-pulse-slow"
        style={{
          background: `
            linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.08) 50%, rgba(34, 197, 94, 0.08) 100%)
          `,
          clipPath: "polygon(0 70%, 50% 50%, 100% 60%, 100% 100%, 0% 100%)",
          animationDuration: "15s",
        }}
      />

      {/* Reduced animated elements for footer */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={`footer-particle-${i}`}
            className="absolute bg-white opacity-10 rounded-full animate-float"
            style={{
              width: 8 + Math.random() * 12,
              height: 8 + Math.random() * 12,
              left: `${15 + i * 20}%`,
              top: `${30 + Math.random() * 40}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${12 + i * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Minimal Background (unchanged as it was already subtle)
export function MinimalAnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatedBackground variant="minimal" />

      {/* Very subtle additional elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`minimal-accent-${i}`}
            className="absolute bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 opacity-8 rounded-full animate-pulse-slow"
            style={{
              width: 40 + Math.random() * 20,
              height: 40 + Math.random() * 20,
              left: `${25 + i * 25}%`,
              top: `${25 + (i % 2) * 40}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: "15s",
            }}
          />
        ))}
      </div>
    </div>
  )
}
