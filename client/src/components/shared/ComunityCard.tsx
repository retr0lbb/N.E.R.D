import { Avatar } from "@nextui-org/react"
import React from "react"

interface ComunityProps{
    src: string,
    ComunityName: string,
    comunityAvatar?: string
    key: any
}
export const ComunityCard: React.FC<ComunityProps> = ({ComunityName, comunityAvatar, src, key}) => {
    return(
        <div key={key} className="relative w-[32rem] h-[22rem] rounded-2xl bg-red-500 overflow-hidden">
            <img src={src} alt="Comunity name"  className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 left-0 right-0 w-full h-24 bg-purple-300/60 flex items-center gap-6 px-16">
                <Avatar size="lg" src={comunityAvatar? comunityAvatar: src}/> <h1 className="text-black text-2xl font-bold">{ComunityName}</h1>
            </div>
        </div>
    )
}