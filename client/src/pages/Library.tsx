import React, { useContext } from "react";
import AsideGames from "@/components/composition-components/AlsoLike"
import {Game, gameDatasContext} from "../../data/index"
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
                <div className="w-full grid place-items-center grid-cols-5 gap-2">
                    
                </div>
            </section>
        </main>
    )
}