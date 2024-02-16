import React, { HTMLAttributes } from "react"

interface GameWrapperProps extends HTMLAttributes<HTMLDivElement>{ }

export const GameWrapper: React.FC<GameWrapperProps> = ({ children , ...rest}) => {
    return(
        <div className="group grid grid-cols-4 p-5 gap-2 place-items-center" {...rest}>
            {children}
        </div>
    )
}