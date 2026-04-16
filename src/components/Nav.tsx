import Link from "next/link";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/[0.06] bg-bg-deep/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Logo />
          <span className="text-lg font-semibold tracking-tight">
            FourWinds<span className="text-accent-light">Digital</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          <NavLink href="/#services">Services</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <Link
            href="/#contact"
            className="ml-4 cursor-pointer rounded-full bg-gradient-to-r from-accent to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-accent/40 hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-foreground-muted transition-colors duration-200 hover:bg-white/[0.04] hover:text-foreground"
    >
      {children}
    </Link>
  );
}
