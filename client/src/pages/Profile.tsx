import React from "react"
import { profilewalpaper } from "@/static"
import { ghost } from "@/static/"
import DS from "@/static/ds1.jpg"
import { ProfileGameCard } from "@/components/shared/ProfileGameCard"
export const Profile: React.FC = () => {
    return(
        <main className="mt-[10vh] w-screen min-h-[90vh] bg-gradient-to-l from-blue-900 to-purple-800">
            <header className="w-full overflow-hidden h-60 bg-red-500">
                <img src={profilewalpaper} alt="" className="object-cover object-center w-full h-full" />
            </header>
            <div className="w-full mt-[-1.6rem] flex items-center justify-around">
                <div className="flex items-center gap-6 justify-center">
                    
                    <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" 
                    alt="Image of a beatifu woman" 
                    className="w-36 h-36 bg-red-700 rounded object-cover object-center"/>
                    
                    <div className="text-zinc-200 text-xl">
                        <h1 className="text-2xl">Malu GGEZ</h1>
                        <p className="text-xl text-zinc-400">
                            Jogo competitivamente se eu te matei GG EZ Newba
                        </p>
                    </div>

                </div>
                <div className="text-zinc-200">
                    <ul className="min-w-80">
                        <li className="flex items-center justify-between"><p>Jogos</p><p>18</p></li>
                        <li className="flex items-center justify-between"><p>Amigos</p><p>0</p></li>    
                        <li className="flex items-center justify-between"><p>Comunidades</p><p>00</p></li>
                        <li className="flex items-center justify-between"><p>Conquistas</p><p>973</p></li>
                    </ul>
                </div>
            </div>
            <div className="w-full mt-8 flex flex-col px-20">
                <h1 className="text-zinc-200 text-2xl">Jogados Recentemente</h1>
                <div className="flex items-center justify-center">
                    <ProfileGameCard src={DS} GameName="Dark Souls 3" totalPlayedTime={100} conquests={30} myConquests={2}/>
                </div>
            </div>
        </main>
    )
}