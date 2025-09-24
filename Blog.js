export default function Blog() {
  const posts = [
    { title: "How I Built My AI Tools Website", date: "2025-09-01", link: "#" },
    { title: "My Journey with Android Development", date: "2025-08-15", link: "#" },
  ];

  return (
    <section id="blog" className="py-20 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <div className="space-y-6">
        {posts.map((post, i) => (
          <a key={i} href={post.link} className="block bg-gray-900 dark:bg-gray-200 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-400 dark:text-gray-600 text-sm">{post.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
