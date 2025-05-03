import { FaGithub } from "react-icons/fa6";
import { RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose, SiNextdotjs, SiTypescript } from "react-icons/si";
import Image from "next/image";

const Skills = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-6 py-12">
            
            <div className='text-center space-y-3 pb-16'>
                <h1 className='font-bold text-indigo-500 text-4xl font-serif'>My Expertise</h1>
                <p className="text-center max-w-3xl mx-auto text-gray-400 font-medium">
                Discover my core expertise in web development, including modern frameworks, backend technologies, and design tools, showcasing versatile skill sets.
                </p>
            </div>

            <h4 className='font-medium italic pb-7 text-indigo-300 text-center'>---Front End---</h4>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-center">

                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">HTML 5</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co/G3rvbcq/html-5.png" alt="HTML5" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">CSS 3</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co/sQ0gMxH/css-3.png" alt="HTML5" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Bootstrap</p>
                        <div><Image width={25} height={25} src="https://i.ibb.co/BzrKZSF/bootstrap.png" alt="Bootstrap" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Tailwind CSS</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co/qJ8nfHG/Tailwind-CSS-Logo-svg.png" alt="Tailwind CSS" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Javascript</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co/ncS71RC/free-javascript-2038874-1720087.webp" alt="JavaScript" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">DaisyUI</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co/VjvWYv0/6900993.png" alt="DaisyUI" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">React JS</p>
                        <div><RiReactjsFill className="text-3xl text-blue-500" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Redux</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co.com/QFtg1FHC/logo.png" alt="DaisyUI" /></div>
                    </div>
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
  <p className="font-medium text-lg">Next.js</p>
  <div>
    <SiNextdotjs className="text-3xl  text-white" />
  </div>
</div>
                </div>
            </div>

            <h4 className='font-medium italic pt-16 pb-7 text-indigo-300 text-center'>---Back End---</h4>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-center">
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">MongoDB</p>
                        <div><SiMongodb className="text-3xl text-green-500" /></div>
                    </div>
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Mongoose</p>
                        <div><SiMongoose className="text-3xl text-red-700" /></div>
                    </div>
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
  <p className="font-medium text-lg">TypeScript</p>
  <div><SiTypescript  className="text-3xl text-blue-500" /></div>
 </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Firebase</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co.com/g9xgsSk/1-R4c8l-HBHu-H5qyq-Ot-Zb3h-w.png" alt="Firebase" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Node JS</p>
                        <div><RiNodejsLine className="text-3xl text-lime-400"/></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Express JS</p>
                        <div><SiExpress className="text-3xl text-white" /></div>
                    </div>
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">JWT</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co.com/Q8LQMHz/1657421703592.png" alt="JWT" /></div>
                    </div>
                </div>
            </div>

            <h4 className='font-medium italic pt-16 pb-7 text-indigo-300 text-center'>---Others---</h4>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-center">
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Figma</p>
                        <div><Image width={30} height={30} src="https://i.ibb.co/hKcBkJt/figma.png" alt="Figma" /></div>
                    </div>
                    
                 
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Github</p> 
                        <div><FaGithub className="text-3xl text-white" /></div>
                    </div>
                    
                 
                    
                    <div className="col bg-indigo-900/50 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-indigo-300 rounded-sm text-white hover:ring-1 hover:ring-indigo-200 duration-500">
                        <p className="font-medium text-lg">Pixso</p>
                        <div><Image width={30} height={30} src="https://pbs.twimg.com/media/FhkZv7KVQAAAINF.png" alt="Pixso" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;