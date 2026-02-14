import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Skills from "../pages/Skills.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About";
import Resume from "../pages/Resume";


export default function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} /> {/* ✅ ICI */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
