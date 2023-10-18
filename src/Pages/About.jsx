function About() {
  return (
    <div className="h-screen w-screen text-white px-20 pt-28 " id="About">
      <div className="w-4/5 border-2 pl-4 border-accent h-3/4 overflow-x-auto mr-0 object-contain">
        <p className="break-all">
          Hello, I'm
          <br />
          <span className="text-transparent bg-clip-text text-5xl pt-2 pb-2 font-bold bg-gradient-to-l from-blue-700 via-sky-300 to-blue-700 bg-300% animate-gradient">
            Patryk Żymełka
          </span>
          <br />
          Third year Computer and Electronics Engineering student at
          Politechnika Wrocławska, Poland.
        </p>
      </div>
    </div>
  );
}
export default About;
