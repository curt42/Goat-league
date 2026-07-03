import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-6xl font-extrabold text-yellow-400">
          GOAT League
        </h1>

        <p className="mt-6 text-2xl font-semibold">
          Men's Adult Lacrosse League
        </p>

        <p className="mt-2 text-lg text-gray-300">
          Lexington, South Carolina
        </p>

        <p className="mt-8 text-xl">
          🥍 Fall 2026 Season
        </p>

        <p className="mt-2 text-3xl font-bold text-yellow-400">
          Registration: $150
        </p>

        <div className="mt-10">
          <Link
            href="/register"
            className="rounded-lg bg-yellow-400 px-8 py-4 text-xl font-bold text-black hover:bg-yellow-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          About GOAT League
        </h2>

        <p className="text-lg text-gray-300 leading-8">
          GOAT League is an adult men's lacrosse league for players ages 18–40.
          Whether you're fresh out of college, returning to the sport, or just
          looking for competitive games, GOAT League provides a high-energy,
          organized league in Lexington, South Carolina.
        </p>
      </section>

      {/* Season Info */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="rounded-xl border border-yellow-500 p-6 text-center">
            <h3 className="text-2xl font-bold text-yellow-400">
              Registration
            </h3>
            <p className="mt-4 text-4xl font-bold">$150</p>
          </div>

          <div className="rounded-xl border border-yellow-500 p-6 text-center">
            <h3 className="text-2xl font-bold text-yellow-400">
              Season
            </h3>
            <p className="mt-4 text-4xl font-bold">
              Fall 2026
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500 p-6 text-center">
            <h3 className="text-2xl font-bold text-yellow-400">
              Location
            </h3>
            <p className="mt-4 text-2xl">
              Lexington, SC
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}