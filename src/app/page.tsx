"use client";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

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
        <Header />
        <Hero />
        <Intro />
        <About />
        <Projects />
        <FAQs />
        <Footer />
      </>
    )
  );
}
