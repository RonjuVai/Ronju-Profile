import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-300 dark:text-gray-700">
        I’m a passionate learner and developer focused on building Android tools, AI apps,
        and creative coding projects. Always exploring new technologies 🚀
      </p>
      <div className="flex gap-4 mt-6 flex-wrap">
        {["Next.js", "React", "Android", "Python", "AI Tools"].map((skill) => (
          <span key={skill} className="bg-gray-800 dark:bg-gray-300 text-white dark:text-black px-4 py-2 rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
