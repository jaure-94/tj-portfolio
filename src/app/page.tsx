"use client";

import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import Contact from "@/sections/Contact";
import Header_refactor from "@/sections/Header_refactor";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fakeDtaFetch = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 50);
    }

    fakeDtaFetch();
  }, [])

  return ( isLoading ? ( <Loader /> ) : (
      <>
        <Header_refactor />
        <Hero />
        <Intro />
        <About />
        <Projects />
        <FAQs />
        <Contact />
        <Footer />
      </>
    )
  );
}
