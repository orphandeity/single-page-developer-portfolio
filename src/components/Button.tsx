import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="group">
      <p className="font-bold uppercase leading-[26px] tracking-[2.29px] group-hover:text-_green">
        {text}
      </p>
      <div className="mt-2 h-[2px] bg-_green" />
    </button>
  );
};

export default Button;
