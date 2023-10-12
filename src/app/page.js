
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Project from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (

  <main className="flex min-h-screen flex-col">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <About />
      <Project />
      <Contact />
    </div>
    <Footer />
  </main>

  );
}
