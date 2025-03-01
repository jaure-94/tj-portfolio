"use client";

import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  // const [scope, animate] = useAnimate();
  // const inView = useInView(scope, {
  //   once: true
  // });

  // useEffect(() => {
  //   new SplitType(scope.current.querySelector("h2"), {
  //     types: "lines,words",
  //     tagName: "span",
  //   });
  // }, [scope]);

  // useEffect(() => {
  //   if (inView) {
  //     animate(scope.current.querySelectorAll(".word"),
  //     {
  //       transform: "tanslateY(0)"
  //     },
  //     {
  //       duration: 0.5,
  //       delay: stagger(0.2)
  //     })
  //   }
  // }, [inView]);

  return (
  <section className="px-5 py-24 mt-12 md:py-32 lg:py-40 md:mt-16 lg:mt-20" id="intro">
    <div className="container">
      <h2 className="text-2xl text-stone-900 leading-normal md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal lg:w-[82%]">
        Hie. I&apos;m Tawanda, and I&apos;m a software developer. I invite you to explore the intersection between design and technology on my portfolio.
        I solve problems for clients in
        different industries by creating custom, bespoke web applications that keep things simple and focus on meeting the client&apos;s needs.
      </h2>
    </div>
  </section>
)};

export default Intro;
