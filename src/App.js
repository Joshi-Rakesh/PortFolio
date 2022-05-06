import "./App.css";
import React, { useContext } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { theme } from "./context/themeContext";

function App() {
  const { themevalue } = useContext(theme);
  return (
    <div
      style={{
        background: themevalue ? "#F5F6F7" : "#202225",
        color: themevalue ? "#202225" : "#F5F6F7",
        transition: " 0.5s all ease-in-out",
      }}
    >
      <Navbar />
      <Header />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
