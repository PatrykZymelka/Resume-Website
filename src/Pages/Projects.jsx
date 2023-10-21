import "./styles.css"
import A from "../Logos/Altdorf1.png"
function Proj() {
    return(
        <div className="h-screen w-[90%] text-white grid min-[1000px]:grid-cols-4 min-[1000px]:grid-rows-10 m-0" id="Project">
            <div className="col-span-4 row-span-1 justify-self-center text-xl shadow-md font-bold z-10">My projects
            </div>
            <div id="back" className="col-span-1 row-span-9 max-[500px]:mt-5 h-fit  justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md w-5/6 z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    Proj 1
                </div>
            </div>
            <div id="back" className="col-span-2 row-span-9 max-[500px]:mt-5 h-fit  justify-self-center bg-gradient-to-l from-yellow-500 via-yellow-200 to-yellow-500 bg-300% hover:animate-fgrad rounded-md w-5/6 z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    <div className="grid m-5 gap-5">
                        <h1 className="whitespace-pre-line text-3xl font-bold">Wielka Biblioteka Altdorfu</h1>
                        <a href="https://patrykzymelka.github.io/biblioteka-altdorfu">
                            <img className="border-2 hover:border-yellow-600 border-yellow-500 rounded-md hover:scale-[101%] duration-500" src={A} alt="Altdorf" />
                        </a>
                        <h1 className="whitespace-pre-line">My biggest project, thus far. In short it is a compendium of all the rules and helpful articles that are necessary to run a tabletop game of Warhammer Fantasy Roleplay. All of the items have been translated to Polish and organised in a condensed easy to navigate way, in order to simplify the act of looking up any possible problems.</h1>
                        <h1 className="whitespace-pre-line">This site has been build with React, without any extenctions. The content in it has been aquired using a python API that scries PDF's and roughly translates them into polish, while organising it into JSON files. Most of the icons have been created by me using vector art. The site is still being regulary updated with more content and the preview is currently hosted on github pages. It is both compatible with desktop and mobile view.</h1>
                        <a href="https://patrykzymelka.github.io/biblioteka-altdorfu" className="w-fit justify-self-center">
                            <button className="border-2 border-yellow-500 rounded-md px-12 py-4 hover:scale-[105%] duration-500"><h1 className="whitespace-pre-line text-transparent bg-clip-text font-bold bg-gradient-to-l from-yellow-500 via-yellow-100 to-yellow-500 bg-300% animate-fgrad">Preview</h1></button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="back" className="col-span-1 row-span-9 max-[500px]:mt-5 h-fit  justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md w-5/6 z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    Proj 3
                </div>
            </div>
        </div>
        )
}
export default Proj;