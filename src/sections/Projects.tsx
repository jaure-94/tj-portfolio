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
  return <section className="py-24 md:py-32 lg:py-40" id="projects">
    <div className="container">
      <h2 className="text-4xl md:text-6xl lg:text-7xl">Projects</h2>
      <div className="mt-10 md:mt-16 lg:mt-20">
        {projects.map(({ projectName, image }) => (
          <a href="https://www.compliancehuborg.uk/" target="_blank" key={projectName} className="last:border-b border-stone-400 py-6 md:py-0 flex flex-col">
            <div className="border-t border-stone-400 py-6">
              <div className="md:hidden">
                <Image src={image} alt={`${projectName} image`} className="w-full" />
              </div>

              <div className="mt-8 md:mt-0 flex justify-between items-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl">{projectName}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
};

export default Projects;
