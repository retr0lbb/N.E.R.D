import React from "react";
import { twMerge } from "tailwind-merge";

interface MenuItemProps{
    className?: string
    children?: React.ReactNode
    onClick: () => void
}

export const MenuItem: React.FC<MenuItemProps> = ({className, children, onClick}) => {
    return(
        <li onClick={ onClick } className={twMerge(`
        text-zinc-500 hover:scale-105 hover:text-zinc-200 
        hover:bg-white/10 transition-all 
        cursor-pointer w-full grid place-items-center 
        grid-cols-2 text-2xl p-3`, className)}>{children}</li>
    )
}