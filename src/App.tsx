import { Container } from "@/components/Container";
import { Home } from "./sections/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./sections/Footer";
import Timeline from "./sections/Timeline";
import BookInterview from "./sections/BookInterview";
import GetInTouch from "./sections/GetInTouch";

function App() {
  return (
    <div className="bg-[#F1F4FC] w-full h-full">
      <Container className="bg-header">
        <Navbar />
        <Home />
      </Container>

      <Container>
        <Timeline />
        <BookInterview />
        <GetInTouch />
      </Container>
      <Container className="bg-footer">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
