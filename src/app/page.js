import './globals.css'
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
    <div className="bg-slate-100">
      <HeroSection />
    </div>
    <About />
    <div className="bg-slate-100">
      <Project />
    </div>
    <Contact />
    <Footer />
  </main>
  );
}
