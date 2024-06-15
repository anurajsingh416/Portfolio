import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Element } from "react-scroll";
export default function Contact({theme}){
    return (
        <Element name="contact" className="section">
            <div className={`flex flex-col py-5 ${theme? "bg-gray-800 text-white":"bg-black text-white" } `}>
            <p className="text-xl text-white font-serif mx-auto">Connect with me</p>
            <div className=" mx-12 my-10 h-full flex flex-col justify-between items-center">
                <div className="flex flex-row items-center gap-8 mx-auto">
                    <a href="https://www.linkedin.com/in/anuraj-singh416"><FaLinkedin className="hover:scale-110 transition-all text-white" size={36}/></a>
                    <a href="https://x.com/Anuraj_Singh416"><FaSquareXTwitter className="hover:scale-110 transition-all text-white" size={36}/></a>
                    <a href="https://github.com/anurajsingh416"><FaGithub className="hover:scale-110 transition-all text-white" size={36}/></a>
                    <a href="https://www.instagram.com/anurajsingh416/"><FaInstagram className="hover:scale-110 transition-all text-white" size={36}/></a>
                </div>
                
                <div className="flex justify-center my-5"><h3 className="text-center text-sm md:text-base lg:text-lg text-white">Developed with ❤️ by Anuraj Singh using React and Tailwind CSS.</h3></div>
            </div>
        </div>
        </Element>
    );
}