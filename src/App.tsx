import { Container } from "@/components/Container";
import { About } from "./sections/About";
import { Navbar } from "./components/Navbar";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import GetInTouch from "./sections/GetInTouch";
import TechStack from "./sections/TechStack";
import { Analytics } from "@vercel/analytics/react";


function App() {
  return (
    <div className=" w-full h-full bg-primary-color dark:bg-onyx dark-mode-transition">
      <Container className="bg-header relative">
        <Navbar />
        <About />
      </Container>
      <Container className="px-4 relative">
        <Experience />
      </Container>
      <Container>
        <TechStack />
        <GetInTouch />
      </Container>
      <Container className="bg-footer">
        <Footer />
      </Container>
      <Analytics />
    </div>
  );
}

export default App;
