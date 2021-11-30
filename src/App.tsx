import React from "react";
import "./App.css";
import Header from "./Header";
import City from "./City";
import Bio from "./Bio";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <City />
      <Bio />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
