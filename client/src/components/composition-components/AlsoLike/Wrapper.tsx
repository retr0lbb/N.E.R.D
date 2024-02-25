import React from "react"

interface WrapperProps{
    children: React.ReactNode
}
export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return(
        <div className="flex flex-col items-start justify-center gap-1">
            {children}
        </div>
    )
}