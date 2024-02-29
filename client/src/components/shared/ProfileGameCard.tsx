import React from "react"

interface ProfileGameCartProps{
    src: string,
    GameName: string,
    totalPlayedTime: number,
    conquests: number,
    myConquests: number
}

export const ProfileGameCard: React.FC<ProfileGameCartProps> = ({GameName, conquests, myConquests, src, totalPlayedTime}) => {
    return(
        <div className="flex gap-8 bg-[#8152CD]/50 w-full overflow-hidden">
            <img className="object-cover object-center w-auto h-72" src={src} alt="Game image"/>
            <div className="text-zinc-200 flex flex-col gap-10 pt-6">
                <h1 className="text-3xl font-bold">{GameName}</h1>
                <p>Tempo de jogo: {totalPlayedTime}</p>
                <p>Conquistas: {myConquests} de {conquests}</p>
            </div>
        </div>
    )
}