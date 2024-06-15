import projectsData from '../utils/projectsData';
import ProjectCard from './ProjectCard';
import { Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";

export default function Projects({theme}){
    return (
        <Element name="projects" className='section'>
            <div className={`px-12 h-full flex flex-col items-center justify-between pb-24 ${theme? "bg-white text-gray":"bg-custom-gray text-white" }  `}>
                <h1 className="font-serif text-3xl mb-8">My Projects<hr className={`w-full h-1 rounded border-0 bg-black ${theme?"bg-black":"bg-orange-600"} mt-2`} /></h1>
                <div className="grid lg:grid-cols-3 items-center gap-8 mx-auto ">
                    {projectsData.map((project,index)=>(
                        
                        <ProjectCard 
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            url={project.url}
                            theme={theme}
                        />
                    ))}
                </div>
            <div><a href="https://github.com/anurajsingh416" className={`inline-flex items-center justify-center ${theme?" bg-blue-500 hover:bg-blue-300":"bg-orange-500 hover:bg-orange-200"} font-bold px-4 my-4 py-2 rounded text-white transition-colors duration-500`}>View More On Github <FaGithub className='ml-2' size={24}/></a></div>
            </div>
        </Element>
    );
}