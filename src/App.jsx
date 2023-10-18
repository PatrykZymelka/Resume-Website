import "./App.css";
import About from "./Pages/About";
import Proj from "./Pages/Projects";
import { HashLink as Link } from "react-router-hash-link";
import Qualifications from "./Pages/Qualifications";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="bg-background h-screen w-screen overflow-x-hidden overflow-y-scroll truncate">
      <div className="grid-cols-2">
        <div className="vertical-lr fixed top-0 right-0 flex justify-evenly  h-screen pr-3 bg-secondary text-white pl-3 text-base border-l-2 border-primary font-bold">
          <Link to="#About" smooth>
            About
          </Link>
          <Link to="#Qualifications" smooth>
            Qualifications
          </Link>
          <Link to="#Project" smooth>
            Projects
          </Link>
          <Link to="#Contact" smooth>
            Contact
          </Link>
        </div>
        <div className="grid-cols-1 grid-rows-1 w-4/5 justify-items-center">
          <About />
          <Qualifications />
          <Proj />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
