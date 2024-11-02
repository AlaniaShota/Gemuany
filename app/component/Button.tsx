"use client"

interface ButtonProps {
    children: React.ReactNode;
    widthStyle:string
}

export const Button: React.FC<ButtonProps> = ({ children, widthStyle }) => { 
    return (
        <button className={`bg-redGemuany hover:bg-transparent hover:outline-redGemuany text-whiteSecond hover:text-redGemuany  hover:outline ease-in-out duration-300 px-6 py-3 rounded-xl ${widthStyle}`}>
            {children}
        </button>
    );
};



export const ReadMoreButton:React.FC<ButtonProps> = ({children}) => {
    return(
        <button className='bg-black hover:border-b-redGemuany text-redGemuany ease-in-out duration-300 w-auto flex flex-row justify-center items-center'>
            {children}
        </button>
    )
}