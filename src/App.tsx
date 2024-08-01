import { Container } from "@/components/Container";
import { About } from "./sections/About";
import { Navbar } from "./components/Navbar";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import GetInTouch from "./sections/GetInTouch";
import TechStack from "./sections/TechStack";
import ReactGA from 'react-ga4';


function App() {

  ReactGA.initialize('G-TLS1J632ZF');
  
  return (
    <div className="bg-[#F1F4FC] w-full h-full">
      <Container className="bg-header relative">
        <Navbar />
        <About />
      </Container>
      <Container className="px-4">
        <Experience />
      </Container>
      <Container>
        <TechStack />
        <GetInTouch />
      </Container>
      <Container className="bg-footer">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
