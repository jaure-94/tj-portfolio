import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
// import { a } from "motion/react-client";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    projectName: "Compliance Hub UK",
    image: image1,
  },
];

const Projects: FC = () => {
  return <section className="pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-40" id="projects">
    <div className="container">
      <h2 className="text-4xl md:text-6xl lg:text-7xl">Projects</h2>
      <div className="mt-10 md:mt-16 lg:mt-20">
        {projects.map(({ projectName, image }) => (
          <a href="https://www.compliancehuborg.uk/" target="_blank" key={projectName} className="last:border-b border-stone-400 py-6 md:py-0 flex flex-col relative group/project">
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-500 bg-stone-300">

            </div>
            
            <div className="relative border-t border-stone-400 py-6">
              <div className="aspect-video w-full md:hidden">
                <Image src={image} alt={`${projectName} image`} className="w-full object-cover" />
              </div>
              <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                <div className="md:group-hover/project:pl-4 lg:group-hover/project:pl-8 transition-all duration-500">
                  <h3 className="text-xl md:text-2xl lg:text-3xl">{projectName}</h3>
                </div>

                <div className="relative -top-20 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 transition-all duration-500">
                  <div className="absolute aspect-video w-full">
                    <Image src={image} alt={`${projectName} image`} className="w-full" />
                  </div>
                </div>

                <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                  <div className="size-6 overflow-hidden">
                    <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f97316" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
};

export default Projects;
