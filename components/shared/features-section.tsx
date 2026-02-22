import Link from "next/link";
import { Button, Card } from "antd";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const productCategories = [
  {
    label: "Serums",
    href: "/marketplace/serums",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
  },
  {
    label: "Body Care",
    href: "/marketplace/body-care",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
  },
  {
    label: "Cleansers",
    href: "/marketplace/cleansers",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80",
  },
  {
    label: "Skincare",
    href: "/marketplace/skincare",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
  },
  {
    label: "Moisturizer",
    href: "/marketplace/moisturizer",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    feedback:
      "Pigment shampoo can ease the hair dye fade. Kalahari melon seed oil not only smells amazing, but it also acts...",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Emma Wilson",
    feedback:
      "Moisturise in the shower. This might sounds slightly excessive but even just a few drops in a face spa in showers...",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Olivia Parker",
    feedback:
      "Tackle body odour with a chemical exfoliant. Our team's choice is an enzymatic deodorant cleanse, which can soothe...",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
];

export function FeaturesSection() {
  return (
    <>
      <section className="bg-[var(--color-background)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-light text-[var(--color-text-primary)]">
              Explore the World of{" "}
              <span className="italic" style={{ color: "var(--primary-600)" }}>
                Radiant Skin
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {productCategories.map((cat) => (
              <Link key={cat.label} href={cat.href}>
                <div className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:shadow-lg">
                  <div
                    className="h-48 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />
                  <div className="p-4">
                    <p
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: "var(--primary-600)" }}
                    >
                      {cat.label}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--neutral-50)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 text-center">
            <p
              className="mb-2 text-sm font-medium uppercase tracking-wider"
              style={{ color: "var(--primary-500)" }}
            >
              Testimonials
            </p>
            <h2 className="font-serif text-4xl font-light text-[var(--color-text-primary)]">
              What Our Customers{" "}
              <span className="italic" style={{ color: "var(--secondary-600)" }}>
                Say
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="mx-auto mb-4 h-24 w-24 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${t.image})` }}
                />
                <p className="mb-4 text-center text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {t.feedback}
                </p>
                <p className="text-center text-xs font-medium text-[var(--color-text-primary)]">
                  {t.name}
                </p>
                <div className="mt-3 text-center">
                  <Link href={`/testimonials/${t.name.toLowerCase().replace(" ", "-")}`}>
                    <Button
                      type="link"
                      size="small"
                      icon={<ArrowRight className="h-3 w-3" />}
                      iconPosition="end"
                      style={{
                        color: "var(--primary-500)",
                        fontSize: "12px",
                      }}
                    >
                      Read Post
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--secondary-100) 0%, var(--accent-100) 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl font-light text-[var(--color-text-primary)]">
            Discover the{" "}
            <span className="italic" style={{ color: "var(--secondary-700)" }}>
              gorgeous shine
            </span>{" "}
            with us
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Naturally glowing skin is typically skin that is healthy and hydrated. People can work
            towards this by gradually implementing a skin care routine.
          </p>
          <Link href="/about">
            <Button
              size="large"
              style={{
                marginTop: "2rem",
                borderRadius: "9999px",
                paddingInline: "2.5rem",
                height: "48px",
                borderColor: "var(--primary-500)",
                color: "var(--primary-600)",
                backgroundColor: "white",
              }}
            >
              Read More
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}