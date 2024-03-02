import React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
interface GameProps{
    src: string
    title: string
    price: number
    onClick?: ()=> void
}

export const Game: React.FC<GameProps> = ({src, price, title, onClick}) => {
    return(
        <div onClick={onClick} className="relative cursor-pointer w-full h-full">
            <AspectRatio ratio={16/9}>
                <img className="w-full h-full object-cover bg-gray-600" src={src} alt="" />
            </AspectRatio>
            <div className="absolute gap-4 bottom-0 backdrop:filter left-0 right-0 bg-black/70 rounded-t-xl p-2">
                <h1 className="text-zinc-200">{title}</h1>
                <p className="text-zinc-400">R${price}</p>
            </div>
        </div>
    )
}