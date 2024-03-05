import React from "react"

interface AlsoLikeChildren{
    children ?: React.ReactNode
}
export const AlsoLikeRoot: React.FC<AlsoLikeChildren> = ({ children }) => {
    return(
        <div className="my-5 flex flex-col items-start justify-center gap-2">
            { children }
        </div>
    )
}