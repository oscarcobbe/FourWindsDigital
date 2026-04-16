import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="text-lg font-semibold tracking-tight">
                FourWinds<span className="text-accent-light">Digital</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
              Enhance what you know.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-foreground-muted uppercase">
                Company
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <FooterLink href="/#services">Services</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/reviews">Reviews</FooterLink>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-foreground-muted uppercase">
                Connect
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <FooterLink href="/#contact">Contact</FooterLink>
                <FooterLink href="mailto:info@smart-space.ie">Email</FooterLink>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} FourWinds Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="cursor-pointer text-sm text-foreground-muted transition-colors duration-200 hover:text-foreground"
    >
      {children}
    </Link>
  );
}
