"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  Droplets,
  Sparkles,
  FlaskConical,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

const features = [
  { icon: <Droplets className="h-6 w-6" />, title: "Skin Analysis", desc: "Decode your unique skin type, concerns, and ideal routine" },
  { icon: <Sparkles className="h-6 w-6" />, title: "Hair Analysis", desc: "Understand your hair texture, scalp health, and care needs" },
  { icon: <FlaskConical className="h-6 w-6" />, title: "Ingredient Matching", desc: "Get a curated list of ingredients your profile will love" },
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Avoid List", desc: "Know exactly what to stay away from for your biology" },
  { icon: <Star className="h-6 w-6" />, title: "Product Picks", desc: "Personalised product recommendations from top brands" },
  { icon: <Zap className="h-6 w-6" />, title: "Instant Results", desc: "AI-powered analysis delivered in seconds" },
];

const analysisOptions = [
  {
    href: "/analysis/skin",
    label: "Skin Analysis",
    desc: "Discover your skin type, concerns, and ideal ingredients for a glowing complexion.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop",
    tags: ["10 Questions", "~3 mins"],
  },
  {
    href: "/analysis/hair",
    label: "Hair Analysis",
    desc: "Understand your hair type, scalp health, and get a personalised haircare routine.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop",
    tags: ["10 Questions", "~3 mins"],
  },
];

export default function AnalysisLandingPage() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] h-[600px] w-[600px] rounded-full bg-primary-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[5%] h-[500px] w-[500px] rounded-full bg-accent-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-20 pt-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl font-light leading-tight text-textPrimary mb-6 md:text-6xl">
            Your Personalised<br />
            <span className="italic text-primary-600">Beauty Blueprint</span>
          </h1>
          <p className="text-lg text-textSecondary font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Answer 10 targeted questions about your skin or hair and receive a science-backed analysis with ingredient recommendations, routines, and curated product picks — all tailored to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {analysisOptions.map(({ href, label, desc, img, tags }) => (
              <Link
                key={href}
                href={href}
                className="group relative overflow-hidden rounded-3xl border-2 border-transparent bg-white shadow-sm text-left transition-all hover:border-primary-400 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={img}
                    alt={label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-textPrimary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-textPrimary mb-2">
                    {label}
                  </h3>
                  <p className="text-sm text-textSecondary leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-600">
                    Begin Analysis
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-textMuted transition-colors hover:text-textPrimary"
          >
            <ChevronLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                {f.icon}
              </div>
              <h3 className="font-serif text-lg font-medium text-textPrimary mb-2">{f.title}</h3>
              <p className="text-sm text-textSecondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
