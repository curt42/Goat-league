import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#003DA5] shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide text-[#FDB927]"
        >
          GOAT League
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-lg font-semibold">
          <Link href="/" className="text-white transition hover:text-[#FDB927]">
            Home
          </Link>

          <Link
            href="/register"
            className="text-white transition hover:text-[#FDB927]"
          >
            Register
          </Link>

          <Link
            href="/schedule"
            className="text-white transition hover:text-[#FDB927]"
          >
            Schedule
          </Link>

          <Link
            href="/standings"
            className="text-white transition hover:text-[#FDB927]"
          >
            Standings
          </Link>

          <Link
            href="/rules"
            className="text-white transition hover:text-[#FDB927]"
          >
            Rules
          </Link>

          <Link
            href="/contact"
            className="text-white transition hover:text-[#FDB927]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}