"use client";

import { FC, useEffect, useState } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";
import Link from "next/link";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Intro",
    href: "#intro",
  },
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {

      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4
          }
        ],
        [
          topLineScope.current,
          {
            rotate: 45
          }
        ]
      ]);
  
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4
          }
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45
          }
        ]
      ]);

      navAnimate(navScope.current, {
        height: "100%",
      },
      {
        duration: 0.7,
      });

    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          topLineScope.current,
          {
            translateY: 0
          }
        ]
      ]);
  
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0
          }
        ]
      ]);

      navAnimate(navScope.current, {
        height: 0
      });
    }
    
  }, [isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navScope,
    navAnimate
  ]);

  // const handleClickMobileNavItem = (e: React.MouseEvent<HTMLElement>) => {
  //   if (!e) return;
  //   e.preventDefault();
  //   setIsOpen(false);

  //   const url = new URL(e.currentTarget.href);
  //   const hash = url.hash;

  //   const target = document.querySelector(hash);

  //   if (!target) return;
  //   target.scrollIntoView({ behavior: "smooth" })

  //   console.log(hash);
  // }
  
  return <header className="">
    {/* DropDownNav Navigation Layer */}
    <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900" ref={navScope}>
      <nav className="flex flex-col mt-20">
        {navItems.map(({ label, href }) => (
          <a href={href} key={label} onClick={() => setIsOpen(false)} className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative isolate">
            <div className="container !max-w-full flex items-center justify-between">
              <span className="text-2xl group-hover/nav-item:pl-4 transition-all duration-500">{label}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
            <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-20"></div>
          </a>
        ))}
      </nav>
    </div>

    {/* Logo Layer */}
    <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div>
            <Link href="/"><span className="text-xl font-bold uppercase text-white">TJ The Developer</span></Link>
          </div>
        </div>
      </div>
    </div>

    {/* Button Layer */}
    <div className="fixed top-0 left-0 w-full">
      <div className="container !max-w-full">
        <div className="flex items-center justify-end gap-4 mt-5">
          <div className="size-11 border border-stone-400 bg-stone-200 rounded-full inline-flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.rect x="3" y="7" width="18" height="2" fill="currentColor" ref={topLineScope} style={{
                transformOrigin: "12px 8px",
              }} />
              <motion.rect x="3" y="15" width="18" height="2" fill="currentColor" ref={bottomLineScope} style={{
                transformOrigin: "12px 16px",
              }} />
            </svg>
          </div>
          <Button variant="primary" className="hidden md:inline-flex">Contact Me</Button>
        </div>
      </div>
    </div>
    
    
        
  </header>
};

export default Header;
