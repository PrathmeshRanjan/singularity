"use client";
import { useState, useEffect } from "react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme (default to light when not saved)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : false;
    setDarkMode(isDark);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(isDark ? "dark" : "light");
  }, []);

  // Toggle dark mode and persist choice
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      root.classList.add(next ? "dark" : "light");
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <button
      className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-10 rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-white dark:bg-black text-black dark:text-white shadow transition-colors ${className}`}
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      type="button"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}