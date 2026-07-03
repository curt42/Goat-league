import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black border-b border-yellow-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-3xl font-bold text-yellow-400">
          GOAT League
        </Link>

        <nav className="flex gap-6 text-white font-semibold">
          <Link href="/">Home</Link>
          <Link href="/register">Register</Link>
          <Link href="/schedule">Schedule</Link>
          <Link href="/standings">Standings</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}