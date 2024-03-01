import React from "react"
import { twMerge } from "tailwind-merge"
interface GameFiletProps{
    imageSrc: string;
    name: string;
    children?: React.ReactNode,
    className?: string
}

export const GameFilet: React.FC<GameFiletProps> = ({ imageSrc, name, children,className }) => {
    return(
        <div className={twMerge("cursor-pointer hover:scale-95 transition-all flex h-16 w-full border-1 border-black overflow-hidden", className)}>
            <img className="w-auto h-auto" src={imageSrc} />
            <div className="text-zinc-200 w-full bg-black px-4">
                <h1 className="text-xl text-zinc-400">{name}</h1>
                {children}
                </div>
        </div>
    )
}