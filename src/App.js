import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Home2 from "./components/Home-mobile";
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
          path="/"
          element={
            <div>
              <Home />
              <Home2 />
            </div>
          }
        />
        <Route
          path="/project"
          element={
            <div className="bg">
              <Project />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="bg">
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
