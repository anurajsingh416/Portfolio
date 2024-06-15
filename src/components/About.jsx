import { Element } from "react-scroll";
export default function About({theme}){
    return (
        <Element name="about" className="section">
            <div className={`px-12 h-screen flex flex-col md:flex-col lg:flex-row items-center justify-center ${theme? "bg-white text-gray":"bg-custom-gray text-white" }`}>
                <img src="Anuraj_Profile_Pic.jpg" className="h-2/6 md:h-4/6 lg:h-4/6 mx-auto rounded-3xl hover:-translate-y-1 transition-all" alt="Anuraj Singh's Profile Picture" />
                <div className="flex flex-col items-center mx-auto ">
                    <h1 className="my-5 text-4xl font-bold">About Me</h1>
                    <hr className={`w-2/4 h-1  rounded border-0 ${theme?"bg-black":"bg-orange-600"}`} />
                    <p className="my-5 max-w-md">I am currently a third-year Bachelor of Computer Applications (BCA) student, deeply passionate about web development and constantly eager to expand my knowledge and skills in the field of technology. As a MERN stack developer, I am proficient in MongoDB, Express.js, React, and Node.js, and I am currently focusing on enhancing my expertise in React and Redux. Additionally, I have a solid foundation in PHP, MySQL, and PostgreSQL. My dedication to learning new technologies drives me to stay updated with the latest industry trends and continuously improve my technical abilities.</p>
                </div>
            </div>
        </Element>
    );
}