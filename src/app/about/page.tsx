import type { Metadata } from "next";
import Link from "next/link";
import { Animate } from "@/components/Animate";

export const metadata: Metadata = {
  title: "About | FourWinds Digital",
  description: "Learn about FourWinds Digital — your AI integration and business technology partner.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.05] blur-[150px]" />
        <div className="animate-float-slow absolute bottom-1/3 -left-20 h-[400px] w-[400px] rounded-full bg-violet-600/[0.04] blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="grid-pattern relative px-6 pt-36 pb-20 lg:px-8 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">About Us</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              We make tech
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-violet-400 bg-clip-text text-transparent">
                work for businesses
              </span>
            </h1>
          </Animate>
          <Animate delay={150}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
              FourWinds Digital is a one-stop shop for businesses that need the technical side
              handled — properly, personally, and without the runaround.
            </p>
          </Animate>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <Animate>
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The short version</h2>
                <div className="mt-6 space-y-5 text-foreground-muted leading-relaxed">
                  <p>
                    Too many businesses know exactly what they need — more leads, a better website,
                    smoother operations — but struggle to actually get it done. They end up bouncing
                    between freelancers, agencies, and tools that don&apos;t talk to each other.
                  </p>
                  <p>
                    FourWinds Digital exists to fix that. We&apos;re the technical partner who actually
                    builds the thing, sets it up, and makes sure it works. No middlemen, no
                    overcomplicating things, no disappearing after launch.
                  </p>
                  <p>
                    Whether it&apos;s running your Google Ads, building a custom admin dashboard,
                    integrating AI into your workflow, or setting up your entire Google Workspace —
                    we handle it all under one roof.
                  </p>
                </div>
              </div>
            </Animate>
            <div className="grid grid-cols-2 gap-3">
              <Animate delay={0}>
                <ValueCard
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  }
                  title="Hands-on"
                  description="You work directly with the person building your project."
                />
              </Animate>
              <Animate delay={100}>
                <ValueCard
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                  }
                  title="Fast"
                  description="We move quickly. You'll see progress in days, not months."
                />
              </Animate>
              <Animate delay={200}>
                <ValueCard
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  }
                  title="Reliable"
                  description="We stick around after launch to make sure everything keeps working."
                />
              </Animate>
              <Animate delay={300}>
                <ValueCard
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                  }
                  title="Results-first"
                  description="Every decision is about growing your business, not just looking good."
                />
              </Animate>
            </div>
          </div>
        </div>
      </section>

      {/* What we work with */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="gradient-border overflow-hidden rounded-3xl bg-bg-elevated/40 p-10 shadow-xl shadow-black/20 backdrop-blur-sm lg:p-16">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Tools & platforms we work with</h2>
              <p className="mt-3 max-w-lg text-foreground-muted">
                We&apos;re platform-agnostic — we use whatever works best for your situation.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Google Ads", "Google Workspace", "Next.js", "React", "Vercel",
                  "OpenAI / ChatGPT", "Claude AI", "Zapier", "Make.com", "Stripe",
                  "Tailwind CSS", "Firebase", "Supabase", "Shopify", "WordPress",
                  "Figma", "n8n", "Google Analytics",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm text-foreground-muted transition-colors duration-300 hover:border-accent/20 hover:text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <Animate>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Want to work together?</h2>
            <p className="mt-4 text-foreground-muted">
              Let&apos;s have a conversation about what you need.
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-accent to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
              >
                Get in touch
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Animate>
      </section>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group gradient-border rounded-2xl bg-bg-elevated/40 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-foreground-muted transition-colors duration-500 group-hover:text-accent-light">
        {icon}
      </div>
      <h3 className="mt-4 text-sm font-semibold">{title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-foreground-muted">{description}</p>
    </div>
  );
}
