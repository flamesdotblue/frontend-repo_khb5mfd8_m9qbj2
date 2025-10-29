import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import PlanVisit from "./components/PlanVisit";

function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-emerald-800/80">
          © {new Date().getFullYear()} Marayoor Sandalwood Forest — For awareness & travel planning.
        </p>
        <a
          href="#about"
          className="text-sm font-medium text-emerald-800 hover:text-emerald-900"
        >
          Learn more
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-wide">Marayoor Sandalwood</a>
          <nav className="hidden gap-6 sm:flex text-sm">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#highlights" className="hover:text-emerald-700">Highlights</a>
            <a href="#plan" className="hover:text-emerald-700">Plan</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Highlights />
        <PlanVisit />
      </main>

      <Footer />
    </div>
  );
}
