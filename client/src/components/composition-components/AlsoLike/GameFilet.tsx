import React from "react"

interface GameFiletProps{
    imageSrc: string;
    name: string;
    
}

export const GameFilet: React.FC<GameFiletProps> = ({ imageSrc, name }) => {
    return(
        <div className="cursor-pointer hover:scale-95 transition-all flex h-16 w-auto border-1 border-black overflow-hidden">
            <img className="w-auto h-auto" src={imageSrc} />
            <div className="text-zinc-200 bg-black px-4">
                <h1 className="text-xl text-zinc-400">{name}</h1>
            </div>
        </div>
    )
}