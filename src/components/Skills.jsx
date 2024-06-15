import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { FaPhp } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { Element } from "react-scroll";

export default function Skills({theme}) {
    return (
    <Element name="skills" className="section">
        <div className={`flex flex-col ${theme? "bg-white text-gray":"bg-custom-gray text-white" }`}>
            <h1 className="text-4xl font-serif mx-auto">Skills<hr className={`w-full h-1 border-0 rounded mt-2 ${theme?"bg-black":"bg-orange-600"} `} /></h1>
            <div className=" mx-12 my-12 h-full flex flex-col md:flex-row lg:flex-row items-center justify-between">
                <div className="grid grid-cols-2 items-center justify-between gap-8 mx-auto">
                    <div className="flex items-center col-span-2">
                        <h1 className="text-2xl font-serif mx-auto mt-8 mb-6">FrontEnd</h1>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <IoLogoJavascript className="text-yellow-300 " size={55} />
                        <span className="font-semibold">Javascript</span>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <FaReact className="text-blue-500 " size={55} />
                        <span className="font-semibold">React</span>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <RiTailwindCssFill className="text-blue-400 " size={55} />
                        <span className="font-semibold">Tailwind</span>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <FaHtml5 className="text-orange-500 " size={55} />
                        <span className="font-semibold">HTML</span>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <FaCss3Alt className="text-blue-500 " size={55} />
                        <span className="font-semibold">CSS</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-8 mx-auto">
                    <div className="flex items-center col-span-2">
                        <h1 className="text-2xl font-serif mx-auto mt-8 mb-6">BackEnd</h1>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <FaNodeJs className="text-green-700 " size={55} />
                        <span className="font-semibold">NodeJs</span>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <SiExpress className="text-gray-700 " size={55} />
                        <span className="font-semibold">Express</span>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <FaPhp className="text-indigo-700 " size={55} />
                        <span className="font-semibold">Php</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-8 mx-auto">
                    <div className="flex items-center col-span-2">
                        <h1 className="text-2xl font-serif mx-auto mt-8 mb-6">Database</h1>
                    </div>

                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <SiMongodb className="text-green-600 " size={55} />
                        <span className="font-semibold">Mongodb</span>
                    </div>
                    <div className="flex items-center hover:scale-105  transition-all duration-300">
                        <DiMysql className="text-blue-700 " size={55} />
                        <span className="font-semibold">MySQL</span>
                    </div>
                    <div className="flex items-centerc hover:scale-105">
                        <DiPostgresql className="text-blue-800 " size={55} />
                        <span className="font-semibold">Postgresql</span>
                    </div>
                </div>
            </div>
        </div>
    </Element>
    );
}
