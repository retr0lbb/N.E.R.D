import React from "react"

interface AlsoLikeChildren{
    children ?: React.ReactNode
}
export const AlsoLikeRoot: React.FC<AlsoLikeChildren> = ({ children }) => {
    return(
        <div className="flex flex-col items-start justify-center gap-2">
            { children }
        </div>
    )
}