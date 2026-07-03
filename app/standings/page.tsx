export default function Standings() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-5xl font-bold text-yellow-400">
        League Standings
      </h1>

      <table className="w-full mt-10 border border-yellow-500">

        <thead className="bg-yellow-400 text-black">

          <tr>
            <th className="p-3">Team</th>
            <th>W</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>PTS</th>
          </tr>

        </thead>

        <tbody>

          <tr className="text-center border-t border-yellow-500">
            <td className="p-4" colSpan={6}>
              Standings will appear once the season begins.
            </td>
          </tr>

        </tbody>

      </table>

    </main>
  );
}