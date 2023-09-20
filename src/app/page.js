import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12 py-4">
    <Navbar />
    <HeroSection />
    </main>
    
  );
}
