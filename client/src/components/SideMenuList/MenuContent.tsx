import React from "react"
import { twMerge } from "tailwind-merge"
interface MenuProps{
    children: React.ReactNode,
    className?: string
}
export const MenuContent: React.FC<MenuProps> = ({children, className}) => {
    return(
        <ul className={twMerge("w-full bg-green-500 flex flex-col", className)}>
                    
                    {children}
                    
                    {/**/}
        </ul>
    )
}