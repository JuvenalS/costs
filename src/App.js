import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contato from "./components/pages/Contato";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/*"
          element={
            <Container customClass="min-height">
              <Routes>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="company" element={<Company />} />
                <Route path="contato" element={<Contato />} />
                <Route path="newproject" element={<NewProject />} />
              </Routes>
            </Container>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
