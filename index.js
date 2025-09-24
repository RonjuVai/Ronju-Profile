import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ronju — Developer Portfolio</title>
        <meta name="description" content="Ronju — App & Tool Developer Learner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
