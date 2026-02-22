"use client";

import Link from "next/link";
import { Button } from "antd";
import { Search, Heart, ShoppingBag, Sparkles, ChevronDown, User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/marketplace", hasDropdown: true },
  { label: "AI Analysis", href: "/analysis" },
  { label: "Community", href: "/community" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary-500" />
          <span className="text-xl font-bold text-primary-600">
            FlareHer
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-textSecondary transition-colors hover:bg-primary-50 hover:text-primary-600 lg:px-4"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Button
            type="text"
            icon={<Search className="h-4 w-4 text-textSecondary" />}
            className="hidden sm:inline-flex"
          />
          <Button
            type="text"
            icon={<Heart className="h-4 w-4 text-textSecondary" />}
            className="hidden sm:inline-flex"
          />
          <Button
            type="text"
            icon={<ShoppingBag className="h-4 w-4 text-textSecondary" />}
          />
          <ThemeToggle />
          <Link href="/login">
            <Button
              type="primary"
              icon={<User className="h-4 w-4" />}
              iconPosition="start"
              className="ml-2 rounded-full"
            >
              <span className="hidden sm:inline">Account</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}