export default function ExtrasSection({ extras }) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 text-blue-700 tracking-tight">Goals</h2>
        <p className="text-gray-700 leading-relaxed">{extras.goals}</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 text-blue-700 tracking-tight">Hobbies</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {extras.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
      </div>
      <div className="bg-white p-5 rounded-lg shadow md:col-span-2">
        <h2 className="text-lg font-semibold mb-2 text-blue-700 tracking-tight">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {extras.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
        </ul>
      </div>
    </section>
  );
}
