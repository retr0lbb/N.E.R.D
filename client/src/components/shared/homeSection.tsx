import React from "react"

interface HomeSectionProps{
    Icon?: any
    title: string
    children: React.ReactNode
}
export const HomeSection: React.FC<HomeSectionProps> = ({Icon, children, title}) => {
    return(
        <>
        <div className="w-full flex items-center justify-center">
                    <h1 className="text-5xl flex items-center justify-center gap-4 font-bold mt-5 text-purple-300">
                        {title} {Icon}
                    </h1>
                </div>
                <div className="w-full">
                    {children}
                </div>
        </>
    )
}