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
        <div className="flex items-center justify-center w-full overflow-hidden">
            <img className="object-cover object-center w-2/3 h-60" src={src} alt="Game image"/>
            <div>
                <h1>{GameName}</h1>
                <p>Tempo de jogo: {totalPlayedTime}</p>
                <p>Conquistas: {myConquests} de {conquests}</p>
            </div>
        </div>
    )
}