import React from "react"
import { twMerge } from "tailwind-merge"
interface MenuProps{
    className?: string
    isMenuClicked: boolean
    children: React.ReactNode
}
export const Menu: React.FC<MenuProps> = ({isMenuClicked, children, className}) => {
    return(
        <div className={twMerge(`bg-black transition-all w-96 ${isMenuClicked? "translate-x-[0]" : "translate-x-[-200%]"}`, className)}>
            {children}
        </div>
    )
}