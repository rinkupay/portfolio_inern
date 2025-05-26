export default function SkillsSection({ skills }) {
  return (
    <section className="flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <span key={i} className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">
          {skill}
        </span>
      ))}
    </section>
  );
}
