import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold"
      >
        Hi, I’m <span className="text-teal-400">Ronju</span> 👋
      </motion.h1>
      <p className="mt-4 text-xl text-gray-400 dark:text-gray-700">
        App & Tool Developer Learner | Building Ideas with Code
      </p>
    </section>
  );
}
