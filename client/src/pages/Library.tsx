import React, { useContext } from "react";
import AsideGames from "@/components/composition-components/AlsoLike"
import {Game, gameDatasContext} from "../../data/index"
import { Play } from "lucide-react"
export const Library: React.FC = () => {
    const GamesData: Game[] = useContext(gameDatasContext)
    return(
        <main className="w-screen min-h-[90vh] mt-[10vh] flex">
            <aside className="min-h-full w-96 bg-gradient-to-br from-zinc-800 to-neutral-900">
                        <AsideGames.root>
                            <AsideGames.Content className="w-full mt-0 px-2" >
                                {GamesData.map((game: Game, index: number) => {
                                    return(
                                    <AsideGames.Item 
                                        imageSrc={game.src || ""} 
                                        name={game.name} hover={false} 
                                        size="md" key={index} 
                                        className="bg-neutral-950" />)
                                })}
                            </AsideGames.Content>
                        </AsideGames.root>
            </aside>
            <section className="w-full p-12 min-h-full flex flex-col gap-4 bg-zinc-950">
                <h1 className="text-zinc-200 text-4xl font-bold">Biblioteca</h1>
                <div className="w-full grid place-items-center grid-cols-3 gap-2">
                    {GamesData.map((game: Game, index: number)=> {
                        return(
                            <div className="relative overflow-hidden group">
                                <img className="w-full h-full" src={game.src || ""}/>
                                <div className="absolute bottom-0 
                                w-full h-20 translate-y-20 
                                group-hover:translate-y-0 
                                transition-transform duration-75 
                                ease-in-out flex items-center
                                 justify-between px-5 bg-zinc-950/80">
                                    
                                    <div className="text-2xl text-zinc-200"> {/*Header Components */}
                                        <h1>{game.name}</h1>
                                        <h3 className="text-xs text-zinc-500">Played Time: 1999h</h3>
                                    </div>
                                    
                                    <Play className="hover:scale-110 cursor-pointer" onClick={() => {
                                        alert("Olá, Essa função ainda não esta disponivel")
                                    }} color="green" fill="green" size={32}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}