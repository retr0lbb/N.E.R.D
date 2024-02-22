import React from "react";
import { twMerge } from "tailwind-merge";

interface MenuItemProps{
    className?: string
    children?: React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({className, children}) => {
    return(
        <li className={twMerge("bg-violet-600 cursor-pointer w-full h-full grid place-items-center grid-cols-2 text-2xl", className)}>{children}</li>
    )
}