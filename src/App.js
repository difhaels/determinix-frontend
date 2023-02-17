import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "./components/css/Main.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/main"
          element={
            <div className="">
              <Home />
            </div>
          }
        />
        <Route
          path="/project"
          element={
            <div className="project">
              <Project />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

/* <div className="bg-[#f9f8f8]"></div> */
