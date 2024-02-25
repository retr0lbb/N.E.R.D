import React from "react"
import { twMerge } from "tailwind-merge"
interface TitleProps extends React.AllHTMLAttributes<HTMLHeadingElement>{
    children: React.ReactNode,
    className: string
}

export const Title: React.FC<TitleProps> = ({ className ,children, ...rest }) => {
    return(
        <h1 {...rest} className={twMerge("text-zinc-200", className)} >
            {children}
        </h1>
    )
}