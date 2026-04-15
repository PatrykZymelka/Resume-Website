import "./styles.css"


function Qualifications() {
    return(
        <div className="h-fit min-[500px]:w-[90vw] w-screen" id="Qualifications">
        <div className=" text-white text-xl justify-items-center grid grid-cols-2" >
        <h1 className="z-20 min-[700px]:pb-5 font-bold col-span-2 max-[700px]:text-xs">The Languages and Technologies I use</h1>
        
        </div>
        <div className=" text-white h-[70%] justify-items-center grid grid-cols-2 justify-center">
        <div id="back" className="max-[500px]:mt-5  min-[1000px]:aspect-square  justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md w-5/6 z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
            <div className="innerCard2">
                <a href="https://cdn.iconscout.com/icon/free/png-256/free-c-icon-svg-download-png-1175247.png" className="Big">
                <img className="back" src="https://cdn.iconscout.com/icon/free/png-256/free-c-icon-svg-download-png-1175247.png" alt="JavaS"/>
                <p className="Small">C</p>
                    <img className="aspect-square w-32" src="https://cdn.iconscout.com/icon/free/png-256/free-c-icon-svg-download-png-1175247.png" alt="JavaS"/>
                </a>
                <a href="https://cplusplus.com" className="Big">
                <img className="back" src="https://images.vexels.com/media/users/3/166253/isolated/lists/14bc03b7b1c2c4e2656fd4c0a981cbbc-cpp-programming-language-icon.png" alt="C++"/>
                
                <p className="Small">C++</p>
                    <img className="aspect-square w-32" src="https://images.vexels.com/media/users/3/166253/isolated/lists/14bc03b7b1c2c4e2656fd4c0a981cbbc-cpp-programming-language-icon.png" alt="C++"/>
                </a>
                
                
                
                <a href="https://www.python.org" className="Big">
                <img className="back" src="https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png" alt="Python"/>
                
                <p className="Small">Python</p>
                    <img className="aspect-square w-32" src="https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png" alt="Python"/>
                </a>
                <a href="https://www.mysql.com/" className="Big">
                <img className="back" src="src/Logos/SQL.png" alt="SQL"/>
                    <p className="Small">SQL</p>
                    <img className="aspect-square w-32" src="src/Logos/SQL.png" alt="SQL"/>
                </a>
            </div>
            </div>
        <div id="back" className="max-[500px]:mt-5 min-[1000px]:aspect-square justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md w-5/6 z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard2">
            <a href="https://git-scm.com" className="Big">
                <img className="back" src="https://iconape.com/wp-content/png_logo_vector/git-icon.png" alt="Git"/>
                
                <p className="Small">Git</p>
                    <img className="aspect-square w-32" src="https://iconape.com/wp-content/png_logo_vector/git-icon.png" alt="Git"/>
                </a>
                <a href="https://www.freertos.org/" className="Big">
                <img className="back" src="https://idoelectronics.eu/wp-content/uploads/2024/06/FreeRTOS.png" alt="FreeRTOS"/>
                
                <p className="Small">FreeRTOS</p>
                    <img className="aspect-square w-32" src="https://idoelectronics.eu/wp-content/uploads/2024/06/FreeRTOS.png" alt="FreeRTOS"/>
                </a>
                
                <a href="https://archlinux.org/" className="Big">
                <img className="back" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Arch_Linux_%22Crystal%22_icon.svg/3840px-Arch_Linux_%22Crystal%22_icon.svg.png" alt="Arch"/>
                
                <p className="Small">Arch Linux</p>
                    <img className="aspect-square w-32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Arch_Linux_%22Crystal%22_icon.svg/3840px-Arch_Linux_%22Crystal%22_icon.svg.png" alt="Arch"/>
                </a>
                 <a href="https://cmake.org/" className="Big">
                <img className="back" src="https://cdn.iconscout.com/icon/free/png-256/free-cmake-logo-icon-svg-download-png-2944790.png" alt="React"/>
                
                <p className="Small">Cmake</p>
                    <img className="aspect-square w-32" src="https://cdn.iconscout.com/icon/free/png-256/free-cmake-logo-icon-svg-download-png-2944790.png" alt="React"/>
                </a>
            </div>
            </div>
        </div>
        
        </div>
        )
}
export default Qualifications;