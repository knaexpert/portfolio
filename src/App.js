import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const body = document.querySelector("body");
    const handleMouseMove = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      setPosition({ x, y });
    };
    body.addEventListener("mousemove", handleMouseMove);
    return () => {
      body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        id="fixed-layout"
        style={{
          background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/skills" Component={Skills} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
