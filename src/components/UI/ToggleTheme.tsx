"use client";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "@/context/ThemeProvider";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Para evitar errores de hidratación en Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme ==="dark" ? "light" : "dark")}
      aria-label="Cambiar tema"
      className="absolute p-2 rounded-full transition-colors cursor-pointer top-0 right-0"
    >
      {theme === "light" ? (
        <LuSun size="24" className="text-yellow-400" />
      ) : (
        <LuMoon size="24" className="text-white" />
      )}
    </button>
  );
};

export default ToggleTheme;
