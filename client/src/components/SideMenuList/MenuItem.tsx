import React from "react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

interface MenuItemProps{
    className?: string
    children?: React.ReactNode
    navigateTo?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({className, children, navigateTo = "/"}) => {
    return(
        <li onClick={() => window.location.href = `${navigateTo}` } className={twMerge(`
        text-zinc-500 hover:scale-105 hover:text-zinc-200 
        hover:bg-white/10 transition-all 
        cursor-pointer w-full grid place-items-center 
        grid-cols-2 text-2xl p-3`, className)}>{children}</li>
    )
}