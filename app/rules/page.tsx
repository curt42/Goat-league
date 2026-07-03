export default function Rules() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-yellow-400">
        League Rules
      </h1>

      <div className="mt-10 space-y-8">

        <div className="rounded-xl border border-yellow-500 p-6">
          <h2 className="text-2xl font-bold">Eligibility</h2>
          <p className="mt-3 text-gray-300">
            GOAT League is a men's adult lacrosse league for players ages 18–40.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-500 p-6">
          <h2 className="text-2xl font-bold">Equipment</h2>
          <p className="mt-3 text-gray-300">
            All required lacrosse equipment must be worn during games, including a helmet, gloves, shoulder pads, arm pads, mouthguard, and protective cup.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-500 p-6">
          <h2 className="text-2xl font-bold">Sportsmanship</h2>
          <p className="mt-3 text-gray-300">
            Respect teammates, officials, and opponents. Unsportsmanlike conduct may result in penalties or suspension.
          </p>
        </div>

      </div>
    </main>
  );
}