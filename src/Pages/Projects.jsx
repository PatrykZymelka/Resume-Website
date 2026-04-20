import "./styles.css"
import Dice from "../Logos/Dice.jpg"
import Key from "../Logos/Keyboard.jpg"
import Shield from "../Logos/Shield.jpg"
import KPZ from "../Logos/KPZ.png"

function Proj() {
    return(
        <div className="h-fit w-[90%] max-[1200px]:w-[80%] text-white grid  max-[1200px]:grid-cols-2 grid-cols-2 mt-40 min-[1200px]:grid-rows-10 my-10 max-[500px]:gap-x-6 gap-x-10 gap-y-5" id="Project">
            <div className="col-span-2 max-[1200px]:col-span-2 row-span-2 justify-self-center text-xl shadow-md font-bold z-10">My Projects:
            </div>
            <div id="back" className="max-[1200px]:order-2 max-[1200px]:col-span-2 col-span-1 row-span-9 max-[500px]:mt-5 h-fit w-fit justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    <div className="grid m-5 gap-5 max-[500px]:text-xs">
                        <h1 className="whitespace-pre-line text-2xl font-bold ">Dice Thrower</h1>
                        <a href="https://github.com/PatrykZymelka/DiceThrowerFinal">
                            <img className="border-2  border-primary hover:border-accent rounded-md hover:scale-[101%] duration-500" src={Dice} alt="Dice Thrower" />
                        </a>
                        <h1 className="whitespace-pre-line">Dice thrower device was created to simulate rolling multiple dice at once. Its main purpose is to fasten the process of rolling large amount of dice, to keep the game on pace. This device has the functionality of rolling multiple dice types at once which speeds up the game even more. It supports 7 different types of RPG dice: (D4, D6, D8, D10, D12, D20, D100). It is fully portable to be a great alternative for carrying multiple dice everywhere you go. It is powered by a single LiON rechargable battery which lasts for several hours of continuous use. You choose the dice with easy to use buttons and to obtain the results you need to shake the device as if you were rolling real dice. When you do so you will hear a short tune to know that you obtained the results.</h1>
                        <h1 className="whitespace-pre-line">STM32 Blackpill microcontroller was selected as the brains of the device. To display all the results at once an OLED display was used connected by I2C protocol to the MCU. In order to use physical movement as a trigger for rolling the dice, an accelerometer was used, connected by I2C protocol as well. Beacuse we used a LiON battery as the power source, I have added a step-down converter to regulate the voltage for the whole device, and protect it from any voltage spikes. The program was written in C in STM32Cube IDE. The case was designed in Autodesk Fusion 360 and printed on Bambu Lab A1 mini.</h1>
                        <h1 className="whitespace-pre-line">Used technologies: C, STM32 Microcontroller, STM32Cube IDE, PCB Design, CAD design</h1>
                        <a href="https://github.com/PatrykZymelka/DiceThrowerFinal" className="w-fit justify-self-center">
                            <button className="border-2 border-primary hover:border-accent rounded-md px-12 py-4 hover:scale-[105%] duration-500"><h1 className="whitespace-pre-line text-transparent bg-clip-text font-bold bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad">Github Repositiory</h1></button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="back" className="max-[1200px]:order-1 col-span-1 row-span-9 max-[500px]:mt-5 h-fit w-fit  justify-self-center bg-gradient-to-l from-red-500 via-red-200 to-red-500 bg-300% hover:animate-fgrad rounded-md   z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    <div className="grid m-5 gap-5 max-[500px]:text-xs">
                        <h1 className="whitespace-pre-line text-3xl font-bold ">Stenotype Keyboard</h1>
                        <a href="https://github.com/PatrykZymelka/StenoKeyboard">
                            <img className="border-2 hover:border-red-600 border-red-500 rounded-md hover:scale-[101%] duration-500" src={Key} alt="Steno Keyboard" />
                        </a>
                        <h1 className="whitespace-pre-line ">The goal of this project was to design and build a fully embedded stenotype keyboard using an STM32F411CEU6 BlackPill microcontroller. A stenotype keyboard enables high-speed typing using shorthand based on phonetics, allowing users to keep up with spoken conversation. The device was designed to function as a plug-and-play keyboard on any computer without requiring external drivers, using USB HID to emulate standard keyboard input. The project involved following development steps:</h1>

<h1 className="whitespace-pre-line">Designing a custom PCB to support the specialized stenotype key layout.</h1>
<h1 className="whitespace-pre-line">Creating and 3D printing a custom case for usability and durability.</h1>
<h1 className="whitespace-pre-line">Programming the firmware in C using STM32 CubeIDE.</h1>
<h1 className="whitespace-pre-line">The main challenge was implementing real-time translation of simultaneous key combinations (chords) into words. Instead of processing individual key presses, the system stores each chord in a buffer, translates it into the corresponding word, and sends the result as keyboard output. This project was created as an engineering thesis, you can read all the details of this project in the pdf contained in my github repository.</h1>
<h1 className="whitespace-pre-line">Used Technologies: C, STM32 Microcontroller, STM32 CubeIDE, PCB Design, CAD design </h1>
<h1 className="whitespace-pre-line"></h1>

                        <a href="https://github.com/PatrykZymelka/StenoKeyboard" className="w-fit justify-self-center">
                            <button className="border-2 border-red-500 hover:border-red-400 rounded-md px-12 py-4 hover:scale-[105%] duration-500"><h1 className="whitespace-pre-line text-transparent bg-clip-text font-bold bg-gradient-to-l from-red-500 via-red-100 to-red-500 bg-300% animate-fgrad">Github Repository</h1></button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="back" className="max-[1200px]:order-2 max-[1200px]:col-span-2 col-span-1 row-span-9 max-[500px]:mt-5 h-fit w-fit justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    <div className="grid m-5 gap-5 max-[500px]:text-xs">
                        <h1 className="whitespace-pre-line text-2xl font-bold ">Arduino Leonardo Shield</h1>
                        <a href="https://github.com/PatrykZymelka/Arduino-Leonardo-Shield">
                            <img className="border-2  border-primary hover:border-accent rounded-md hover:scale-[101%] duration-500" src={Shield} alt="Shield" />
                        </a>
                        <h1 className="whitespace-pre-line">TOODODODODODOD</h1>
                        <h1 className="whitespace-pre-line">TODOODODODDOODODOD</h1>
                        <a href="https://github.com/PatrykZymelka/Arduino-Leonardo-Shield" className="w-fit justify-self-center">
                            <button className="border-2 border-primary hover:border-accent rounded-md px-12 py-4 hover:scale-[105%] duration-500"><h1 className="whitespace-pre-line text-transparent bg-clip-text font-bold bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad">Github Repositiory</h1></button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="back" className="max-[1200px]:order-2 max-[1200px]:col-span-2 col-span-1 row-span-9 max-[500px]:mt-5 h-fit w-fit justify-self-center bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad rounded-md z-10 shadow-md duration-1000 hover:scale-[102%] hover:duration-1000 ">
                <div className="innerCard3">
                    <div className="grid m-5 gap-5 max-[500px]:text-xs">
                        <h1 className="whitespace-pre-line text-2xl font-bold ">Frequency Counter</h1>
                        <a href="https://www.linkedin.com/posts/kaczmarek-grzegorz_synchronization-timekeeping-frequency-activity-7214203512904163328-ULe9">
                            <img className="border-2  border-primary hover:border-accent rounded-md hover:scale-[101%] duration-500" src={KPZ} alt="Frequency Counter" />
                        </a>
                        <h1 className="whitespace-pre-line">Project made for, and with the assistance of, Thaumatec Tech Group. This device was created to precisely measure signals up to 10MHz. With such high frequencies normal results would drift by couple of Hertz, due to internal heating or task scheaduling. While our device by using GNSS receiver as a time reference was able to acquire precise results up to the resolution of 0.1Hz.</h1>
                        <h1 className="whitespace-pre-line">To show that the device worked we built two identical units. Each unit was able to work in two modes: internal timer mode and reference mode. In the internal timer mode, the device used internal timers to send the signal with the desired frequency. This solution would drift and give innacurate reading at higher frequencies (Mostly because of internal heating of the device). While using the reference signal we used FreeRTOS to synchronize the tasks. It came in handy mostly while working with two cores of ESP32, first core was only used to count the signals and send an interrupt when the desired frequency was met, the other core was used to synchronize the counting with the reference and display the results on the display.</h1>
                        <h1 className="whitespace-pre-line">Used technologies: C,  PatformIO,  FreeRTOS,  ESP32 Microcontroller,  GNSS Receiver, CAD design</h1>
                        <a href="https://www.linkedin.com/posts/kaczmarek-grzegorz_synchronization-timekeeping-frequency-activity-7214203512904163328-ULe9" className="w-fit justify-self-center">
                            <button className="border-2 border-primary hover:border-accent rounded-md px-12 py-4 hover:scale-[105%] duration-500"><h1 className="whitespace-pre-line text-transparent bg-clip-text font-bold bg-gradient-to-l from-blue-700 via-green-400 to-blue-700 bg-300% hover:animate-fgrad">Story on Linkedin from the Supervisor</h1></button>
                        </a>
                    </div>
                </div>
            </div>
            
            
        </div>
        )
}
export default Proj;