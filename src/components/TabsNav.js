export default function TabsNav({ tabs, activeTab, onChange }) {
  return (
    <nav className="flex flex-wrap justify-center md:justify-start gap-6 border-b pb-4 " aria-label="Main Navigation">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`text-sm md:text-base font-semibold pb-2 border-b-2 cursor-pointer transition-colors focus:outline-none focus-visible:ring focus-visible:ring-blue-300 ${
            activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent hover:text-blue-500"
          }`}
          onClick={() => onChange(tab)}
          aria-current={activeTab === tab ? "page" : undefined}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
