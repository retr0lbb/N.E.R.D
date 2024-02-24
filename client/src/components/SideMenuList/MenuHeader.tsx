import React from "react"
import { twMerge } from "tailwind-merge"
interface MenuHeaderProps{
    children?: React.ReactNode
    className?: string
}

export const MenuHeader: React.FC<MenuHeaderProps> = ({children, className}) => {
    return(
        <div className={twMerge("w-full p-2 px-4 flex items-center justify-around", className)}>
            {children}
        </div>
    )
}