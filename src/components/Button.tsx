import React from 'react'

interface ButtonProps {
  title: string;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  id: string;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}


const Button = ({title, leftIcon, containerClass, id, rightIcon,onClick}: ButtonProps) => {
  return (

    <button 
    id={id}
    className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    onClick={onClick}
    >
        {leftIcon}
        <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button