import React from "react"

interface BlockOfWrittingProps{
    children: React.ReactNode
    text: string
    HasLightText?: boolean
    lightText?: string
}
export const BlockOfWritting: React.FC<BlockOfWrittingProps> = ({ children, text, HasLightText, lightText }) => {
    return(
        <div className="flex flex-col items-center justify-center gap-8">   
                    <h1 className="text-zinc-200 text-4xl
                    font-mono overflow-hidden px-2 type-cursor">
                        {text} {HasLightText? (<span className="text-fuchsia-500 ">{ lightText }</span>) : ""}
                    </h1>
                { children }
        </div>
    )
}