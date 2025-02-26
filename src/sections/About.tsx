import Image from "next/image";
import { FC } from "react";
import tjPencilSketch from "@/assets/images/tj-pencil-sketch.png";

const About: FC = () => {
  return (
    <section id="about" className="w-full scroll-mt-20 py-16 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center gap-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl">About Me</h2>
        <div className="rounded-full">
          <Image src={tjPencilSketch} alt="Tawanda Jaure Pencil Sketch" height={150} className="rounded-full" />
        </div>
        <div className="flex flex-col gap-5 md:gap-8 px-8 lg:px-24 md:text-lg">
          <p>I&apos;m a software developer with 3 years&apos; experience, having worked in various industries
            including e-commerce, HR consultancy and security. I genuinely
            enjoy designing, building and deploying beautiful, reliable and user-friendly software that solves a myriad of
            problems for my clients. I&apos;m also of
            the belief that solving complex problems doesn&apos;t have to be devoid of creativity and art.
          </p>
          <p>From a technical standpoint, I specialize in full-stack web development. On the frontend, I build
            beautiful user interfaces using tools that include React,
            Next.js, CSS3, Tailwindcss and Typescript. On the backend, I typically write Restful APIs with
            Node.js and a PostgreSQL relational database, albeit following industry best practices. I use
            Git and GitHub for version control and collaboration on projects. Finally, I deploy my solutions on AWS cloud,
            a backend Swiss army knife that includes EC2, Amplify, RDS and API Gateway.
          </p>
          <p>
            On a personal note outside of computer science, I&apos;m an art and sports junkie. Artistically, I enjoy portrait art.
            The self-portrait above is an example of my sketch work. I&apos;ve been drawing since I was a kid. I
            also watch the English Premier League and follow the NBA closely.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About