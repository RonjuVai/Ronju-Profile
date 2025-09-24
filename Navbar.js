import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 dark:bg-gray-100 sticky top-0 z-50">
      <h1 className="text-2xl font-bold dark:text-black">Ronju.dev</h1>
      <div className="flex items-center space-x-6">
        <a href="#about" className="hover:text-teal-400">About</a>
        <a href="#projects" className="hover:text-teal-400">Projects</a>
        <a href="#blog" className="hover:text-teal-400">Blog</a>
        <a href="#contact" className="hover:text-teal-400">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
