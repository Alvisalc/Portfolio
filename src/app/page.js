import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <Navbar />
    <div class="container mt-24 mx-auto px-12 py-4">
    <HeroSection />
    </div>
    </main>
  );
}
