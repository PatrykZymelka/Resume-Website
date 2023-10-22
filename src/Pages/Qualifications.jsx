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
                <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" className="Big">
                <img className="back" src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" alt="JavaS"/>
                <p className="Small">JavaScript</p>
                    <img className="aspect-square w-32" src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" alt="JavaS"/>
                </a>
                <a href="https://www.java.com/pl/" className="Big">
                <img className="back" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png" alt="Java"/>
                    <p className="Small">Java</p>
                    <img className="aspect-square w-32" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png" alt="Java"/>
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
            </div>
            </div>
        <div id="back" className="max-[500px]:mt-5 min-[1000px]:aspect-square justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md w-5/6 z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard2">
            <a href="https://pl.legacy.reactjs.org" className="Big">
                <img className="back" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="React"/>
                
                <p className="Small">React</p>
                    <img className="aspect-square w-32" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="React"/>
                </a>
                <a href="https://tailwindcss.com" className="Big">
                <img className="back" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png" alt="Tail"/>
                
                <p className="Small">Tailwindcss</p>
                    <img className="aspect-square w-32" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png" alt="Tail"/>
                </a>
                <a href="https://git-scm.com" className="Big">
                <img className="back" src="https://iconape.com/wp-content/png_logo_vector/git-icon.png" alt="Git"/>
                
                <p className="Small">Git</p>
                    <img className="aspect-square w-32" src="https://iconape.com/wp-content/png_logo_vector/git-icon.png" alt="Git"/>
                </a>
                <a href="https://vitejs.dev" className="Big">
                <img className="back" src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" alt="Vite"/>
                
                <p className="Small">ViteJs</p>
                    <img className="aspect-square w-32" src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" alt="Vite"/>
                </a>
            </div>
            </div>
        </div>
        
        </div>
        )
}
export default Qualifications;