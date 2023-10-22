import Git from "../Logos/Git.png"
import Gmail from "../Logos/Mail.png"
import Link from "../Logos/Linked.png"
function Contact() {




    const copy = async () => {
        navigator.clipboard.writeText("patrykzymelka@op.pl")
        alert('The E-mail adress has been copied');
    }


    return(
        <div className=" h-fit w-screen z-10 grid " >
            <div className="max-[500px]:scale-0 p-4 h-[100%] mt-20 mb-40 align-middle justify-items-center flex justify-center gap-x-[10vw] w-screen gap-y-0   text-text z-10" id="Contact">
            <a href="https://github.com/PatrykZymelka" className=" self-center shadow-xl hover:bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad  grid max-[1000px]:h-[20vw] h-[10vw] bg-secondary rounded-[50%] aspect-square border-primary border-2  p-8  duration-500 hover:border-black"><img className="h-fit align-middle justify-self-center aspect-square" src={Git}/></a>
            <a  onClick={copy} className="cursor-pointer self-center shadow-xl hover:bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad grid max-[1000px]:h-[20vw] h-[10vw] bg-secondary rounded-[50%] aspect-square border-primary border-2  p-8  duration-500 hover:border-black"><img className="h-fit align-middle justify-self-center self-center" src={Gmail}/></a>
            <a href="https://www.linkedin.com/in/patryk-żymełka-178a72269/" className="self-center shadow-xl hover:bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad grid max-[1000px]:h-[20vw] h-[10vw] bg-secondary rounded-[50%] aspect-square border-primary border-2  p-8  duration-500 hover:border-black"><img className="h-[100%] align-middle justify-self-center aspect-square" src={Link}/></a>

            </div>
            <div className="p-4 h-fit grid grid-cols-1 grid-rows-4 w-screen  bg-secondary text-gray-400 z-10" id="Contact">
                <h1 >My contact info</h1>
                <h1 >Email: <a className="hover:text-primary duration-200 cursor-pointer" onClick={copy}>patrykzymelka@op.pl</a></h1>
                <h1>Github: <a className="hover:text-primary duration-200" href="https://github.com/PatrykZymelka">github.com/PatrykZymelka</a></h1>
                <h1>Linkedin: <a className="hover:text-primary duration-200" href="https://www.linkedin.com/in/patryk-żymełka-178a72269/">www.linkedin.com/in/patryk-żymełka</a></h1>
            </div>
        </div>
        )
    }
    
    export default Contact;