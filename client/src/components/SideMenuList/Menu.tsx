import React from "react"
import { twMerge } from "tailwind-merge"
interface MenuProps{
    children: React.ReactNode,
    className?: string
}
export const Menu: React.FC<MenuProps> = ({children, className}) => {
    return(
        <ul className={twMerge("w-full h-[90vh] py-10 bg-green-500 flex flex-col items-center justify-around", className)}>
                    
                    {children}
                    
                    {/**/}
        </ul>
    )
}