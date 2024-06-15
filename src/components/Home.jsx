import { Element } from 'react-scroll';
import { MdOutlineDarkMode  } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
export default function Home({theme, changeColor}){
    return (
        <Element name="home" className="section ">
        <div className={`relative mb-0 pb-20 ${theme?"bg-white text-gray":"bg-custom-gray text-white"}`}>
            <div className=" pt-32 h-full md:h-screen lg:h-screen flex flex-col md:flex-row lg:flex-row  items-center justify-around">
                <img src="man.avif" className={`w-4/6 md:w-1/3 lg:w-1/3 rounded-full mb-12 hover:-translate-y-1 transition-all ${theme? "shadow-md shadow-gray-900" :"shadow-md shadow-gray-400"}`}  alt="Anuraj Singh's Profile Picture" />
                <div className="flex flex-col items-center">
                    <h1 className="my-5 text-5xl font-semibold">Anuraj Singh</h1>
                    <div className='flex items-center'>
                        <div className='text-xl mx-1'><span>I'm a</span></div>
                        <div className='dynamic-text'><span className={`my-3 text-2xl font-semibold ${theme?"text-gray-900 span-light":"text-orange-600 span-dark"}`}>Full Stack Developer</span></div>
                    </div>
                </div>
            </div>
        <button onClick={()=>{
            changeColor();
        }} className={`fixed rounded-full hover:scale-105 transition-all duration-400 p-3 bottom-10 right-8 ${theme ?"bg-gray-600 text-white":"text-gray-800 bg-white "}`} >{theme?<MdOutlineDarkMode className='font-bold' size={20}/>:<MdOutlineLightMode  className='font-bold' size={20}/>}</button>
        </div>
        </Element>
    );
}