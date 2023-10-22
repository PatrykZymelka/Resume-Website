import "./styles.css"
import A from "../Logos/Altdorf1.png"
import Chat from "../Logos/Chat.png"
import R from "../Logos/REs.png"
function Proj() {
    return(
        <div className="h-fit w-[90%] max-[1200px]:w-[80%] text-white grid  max-[1200px]:grid-cols-2 grid-cols-4 mt-40 min-[1200px]:grid-rows-10 my-10 max-[500px]:gap-x-6 gap-x-10 gap-y-5" id="Project">
            <div className="col-span-4 max-[1200px]:col-span-2 row-span-1 justify-self-center text-xl shadow-md font-bold z-10">My biggest projects
            </div>
            <div id="back" className="max-[1200px]:order-2 max-[1200px]:col-span-2 col-span-1 row-span-9 max-[500px]:mt-5 h-fit w-fit justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    <div className="grid m-5 gap-5 max-[500px]:text-xs">
                        <h1 className="whitespace-pre-line text-2xl font-bold ">Java Chat App</h1>
                        <a href="https://github.com/PatrykZymelka/Java-Chat-Bot">
                            <img className="border-2  border-primary hover:border-accent rounded-md hover:scale-[101%] duration-500" src={Chat} alt="Chat" />
                        </a>
                        <h1 className="whitespace-pre-line">A chat application in which you connect to the desired server port on which you can message other users also connected to it. The app displays not only the messages from other users but also who currently is online.</h1>
                        <h1 className="whitespace-pre-line">It is a Java application built using sockets, which comes in two parts. The first one is the client app, it contains the GUI and allows users to message each other using it. The second one is the server, which when run enables users to connect to it. While connected, users can see other online people on the same port, allowing them to transfer messages through the server to each other.</h1>
                        <a href="https://github.com/PatrykZymelka/Java-Chat-Bot" className="w-fit justify-self-center">
                            <button className="border-2 border-primary hover:border-accent rounded-md px-12 py-4 hover:scale-[105%] duration-500"><h1 className="whitespace-pre-line text-transparent bg-clip-text font-bold bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad">Github Repositiory</h1></button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="back" className="max-[1200px]:order-1 col-span-2 row-span-9 max-[500px]:mt-5 h-fit w-fit  justify-self-center bg-gradient-to-l from-yellow-500 via-yellow-200 to-yellow-500 bg-300% hover:animate-fgrad rounded-md   z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    <div className="grid m-5 gap-5 max-[500px]:text-xs">
                        <h1 className="whitespace-pre-line text-3xl font-bold ">Wielka Biblioteka Altdorfu</h1>
                        <a href="https://patrykzymelka.github.io/biblioteka-altdorfu">
                            <img className="border-2 hover:border-yellow-600 border-yellow-500 rounded-md hover:scale-[101%] duration-500" src={A} alt="Altdorf" />
                        </a>
                        <h1 className="whitespace-pre-line ">My biggest project, thus far. In short it is a compendium of all the rules and helpful articles that are necessary to run a tabletop game of Warhammer Fantasy Roleplay. All of the items have been translated to Polish and organised in a condensed easy to navigate way, in order to simplify the act of looking up any possible problems.</h1>
                        <h1 className="whitespace-pre-line">This multiple page site has been build using React, without any extenctions. The content in it has been aquired using a python API that scries PDF's and roughly translates them into polish, while organising it into JSON files. Most of the icons have been created by me using vector art. The site is still being regulary updated with more content and the preview is currently hosted on github pages. It is both compatible with desktop and mobile view.</h1>
                        <a href="https://patrykzymelka.github.io/biblioteka-altdorfu" className="w-fit justify-self-center">
                            <button className="border-2 border-yellow-500 hover:border-yellow-300 rounded-md px-12 py-4 hover:scale-[105%] duration-500"><h1 className="whitespace-pre-line text-transparent bg-clip-text font-bold bg-gradient-to-l from-yellow-500 via-yellow-100 to-yellow-500 bg-300% animate-fgrad">Preview</h1></button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="back" className="max-[1200px]:order-3 max-[1200px]:col-span-2 col-span-1 row-span-9 max-[500px]:mt-5 h-fit w-fit justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    <div className="grid m-5 gap-5 max-[500px]:text-xs">
                        <h1 className="whitespace-pre-line text-2xl font-bold">Resume Website</h1>
                        <a >
                            <img className="border-2  border-primary hover:border-accent rounded-md hover:scale-[101%] duration-500" src={R} alt="Resume" />
                        </a>
                        <h1 className="whitespace-pre-line">Personal resume site on which you are currently on. It was built in order to showcase my frontend skills, tell you more about myself and give you my contact information.</h1>
                        <h1 className="whitespace-pre-line">This single page site has been built using React and Tailwindcss. It has quite a few notable features like the cursor follower, animated gradient background borders and a few blurred hover effects. It was built to be fully operational in both mobile and desktop view.</h1>
                        <a  className="w-fit justify-self-center">
                            </a>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Proj;