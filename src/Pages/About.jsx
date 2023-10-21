import "./styles.css"

function About() {
  
  return (
    <div className="h-screen w-screen text-white max-[500px]:px-4 px-20 max-[500px]:my-2 my-14 grid" id="About">
      <div className="max-[500px]:w-fit max-[500px]:text-center h-fit mr-0 object-contain z-10 row-span-1">
        <h1 className="whitespace-pre-line">
          {"Hello, I'm"}
          </h1>
          <h1 className="py-5 max-[500px]:pt-0 max-[500px]:pb-5 duration-[2000ms]  whitespace-pre-line text-transparent bg-clip-text max-[750px]:text-5xl max-[500px]:text-4xl text-9xl font-bold bg-gradient-to-l from-blue-700 via-cyan-400 to-blue-700 bg-300% animate-gradient">
            Patryk Żymełka
          </h1>
          <h1 className="whitespace-pre-line">
          Third year student at Politechnika Wrocławska, Poland.
        </h1>
      </div>
      <div id="back" className="row-span-2 max-[500px]:mt-5 h-fit  justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md w-5/6 z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
      <div className="innerCard">
        <div className="max-[500px]:overflow-y-scroll bg-gradient-to-l from-blue-100 via-green-100 to-blue-100 text-transparent h-300px hover:bg-gradient-to-l hover:from-blue-400 hover:via-green-100 hover:to-blue-400 bg-clip-text hover:duration-1000 duration-1000">
          <h1 className="max-[1000px]:text-lg font-bold text-5xl min-[500px]:my-10 pb-0 ">About</h1>
          <h1 className="whitespace-pre-line min-[1200px]:text-2xl mx-24 max-[1200px]:m-4 mb-10 "> I'm a young and creative engineer and developer who loves to program, tinker and draw. Currently I'm studying Electrical and Computer Engineering in english at Politechnika Wrocławska, Poland. My passions lay in front-end development, aplication development, web development and computer networks. My biggest strength is my persistance, I'm alwyas open and eager to learn new things that will help me in the future. I take pride in my work and always strive to do my best. </h1>
        </div>
      </div>
      </div>
    </div>
  );
}
export default About;

