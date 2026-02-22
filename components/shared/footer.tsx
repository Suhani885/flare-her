import Link from "next/link";
import { Sparkles } from "lucide-react";

const links = {
  Product: [
    { label: "AI Analysis", href: "/analysis" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              <span className="text-lg font-bold text-primary-600">
                FlareHer
              </span>
            </Link>
            <p className="mt-3 text-sm text-textMuted">
              AI-powered skincare analysis tailored to you.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="mb-3 text-sm font-semibold text-textPrimary">
                {group}
              </p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-textMuted transition-colors hover:text-primary-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-textMuted">
            © {new Date().getFullYear()} FlareHer. All rights reserved.
          </p>
          <p className="text-xs text-textMuted">
            Built with ❤️ for skincare lovers
          </p>
        </div>
      </div>
    </footer>
  );
}