import {Link } from 'react-scroll';
export default function NavBar({theme}) {
    return (
        <div className="w-full flex justify-center fixed z-10">
            <nav className={`inline-flex place-items-center mx-auto px-4 py-4 ${theme?" bg-white text-gray-800 shadow-md shadow-slate-500":"text-white bg-custom-gray shadow-md shadow-gray-950"} rounded-full md:shadow-4xl`}>
                <h1 className={`text-xl lg:text-2xl font-bold ${theme?"text-gray-800":"text-orange-500"}`}>Portfolio.</h1>
                <ul className="flex space-x-3 px-4 justify-end">
                    <li className={`cursor-pointer text-sm lg:text-lg hover:translate-y-1 transition`}><Link to="home" smooth={true} duration={500} className={theme?'text-black hover:text-blue-600':'text-white hover:text-orange-600'}>Home</Link></li>
                    <li className={`cursor-pointer text-sm lg:text-lg hover:translate-y-1 transition`}><Link to="about" smooth={true} duration={500} className={theme?'text-black hover:text-blue-600':'text-white hover:text-orange-600'}>About</Link></li>
                    <li className={`cursor-pointer text-sm lg:text-lg hover:translate-y-1 transition`}><Link to="skills" smooth={true} duration={500} className={theme?'text-black hover:text-blue-600':'text-white hover:text-orange-600'}>Skills</Link></li>
                    <li className={`cursor-pointer text-sm lg:text-lg hover:translate-y-1 transition`}><Link to="projects" smooth={true} duration={500} className={theme?'text-black hover:text-blue-600':'text-white hover:text-orange-600'}>Projects</Link></li>
                    <li className={`cursor-pointer text-sm lg:text-lg hover:translate-y-1 transition`}><Link to="contact" smooth={true} duration={500} className={theme?'text-black hover:text-blue-600':'text-white hover:text-orange-600'}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}