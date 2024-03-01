import React from "react"

interface RootChild{
    children: React.ReactNode
}


export const Root: React.FC<RootChild> = ({children}) => {
    return(
        <div className="relative flex items-center gap-4">
            {children}
        </div>
    )
}