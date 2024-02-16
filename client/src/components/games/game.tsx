import React from "react"
interface GameProps{
    src: string
    title: string
    price: number
}

export const Game: React.FC<GameProps> = ({src, price, title}) => {
    return(
        <div className="relative cursor-pointer w-full h-full">
            <img className="w-full h-full object-cover" src={src} alt="" />
            <div className="absolute gap-4 bottom-0 backdrop:filter left-0 right-0 bg-black/70 rounded-t-xl p-2">
                <h1 className="text-zinc-200">{title}</h1>
                <p className="text-zinc-400">R${price}</p>
            </div>
        </div>
    )
}