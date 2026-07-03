export default function Register() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">

      <h1 className="text-5xl font-bold text-yellow-400">
        Player Registration
      </h1>

      <p className="mt-4 text-gray-300">
        Register now for the Fall 2026 GOAT League season.
      </p>

      <div className="mt-10 rounded-xl border border-yellow-500 p-8">

        <div className="grid gap-6">

          <input
            className="rounded bg-zinc-900 p-3 border border-zinc-700"
            placeholder="Full Name"
          />

          <input
            className="rounded bg-zinc-900 p-3 border border-zinc-700"
            placeholder="Email Address"
          />

          <input
            className="rounded bg-zinc-900 p-3 border border-zinc-700"
            placeholder="Phone Number"
          />

          <input
            className="rounded bg-zinc-900 p-3 border border-zinc-700"
            placeholder="Age"
          />

          <input
            className="rounded bg-zinc-900 p-3 border border-zinc-700"
            placeholder="Emergency Contact"
          />

          <select className="rounded bg-zinc-900 p-3 border border-zinc-700">
            <option>Playing Experience</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <select className="rounded bg-zinc-900 p-3 border border-zinc-700">
            <option>Jersey Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>

          <button className="bg-yellow-400 text-black font-bold rounded p-4 hover:bg-yellow-300">
            Submit Registration
          </button>

        </div>

      </div>

    </main>
  );
}