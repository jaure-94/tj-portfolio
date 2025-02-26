"use client";

import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "This largely depends on the complexity of the website and the scope of the project. Typically, this may range from 1 or 2 weeks to 3 months.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null);

  return(
    <section className="py-20 md:py-32 lg:py-48" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-6xl lg:text-7xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div 
              key={question} 
              className="border-t border-stone-400 py-6 md:py-8 last:border-b relative isolate group/faq"
              onClick={() => faqIndex === selectedIndex ? setSelectedIndex(null) : setSelectedIndex(faqIndex)}
            >
              <div className={twMerge(
                "absolute h-0 w-full bottom-0 left-0 bg-stone-300 -z-10 group-hover/faq:h-full transition-all duration-500",
                faqIndex === selectedIndex && "h-full"
              )}></div>
              <div className={twMerge(
                "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8 group-hover/faq:cursor-pointer",
                faqIndex === selectedIndex && "lg:px-8"
              )}>
                <p className="text-xl md:text-2xl lg:text-3xl">{question}</p>
                <p className="hidden">{answer}</p>
                <div className={twMerge(
                  "inline-flex items-center justify-center size-11 bg-stone-200 border border-stone-400 rounded-full shrink-0 transition duration-500",
                  faqIndex === selectedIndex && "rotate-45"
                )}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default FAQs;
