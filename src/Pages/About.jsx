import "./styles.css"
import { ReactDOM } from "react";
import { useState, useEffect} from "react";

function About() {
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
      document.addEventListener("mousemove", handle);
      return () => document.removeEventListener("mousemove", handle)
    
  });
  
  return (
    <div className="h-screen w-screen text-white max-[500px]:px-4 px-20 py-28 grid " id="About">
      <div className="max-[500px]:w-fit max-[500px]:text-center overflow-x-hidden h-auto mr-0 object-contain">
        <h1 className="whitespace-pre-line">
          {"Hello, I'm"}
          </h1>
          <h1 className="py-5 max-[500px]:pt-0 max-[500px]:pb-5 whitespace-pre-line text-transparent bg-clip-text max-[750px]:text-5xl max-[500px]:text-4xl text-9xl font-bold bg-gradient-to-l from-blue-700 via-sky-300 to-blue-700 bg-300% animate-gradient">
            Patryk Żymełka
          </h1>
          <h1 className="whitespace-pre-line">
          Third year Computer and Electronics Engineering student at
          Politechnika Wrocławska, Poland.
        </h1>
      </div>
      <div id="back" className="justify-self-center bg-white rounded-md w-5/6">
      <div className="innerCard">
        <h1>About</h1>
        <h1>MEMEMEMEMEME</h1>
        
      </div>
      </div>
    </div>
  );
}
export default About;

