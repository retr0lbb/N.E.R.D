import React, { useContext } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { CalendarHeart, ThumbsUp, TicketPercent } from 'lucide-react';
import { DevilMayCry, ForbiddenWest, NoMansSky, batima, ghost, good, tsushima } from "../static"
import AutoPlay from "embla-carousel-autoplay";
import { CarouselImage } from "@/components/shared/HomeSlides";
import { Game } from "@/components/composition-components/games";
import { HomeSection } from "@/components/shared/homeSection";
import { useNavigate } from "react-router-dom";
import { gameDatasContext } from "../../data";
import { Game as GameInterface } from "../../data"


const iconSize = 44
export const Home: React.FC = () => {
    const gameData = useContext(gameDatasContext)
    const navigator = useNavigate()
    return(
        <div className="w-screen mt-[10vh] min-h-screen flex items-center flex-col bg-gradient-to-r 
        from-[#230736] to-[#1c022f]">
            <div className="w-full flex p-4">
                <h1 className="text-4xl w-auto flex items-center justify-center gap-2 text-purple-300">
                    <div>
                        <CalendarHeart />
                    </div> 
                    <p>
                        Novidades Da Semana
                    </p>
                </h1>
            </div>
            <main className="flex flex-col w-full items-center h-full gap-2">
                <div className="w-full overflow-hidden">
                    <Carousel className="grid place-items-center"
                        opts={{
                            align: "center",
                            loop: true
                        }}
                        plugins={[
                            AutoPlay({
                                jump: false,
                                delay: 5000
                            })
                        ]}
                    >
                        <CarouselContent className="w-full">
                            <CarouselItem className="flex items-center justify-center basis-3/6 overflow-hidden"><CarouselImage srcImage={DevilMayCry}   hasPromotion   gameTitle="Devil May Cry 5"        price={199.99} PromotionValue={97.81}/></CarouselItem>
                            <CarouselItem className="flex items-center justify-center basis-3/6 overflow-hidden"><CarouselImage srcImage={ForbiddenWest} hasPromotion   gameTitle="Horizon Forbidden West" price={209.99} PromotionValue={57.89}/></CarouselItem>
                            <CarouselItem className="flex items-center justify-center basis-3/6 overflow-hidden"><CarouselImage srcImage={NoMansSky}                    gameTitle="No Man's sky"           price={89.99}/></CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>

                <HomeSection title="Mais Vendidos" Icon={<ThumbsUp size={iconSize}/>}>
                    <Game.Wrapper>
                    {gameData.map((gameItem: GameInterface, index: number) => {
                            return(
                                <Game.Component 
                                src={gameItem.src || ""} 
                                price={gameItem.price} 
                                title={gameItem.name} 
                                key={index}
                                />
                            )
                        })}
                    </Game.Wrapper>
                </HomeSection>

                <HomeSection title="Em Oferta" Icon={<TicketPercent size={iconSize}/>}>
                    <Game.Wrapper>
                    {gameData.map((gameItem: GameInterface, index: number) => {
                            return(
                                <Game.Component 
                                src={gameItem.src || "null"} 
                                price={gameItem.price} 
                                title={gameItem.name} 
                                key={index}
                                onClick={() => {
                                    navigator(`/details/1`)
                                }}
                                />
                            )
                        })}
                    </Game.Wrapper>
                </HomeSection>

            </main>
        </div>
    )
}