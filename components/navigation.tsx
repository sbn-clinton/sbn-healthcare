"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navigation({ isDarkMode, toggleDarkMode }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <AnimatedLogo size="md" showText={true} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#doctors"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Doctors
            </Link>
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <Button onClick={toggleDarkMode} variant="ghost" size="sm">
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={toggleDarkMode} variant="ghost" size="sm">
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#doctors"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Doctors
              </Link>
              <Link
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>

              <Button
                asChild
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 w-full"
              >
                <Link href="#appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
