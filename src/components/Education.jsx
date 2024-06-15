import { Element } from "react-scroll";
export default function Education({theme}){
    return (
        <Element name="education" className="section">
            <div className={`px-12 py-10  h-full flex flex-col md:flex-col lg:flex-row  items-center justify-between ${theme? "bg-white text-gray":"bg-custom-gray text-white" }`}>
                <h1 className="mx-auto text-4xl font-serif mb-8">Education<hr className={`w-full h-1 border-0 rounded mt-2 ${theme?"bg-black":"bg-orange-600"} `} /></h1>
                
                <div className="flex flex-col items-center mx-auto ">
                    <ul className="max-w-lg list-disc list-inside space-y-11 font-serif">
                        <li>Completed SSC (10th grade board exam) from Khadeeja English Medium School, Chiplun with 89.60%.</li>
                        <li>Completed HSC (12th grade board exam) from D.B.J College, Chiplun with 87.50%.</li>
                        <li>Currently pursuing Bachelor of Computer Applications (BCA), third year, with a CGPA of 9.5+ till the end of the second year.</li>
                    </ul>
                </div>
            </div>
        </Element>
    );
}