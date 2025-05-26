const cardColors = [
  "from-blue-100 to-blue-50",
  "from-pink-100 to-pink-50",
  "from-green-100 to-green-50",
  "from-yellow-100 to-yellow-50",
  "from-purple-100 to-purple-50",
];

export default function AcademicsSection({ academics }) {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {academics.map((item, i) => (
        <div
          key={i}
          className={`p-6 rounded-xl shadow-md border border-transparent bg-gradient-to-br ${
            cardColors[i % cardColors.length]
          } transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 ease-in-out`}
        >
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-bold text-gray-800 tracking-tight">
              {item.title}
            </h2>
            <p className="text-gray-700 mt-1 font-medium">
              {item.institution} &mdash; {item.year}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
