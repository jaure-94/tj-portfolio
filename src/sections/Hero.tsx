import { FC, useEffect } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import tjHeroImage from "@/assets/images/tj-hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "motion/react";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span"
    });

    titleAnimate(titleScope.current.querySelectorAll(".word"), {
      transform: "translateY(0)"
    }, {
      duration: 0.5,
      delay: stagger(0.2),
    })
  }, []);

  return <section id="home" className="!-z-50">
    <div className="grid md:grid-cols-12 md:h-screen items-stretch">
      <div className="md:col-span-7 flex flex-col justify-center">
        <div className="container !max-w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={titleScope}
            className="text-4xl md:text-6xl lg:text-7xl mt-40 md:mt-0 leading-normal lg:leading-tight font-medium tracking-wider">
            Turning ideas into digital experiences
            through code and creative design.
          </motion.h1>
          
          <div className="flex flex-col md:flex-row md:items-center mt-10 md:mt-16 items-start gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 2.1
              }}
            >
              <a href="#projects">
                <Button
                  variant="secondary"
                  className="border-[3px] border-orange-500 rounded-2xl p-8"
                  iconAfter={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  }>
                  
                    <span>View My Work</span>
                </Button>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 2.6
              }}
            >
              <a href="#contact">
                <Button variant="text">Let&apos;s Talk</Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="md:col-span-5">
        <div className="mt-20 md:mt-0 md:h-full">
          <Image
            src={tjHeroImage}
            alt="Tawanda Jaure Portrait"
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
};

export default Hero;
