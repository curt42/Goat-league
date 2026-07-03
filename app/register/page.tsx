export default function Register() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-400">
          Player Registration
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Register now for the Fall 2026 GOAT League season.
        </p>

        <div className="mt-10 rounded-2xl border border-yellow-500 bg-zinc-900 p-8 shadow-2xl">

          <div className="grid gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
            />

            <input
              type="number"
              placeholder="Age"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Emergency Contact"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none"
            />

            <select
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 text-white focus:border-yellow-400 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Playing Experience
              </option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <select
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-4 text-white focus:border-yellow-400 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Jersey Size
              </option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>

            <button className="mt-4 rounded-lg bg-yellow-400 py-4 text-lg font-bold text-black transition hover:bg-yellow-300">
              Submit Registration
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}