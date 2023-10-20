import "./App.css";
import About from "./Pages/About";
import Proj from "./Pages/Projects";
import { HashLink as Link } from "react-router-hash-link";
import Qualifications from "./Pages/Qualifications";
import Contact from "./Pages/Contact";
import { useState, useEffect} from "react";


function App() {

  const [position, setPosition] = useState({
    x:null,
    y:null
  });

  useEffect(()=>{
    function handle(e) {
      setPosition({
        x: e.pageX,
        y: e.pageY
      });
    }
      document.addEventListener("pointermove", handle);
      document.getElementById("cursor").animate({
        left: `${position.x}px`,
        top: `${position.y}px`
      },{duration:10000, fill:"forwards"})
      return () => document.removeEventListener("mousemove", handle)
    
  });

  return (
    <div className="bg-background w-screen truncate relative ">
      <div className="grid-cols-2 ">
        <div className="z-10 max-[500px]:scale-0 vertical-lr fixed top-0 right-0 flex justify-evenly gap-20  h-screen pr-3 bg-secondary text-white pl-3 text-base border-l-2 border-primary font-bold">
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
        <div className="grid-cols-1 grid-rows-1 w-4/5 justify-items-center z-10">
          <About />
          <Qualifications />
          <Proj />
          <Contact />
          
        </div>
      </div>
      <div id="cursor" className="blob"/>

    </div>
  );
}

export default App;
