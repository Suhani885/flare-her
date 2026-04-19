"use client";

import useGlobalLoader from "@/store/useGlobalLoader";

function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 bg-[length:200%_100%] ${className}`}
      style={{
        animation: "skeleton-shimmer 1.6s ease-in-out infinite",
      }}
    />
  );
}

export function GlobalSkeletonLoader() {
  const counter = useGlobalLoader((s) => s.counter);

  if (counter === 0) return null;

  return (
    <>
      <style>{`
        @keyframes skeleton-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <div
        className="fixed inset-0 z-[9999] flex items-start justify-center overflow-auto bg-background/80 backdrop-blur-sm px-4 py-20 pt-28"
        role="status"
        aria-label="Loading"
      >
        <div className="w-full max-w-2xl space-y-5">
          <div className="flex items-center justify-between mb-8">
            <SkeletonBlock className="h-4 w-24" />
            <SkeletonBlock className="h-6 w-28 rounded-full" />
          </div>

          <SkeletonBlock className="h-2 w-full rounded-full" />

          <div className="rounded-3xl border border-border bg-white p-8 md:p-10 space-y-6">
            <SkeletonBlock className="h-3 w-24" />
            <SkeletonBlock className="h-8 w-3/4" />
            <SkeletonBlock className="h-5 w-1/2" />

            <div className="space-y-3 pt-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border-2 border-border p-4"
                >
                  <SkeletonBlock className="h-5 w-5 rounded-full flex-shrink-0" />
                  <SkeletonBlock className={`h-4 ${i % 2 === 0 ? "w-2/3" : "w-1/2"}`} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4">
              <SkeletonBlock className="h-10 w-20 rounded-xl" />
              <SkeletonBlock className="h-10 w-32 rounded-xl" />
            </div>
          </div>

          <div className="flex justify-center gap-1.5 pt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <SkeletonBlock
                key={i}
                className={`h-2 rounded-full ${i === 3 ? "w-8" : "w-2"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
