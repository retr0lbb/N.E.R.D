import React from "react"
import { twMerge } from "tailwind-merge"

interface WrapperProps{
    children: React.ReactNode,
    className?: string
}
export const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
    return(
        <div className={twMerge("flex flex-col items-start justify-center gap-1", className)}>
            {children}
        </div>
    )
}