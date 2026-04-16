import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Animate } from "@/components/Animate";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float absolute -top-40 left-1/3 h-[700px] w-[700px] rounded-full bg-indigo-600/[0.06] blur-[150px]" />
        <div className="animate-float-slow absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-violet-600/[0.04] blur-[120px]" />
        <div className="animate-float absolute -bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-blue-600/[0.04] blur-[120px]" />
      </div>

      {/* ── HERO ── */}
      <section className="grid-pattern relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 lg:px-8">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-accent/[0.08] to-transparent blur-[80px]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <Animate>
            <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 shadow-lg shadow-black/20 backdrop-blur-sm">
              <span className="animate-pulse-glow h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
                Available for new projects
              </span>
            </div>
          </Animate>

          <Animate delay={100}>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight">
              We build the tech
              <br />
              <span className="animate-shimmer bg-gradient-to-r from-accent via-violet-400 to-accent bg-clip-text text-transparent">
                that grows your business
              </span>
            </h1>
          </Animate>

          <Animate delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
              Google Ads, AI integration, custom dashboards, workflow automation — we handle the digital
              infrastructure so you can focus on your customers.
            </p>
          </Animate>

          <Animate delay={300}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="group relative cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-accent to-indigo-500 px-10 py-4 text-base font-semibold text-white shadow-xl shadow-accent/25 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="cursor-pointer rounded-full border border-white/[0.08] bg-white/[0.02] px-10 py-4 text-base font-medium text-foreground-muted shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-200 hover:border-white/[0.15] hover:text-foreground hover:shadow-xl"
              >
                See Our Work
              </a>
            </div>
          </Animate>

          <Animate delay={500}>
            <div className="mx-auto mt-20 flex max-w-lg items-center justify-center gap-12 border-t border-white/[0.06] pt-10 sm:gap-16">
              <HeroStat value="50+" label="Projects" />
              <div className="h-8 w-px bg-white/[0.06]" />
              <HeroStat value="6" label="Services" />
              <div className="h-8 w-px bg-white/[0.06]" />
              <HeroStat value="100%" label="Hands-on" />
            </div>
          </Animate>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/[0.12] p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-widest text-accent uppercase">Services</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">What we do</h2>
              </div>
              <p className="max-w-md text-foreground-muted">
                Everything your business needs to operate, grow, and scale digitally.
              </p>
            </div>
          </Animate>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {/* Featured AI card */}
            <Animate delay={100} className="row-span-2">
              <div className="gradient-border group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-bg-elevated/60 p-8 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:bg-bg-elevated/80 hover:shadow-2xl hover:shadow-accent/10 lg:p-10">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/[0.08] blur-[60px] transition-all duration-700 group-hover:scale-150 group-hover:bg-accent/[0.15]" aria-hidden="true" />
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light shadow-lg shadow-accent/10">
                    <SparklesIcon />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">AI Integration</h3>
                  <p className="mt-3 leading-relaxed text-foreground-muted">
                    Bring AI into your workflows. We integrate tools like ChatGPT, Claude, and custom AI solutions
                    into your existing business processes. Automate decisions, generate content, and work smarter.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent-light transition-all duration-300 group-hover:gap-3">
                  <span>Our specialty</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Animate>

            <Animate delay={200}>
              <BentoCard icon={<ChartIcon />} title="Google Ads" description="Data-driven campaigns that bring in the right customers. Every dollar optimised." />
            </Animate>
            <Animate delay={300}>
              <BentoCard icon={<GlobeIcon />} title="Website Creation" description="Fast, modern sites built to convert. Landing pages to full web apps." />
            </Animate>
            <Animate delay={400}>
              <BentoCard icon={<DashboardIcon />} title="Admin Dashboards" description="Custom dashboards to track metrics, manage content, and run operations." />
            </Animate>
            <Animate delay={500}>
              <BentoCard icon={<WorkflowIcon />} title="Workflow Automation" description="Connect your tools, eliminate busywork, and automate the repetitive stuff." />
            </Animate>
          </div>

          {/* Full-width Business Tech */}
          <Animate delay={200}>
            <div className="gradient-border group mt-3 overflow-hidden rounded-2xl bg-bg-elevated/60 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:bg-bg-elevated/80 hover:shadow-2xl">
              <div className="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center lg:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-foreground-muted transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent-light group-hover:shadow-lg group-hover:shadow-accent/10">
                    <WrenchIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">Business Tech Setup</h3>
                    <p className="mt-1 max-w-lg text-sm text-foreground-muted">
                      Google Workspace, email, domains, DNS, hosting — the full technical infrastructure your
                      business runs on, set up and managed for you.
                    </p>
                  </div>
                </div>
                <a href="#contact" className="cursor-pointer whitespace-nowrap rounded-full border border-white/[0.08] px-6 py-2.5 text-sm font-medium text-foreground-muted shadow-md shadow-black/10 transition-all duration-300 hover:border-accent/30 hover:text-foreground hover:shadow-lg hover:shadow-accent/10">
                  Learn more
                </a>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="relative px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="text-center">
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">How it works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Three steps. That&apos;s it.
              </h2>
            </div>
          </Animate>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-3">
              <Animate delay={100}>
                <ProcessCard number="01" title="Discovery" description="We talk about your business, your goals, and what's slowing you down. No jargon, just a clear conversation." gradient="from-blue-500/20 to-transparent" />
              </Animate>
              <Animate delay={250}>
                <ProcessCard number="02" title="Build" description="We get to work. You'll see progress fast — not months of waiting. We keep you in the loop every step." gradient="from-accent/20 to-transparent" />
              </Animate>
              <Animate delay={400}>
                <ProcessCard number="03" title="Launch & Support" description="We launch it, make sure everything works, and stick around to help. Your tech should just work." gradient="from-violet-500/20 to-transparent" />
              </Animate>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section id="about" className="relative px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="gradient-border relative overflow-hidden rounded-3xl bg-bg-elevated/40 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-violet-500/[0.03]" aria-hidden="true" />
              <div className="relative grid lg:grid-cols-2">
                <div className="flex flex-col justify-center border-b border-white/[0.06] p-10 lg:border-r lg:border-b-0 lg:p-16">
                  <p className="text-sm font-semibold tracking-widest text-accent uppercase">About</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl">
                    Your technical partner,
                    <br />
                    not a vendor
                  </h2>
                  <p className="mt-6 leading-relaxed text-foreground-muted">
                    FourWinds Digital exists because too many businesses struggle with the technical side.
                    You know what you need — we&apos;re the ones who actually build it and make it work.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/about"
                      className="group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-accent-light transition-all duration-300 hover:gap-3 hover:text-accent"
                    >
                      Read more about us
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-white/[0.03]">
                  <StatBlock value="50+" label="Projects delivered" />
                  <StatBlock value="24h" label="Avg response time" />
                  <StatBlock value="100%" label="Hands-on involvement" />
                  <StatBlock value="0" label="Lock-in contracts" />
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="relative px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Animate>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-bg-elevated/80 to-bg-deep shadow-2xl shadow-black/40">
              <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
              </div>
              <div className="grid-pattern relative px-8 py-24 text-center sm:px-16 sm:py-32">
                <LogoMark />
                <div className="mx-auto mt-4 flex justify-center">
                  <div className="h-px w-12 bg-accent/40" />
                </div>
                <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Let&apos;s build something
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-lg text-foreground-muted">
                  Tell us what you need. No pressure, no lock-in contracts, no tech jargon.
                </p>
                <div className="mt-12">
                  <a
                    href="mailto:info@smart-space.ie"
                    className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-accent to-indigo-500 px-10 py-4.5 text-base font-semibold text-white shadow-xl shadow-accent/25 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40"
                  >
                    <span className="relative z-10">info@smart-space.ie</span>
                    <svg className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}

/* ─── Components ─── */

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold tracking-tight sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium text-foreground-muted">{label}</p>
    </div>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 transition-colors duration-300 hover:bg-white/[0.02] lg:p-10">
      <p className="text-3xl font-bold tracking-tight">{value}</p>
      <p className="mt-2 text-xs font-medium text-foreground-muted">{label}</p>
    </div>
  );
}

function BentoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="gradient-border group h-full overflow-hidden rounded-2xl bg-bg-elevated/60 p-7 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:bg-bg-elevated/80 hover:shadow-2xl hover:shadow-accent/[0.06]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-foreground-muted transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent-light group-hover:shadow-lg group-hover:shadow-accent/10">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{description}</p>
    </div>
  );
}

function ProcessCard({ number, title, description, gradient }: { number: string; title: string; description: string; gradient: string }) {
  return (
    <div className="gradient-border group relative h-full overflow-hidden rounded-2xl bg-bg-elevated/40 p-8 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:bg-bg-elevated/60 hover:shadow-2xl lg:p-10">
      <div className={`absolute -top-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} blur-[40px] transition-all duration-700 group-hover:scale-[2] group-hover:opacity-80`} aria-hidden="true" />
      <span className="relative font-mono text-5xl font-bold text-white/[0.06] transition-all duration-500 group-hover:text-accent/[0.12]">{number}</span>
      <h3 className="relative mt-4 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-foreground-muted">{description}</p>
    </div>
  );
}

/* ─── Icons ─── */

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.467.732-3.558" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
    </svg>
  );
}
