import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: {
  variant: "primary" | "secondary" | "text" | "submit";
  iconAfter?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, children, variant, iconAfter, ...rest } = props;

  return (
    <button className={twMerge(
      "h-11 px-6 gap-2 rounded-xl border border-orange-600 uppercase inline-flex items-center transition duration-500 relative",
      variant === "primary" && "bg-orange-600 border-[3px] border-orange-600 text-base hover:text-stone-900 hover:bg-stone-200 text-white gap-2",
      variant === "secondary" && "hover:bg-orange-600 hover:border-orange-600 hover:text-white",
      variant === "text" && "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-[1.5px] after:w-0 after:absolute after:top-full after:bg-orange-600 hover:after:w-full hover:text-orange-600 hover:transition-all hover:duration-500",
      variant === "submit" && "h-8 bg-stone-900 !border-2 !border-stone-900 !rounded-md hover:bg-transparent hover:text-stone-900 text-white w-60 flex justify-center",
      className
    )} {...rest}>
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  )
}

export default Button