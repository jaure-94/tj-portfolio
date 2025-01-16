import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: {
  variant: "primary" | "secondary" | "text";
  iconAfter?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, children, variant, iconAfter, ...rest } = props;

  return (
    <button className={twMerge(
      "h-11 px-6 gap-2 rounded-xl border border-orange-600 uppercase inline-flex items-center",
      variant === "primary" && "bg-orange-600 text-white gap-2",
      variant === "secondary" && "",
      variant === "text" && "h-auto px-0 border-transparent",
      className
    )} {...rest}>
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  )
}

export default Button