export default function Footer({ name }) {
  return (
    <footer className="text-center text-sm text-gray-500 mt-12 py-6">
      &copy; {new Date().getFullYear()} {name}. All rights reserved.
      <div className="mt-2 space-x-4">
        <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        <a href="mailto:john@example.com" className="text-blue-600 hover:underline">Email</a>
        <a href="/resume.pdf" download className="text-blue-600 hover:underline">Download Resume</a>
      </div>
    </footer>
  );
}
