"use client";

interface ButtonProps {
  children: React.ReactNode;
  widthStyle: string;
}

export const Button: React.FC<ButtonProps> = ({ children, widthStyle }) => {
  return (
    <button
      className={`bg-redGemuany hover:bg-transparent mx-20 hover:outline-redGemuany text-whiteSecond hover:text-redGemuany  hover:outline ease-in-out duration-300 lg:px-6 lg:py-3 max-sm:px-4 max-sm:py-2 rounded-xl ${widthStyle}`}
    >
      {children}
    </button>
  );
};
