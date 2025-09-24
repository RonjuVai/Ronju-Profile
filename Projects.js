export default function Projects() {
  const projects = [
    { title: "AI Tools Website", desc: "A web app with multiple AI tools built in.", link: "#" },
    { title: "Android Utility App", desc: "All-in-one mobile toolset.", link: "#" },
    { title: "Portfolio Site", desc: "This website itself.", link: "#" }
  ];

  return (
    <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 dark:bg-gray-200 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 dark:text-gray-600 mt-2">{p.desc}</p>
            <a href={p.link} className="text-teal-400 mt-4 inline-block">View →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
