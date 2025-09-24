export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-300 dark:text-gray-700 mb-6">
        Feel free to reach out for collaborations or just a friendly hello! 👇
      </p>
      <a
        href="mailto:yourname@email.com"
        className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg text-lg font-semibold"
      >
        Say Hello
      </a>
    </section>
  );
}
