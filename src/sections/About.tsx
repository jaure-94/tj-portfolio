import Image from "next/image";
import { FC } from "react";
import tjPencilSketch from "@/assets/images/tj-pencil-sketch.png";
import Reveal from "@/animations/Reveal";
import { skillSet } from "@/constants";

const About: FC = () => {
  return (
    <section id="about" className="container w-full scroll-mt-20 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center gap-10">
        <Reveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl">About Me</h2>
        </Reveal>

        <Reveal>
          <div className="rounded-full">
            <Image src={tjPencilSketch} alt="Tawanda Jaure Pencil Sketch" height={150} className="rounded-full" />
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-10 md:grid md:grid-cols-3">
            <div className="flex flex-col md:col-span-2 gap-5 md:gap-8 md:px-8 lg:px-24 md:text-lg">
              <p>I&apos;m a software developer with 3 years&apos; experience, having worked in various industries
                including e-commerce, HR consultancy and security. I genuinely
                enjoy designing, building and deploying beautiful, reliable and user-friendly software that solves a myriad of
                problems for my clients. I&apos;m also of
                the belief that solving complex problems doesn&apos;t have to be devoid of creativity and art.
              </p>
              <Reveal>
              <p>From a technical standpoint, I specialize in full-stack web development. On the frontend, I build
                beautiful user interfaces using tools that include React,
                Next.js, CSS3, Tailwindcss, GraphQL (Apollo Client) and Typescript. On the backend, I typically write GraphQL APIs with
                Node.js and a PostgreSQL relational database, albeit following industry best practices. I use
                Git and GitHub for version control and collaboration on projects. Finally, I deploy my solutions on AWS cloud,
                a backend Swiss army knife that includes EC2, Amplify, RDS and API Gateway.
              </p>
              </Reveal>
              <Reveal>
              <p>
                On a personal note outside of computer science, I&apos;m an art and sports junkie. Artistically, I enjoy portrait art.
                The self-portrait above is an example of my sketch work. I&apos;ve been drawing since I was a kid. I
                also watch the English Premier League and follow the NBA closely.
              </p>
              </Reveal>
            </div>

            <div className="md:col-span-1">
              <div className="flex flex-row gap-2 lg:gap-4 flex-wrap border-t-2 md:border-t-transparent md:border-l-2 border-stone-400 pt-10 md:pt-0 md:pl-5 lg:pl-8">
                {skillSet.map((skill) => (
                  <div key={skill}>
                    <Reveal>
                      <div className="border-[3px] border-stone-600 text-stone-500 px-5 py-3 w-fit rounded-lg bg-slate-50 hover:bg-white transition-all duration-75">
                        {skill}
                      </div>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About