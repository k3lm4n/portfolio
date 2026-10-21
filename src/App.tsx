import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Timeline } from "./sections/Timeline";
import { Projects } from "./sections/Projects";
import { TechStack } from "./sections/TechStack";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div className="page-glow min-h-screen bg-bg text-fg">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
