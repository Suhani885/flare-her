"use client";

import { Button } from "antd";
import { Sun, Moon } from "lucide-react";
import { useThemeMode } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeMode();

  return (
    <Button
      type="text"
      onClick={toggleTheme}
      icon={
        isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )
      }
    />
  );
}