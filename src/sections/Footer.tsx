import Button from "@/components/Button";
import { FC } from "react";

const navItems = [
  {
    href: "#home",
    label: "Home"
  },
  {
    href: "#about",
    label: "About"
  },
  {
    href: "#projects",
    label: "Projects"
  },
  {
    href: "#faqs",
    label: "FAQs"
  },
  {
    href: "#contact",
    label: "Contact"
  }
]

const Footer: FC = () => {
  return <footer className="bg-stone-900 text-white">
    <div className="container flex flex-col items-center">
      <div className="pt-12 md:pt-16 lg:pt-20 px-3 flex flex-col items-start">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="py-16 text-3xl md:text-5xl lg:text-7xl font-bold">Let&apos;s make something <span className="lg:text-orange-600">great</span> together.</h2>
            <Button
              className="lowercase"
              variant="secondary"
              iconAfter={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            }>
              tawandajaure@outlook.com
            </Button>
          </div>
          <div>
            <nav className="flex flex-col items-start md:items-end mt-16 gap-8 lg:gap-10">
              {navItems.map(({ href, label }) => (
                <a href={href} key={label}>
                  <Button variant="text" className="md:text-lg">
                    {label}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <p className="py-16 font-thin text-xs text-white/40 md:text-sm">&copy; TJ The Developer - 2025</p>
    </div>
  </footer>;
};

export default Footer;
