import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 text-gray-900">

      {/* Hero */}
      <section className="bg-[#003DA5] text-white py-24 px-6 text-center">
        <h1 className="text-6xl font-extrabold text-[#FDB927]">
          GOAT League
        </h1>

        <p className="mt-6 text-2xl font-semibold">
          Men's Adult Lacrosse League
        </p>

        <p className="mt-2 text-lg text-blue-100">
          Lexington High School, Lexington, South Carolina
        </p>

        <p className="mt-8 text-xl">
          🥍 Fall 2026 Season
        </p>

        <p className="mt-2 text-3xl font-bold text-[#FDB927]">
          Registration: $150
        </p>

        <div className="mt-10">
          <Link
            href="/register"
            className="rounded-lg bg-[#FDB927] px-8 py-4 text-xl font-bold text-[#003DA5] transition hover:bg-yellow-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-[#003DA5] mb-6">
          About GOAT League
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          GOAT League is an adult men's lacrosse league for players ages 18+.
          Whether you're fresh out of college, returning to the sport, or just
          looking for competitive games, GOAT League provides a high-energy,
          organized league at Lexington High School, Lexington, South Carolina. The season will be 9 weeks long, garenteeing 10 games for every team. Week 9 will be a tournament to determine the league champion. The winning team will receive a trophy, championship t-shirts, and a grand prize. The league is designed to be competitive, but also fun and social. Players of all skill levels are welcome, and the league emphasizes sportsmanship and camaraderie.
        </p>
      </section>

      {/* Season Info */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid gap-8 px-6 md:grid-cols-3">

          <div className="rounded-xl border-t-8 border-[#FDB927] bg-white p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-[#003DA5]">
              Registration
            </h3>

            <p className="mt-4 text-5xl font-extrabold text-[#FDB927]">
              $150
            </p>
          </div>

          <div className="rounded-xl border-t-8 border-[#FDB927] bg-white p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-[#003DA5]">
              Season
            </h3>

            <p className="mt-4 text-4xl font-bold">
              Fall 2026
            </p>
          </div>

          <div className="rounded-xl border-t-8 border-[#FDB927] bg-white p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-[#003DA5]">
              Location
            </h3>

            <p className="mt-4 text-2xl font-semibold">
              Lexington, SC
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}