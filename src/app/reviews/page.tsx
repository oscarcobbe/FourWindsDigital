import type { Metadata } from "next";
import Link from "next/link";
import { Animate } from "@/components/Animate";

export const metadata: Metadata = {
  title: "Reviews | FourWinds Digital",
  description: "See what our clients say about working with FourWinds Digital.",
};

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Studio",
    quote:
      "FourWinds completely transformed how we run our business. They set up our Google Workspace, built a custom client dashboard, and integrated AI into our content workflow. What used to take us hours now takes minutes.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Director, Pacific Trade Co",
    quote:
      "We'd been burning money on Google Ads with no results. FourWinds rebuilt our campaigns from scratch and within a month our cost per lead dropped by 60%. They actually understand what businesses need.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Owner, Verde Wellness",
    quote:
      "I needed a website that looked professional and actually brought in bookings. They delivered in under two weeks — and it converts better than anything I've had before. The ongoing support is the cherry on top.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Operations Manager, Nexus Group",
    quote:
      "The workflow automation they built for us has saved our team about 15 hours a week. They connected our CRM, invoicing, and project management tools into one seamless system. Absolute game changer.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "CEO, Coastal Property Management",
    quote:
      "We needed someone who could handle everything technical — domain setup, email, website, the lot. FourWinds did it all, and they actually explain things in a way that makes sense. Highly recommend.",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    role: "Founder, Webb Creative Agency",
    quote:
      "As a creative agency, we needed a technical partner we could trust. FourWinds built us an admin dashboard that our whole team uses daily. They're responsive, reliable, and genuinely good at what they do.",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.05] blur-[150px]" />
        <div className="animate-float-slow absolute bottom-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-violet-600/[0.04] blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="grid-pattern relative px-6 pt-36 pb-20 lg:px-8 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Reviews</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              What our clients
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-violet-400 bg-clip-text text-transparent">
                have to say
              </span>
            </h1>
          </Animate>
          <Animate delay={150}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
              We let our work speak for itself. Here&apos;s what people say about working with
              FourWinds Digital.
            </p>
          </Animate>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="gradient-border grid grid-cols-2 overflow-hidden rounded-2xl bg-bg-elevated/40 shadow-xl shadow-black/20 backdrop-blur-sm sm:grid-cols-4">
              <ReviewStat value="50+" label="Projects completed" />
              <ReviewStat value="5.0" label="Average rating" />
              <ReviewStat value="100%" label="Client satisfaction" />
              <ReviewStat value="90%" label="Repeat clients" />
            </div>
          </Animate>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {reviews.map((review, i) => (
              <Animate key={review.name} delay={i * 100}>
                <ReviewCard {...review} />
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="gradient-border relative overflow-hidden rounded-3xl bg-bg-elevated/40 shadow-xl shadow-black/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-violet-500/[0.03]" aria-hidden="true" />
              <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to join them?
                </h2>
                <p className="mx-auto mt-4 max-w-md text-foreground-muted">
                  Let&apos;s talk about your project. No pressure, no lock-in contracts.
                </p>
                <div className="mt-8">
                  <Link
                    href="/#contact"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-accent to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
                  >
                    Start a project
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}

function ReviewStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-r border-b border-white/[0.04] p-8 text-center last:border-r-0 sm:[&:nth-child(4)]:border-r-0 [&:nth-child(n+3)]:border-b-0 sm:[&:nth-child(n+1)]:border-b-0">
      <p className="text-3xl font-bold tracking-tight">{value}</p>
      <p className="mt-1.5 text-xs font-medium text-foreground-muted">{label}</p>
    </div>
  );
}

function ReviewCard({
  name,
  role,
  quote,
  rating,
}: {
  name: string;
  role: string;
  quote: string;
  rating: number;
}) {
  return (
    <div className="group gradient-border mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-bg-elevated/50 p-7 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 text-amber-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      {/* Quote */}
      <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
        &ldquo;{quote}&rdquo;
      </p>
      {/* Author */}
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 text-xs font-bold text-accent-light">
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-foreground-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}
