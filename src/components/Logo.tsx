export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const s = size === "large" ? "h-10 w-10" : "h-8 w-8";
  return (
    <div className={`relative ${s}`}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          <linearGradient id="logo-gold" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8a6b1f" />
            <stop offset="0.35" stopColor="#e8d48b" />
            <stop offset="0.65" stopColor="#f5e5a8" />
            <stop offset="1" stopColor="#9a7b2c" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#0d0d5e" />
        {/* Penrose impossible triangle — three interlocking bars */}
        <g
          stroke="url(#logo-gold)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        >
          {/* Outer triangle */}
          <path d="M 32 10 L 8 52 L 56 52 Z" />
          {/* Three inner bars creating the impossible illusion */}
          {/* Left bar inner edge: from right-outer to bottom-outer */}
          <path d="M 38 20 L 18 52" />
          {/* Bottom bar inner edge: from left-outer to right-outer */}
          <path d="M 14 44 L 46 44" />
          {/* Right bar inner edge: from bottom-outer to left-outer */}
          <path d="M 48 52 L 32 24" />
          {/* Inner triangle hints (short caps at corners to suggest depth) */}
          <path d="M 32 24 L 38 20" />
          <path d="M 18 52 L 14 44" />
          <path d="M 46 44 L 48 52" />
        </g>
      </svg>
    </div>
  );
}

export function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8">
      <g
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      >
        <path d="M 32 10 L 8 52 L 56 52 Z" />
        <path d="M 38 20 L 18 52" />
        <path d="M 14 44 L 46 44" />
        <path d="M 48 52 L 32 24" />
        <path d="M 32 24 L 38 20" />
        <path d="M 18 52 L 14 44" />
        <path d="M 46 44 L 48 52" />
      </g>
    </svg>
  );
}
