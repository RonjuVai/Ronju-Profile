export default function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-900 dark:bg-gray-100 mt-10">
      <p className="text-gray-400 dark:text-gray-700">
        © {new Date().getFullYear()} Ronju.dev — All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-3">
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-teal-400">GitHub</a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-teal-400">LinkedIn</a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer" className="hover:text-teal-400">Twitter</a>
      </div>
    </footer>
  );
}
