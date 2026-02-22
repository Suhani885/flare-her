import Link from "next/link";
import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="bg-natural overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">

        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-8 -top-8 -z-10 h-72 w-72 rounded-full bg-[var(--secondary-100)] opacity-40 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-[var(--accent-100)] opacity-40 blur-3xl" />
          
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="h-[500px] w-full"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute left-6 top-6">
              <div className="h-16 w-16 rounded-2xl border-2 border-white/80 backdrop-blur-sm" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div
            className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider"
            style={{
              backgroundColor: "var(--secondary-100)",
              color: "var(--secondary-700)",
            }}
          >
            Natural Beauty Solutions
          </div>

          <h1 className="text-balance font-serif text-5xl font-light leading-tight text-[var(--color-text-primary)] lg:text-6xl">
            <span className="font-normal italic" style={{ color: "var(--primary-600)" }}>
              Redefining
            </span>{" "}
            Beauty Through
            <br />
            Natural{" "}
            <span className="font-normal italic" style={{ color: "var(--secondary-600)" }}>
              Grace & Radiance
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-secondary)]">
            At Glow Skin, we believe that true beauty comes from the harmony between pure
            ingredients and refined sophistication. Each of our formulas is crafted with care
            and precision, designed to deliver real results for healthy, hydrated, and naturally
            radiant skin.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/marketplace">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="end"
                style={{
                  borderRadius: "8px",
                  paddingInline: "2rem",
                  height: "48px",
                }}
              >
                Shop Now
              </Button>
            </Link>
            <Link href="/analysis">
              <Button
                size="large"
                style={{
                  borderRadius: "8px",
                  paddingInline: "2rem",
                  height: "48px",
                  borderColor: "var(--secondary-400)",
                  color: "var(--secondary-700)",
                }}
              >
                View All
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex items-center">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full border"
                style={{
                  borderColor: "var(--secondary-300)",
                  backgroundColor: "var(--secondary-50)",
                }}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="var(--secondary-600)"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="ml-3 text-sm text-[var(--color-text-secondary)]">
                Purely Honest Formula
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}