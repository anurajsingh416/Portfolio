export default function ProjectCard({title, description, imageUrl, url,theme}){
    return (
        <div className={`max-w-sm w-full h-full flex flex-col border-0 justify-between rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 ${theme?"bg-white text-gray":"bg-zinc-800 text-white"}`}>
            <img className="w-full h-48 object-contain" src={imageUrl} alt="Project Image" />
            <div className="px-6 py-4">
                <div className="text-xl font-bold mb-2">{title}</div>
                <div className={`${theme?"text-gray-700":"text-white"} text-base`}>{description}</div>
            </div>
            <div className="px-6 pt-4 pb-4">
                <a className={`block text-center text-white ${theme?" bg-blue-500 hover:bg-blue-300":"bg-orange-500 hover:bg-orange-200"} font-bold px-4 py-2 rounded transition-colors duration-500`} href={url}>Check on Githib</a>
            </div>
        </div>
    );
}