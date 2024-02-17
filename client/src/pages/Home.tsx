import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { CalendarHeart, ThumbsUp, TicketPercent } from 'lucide-react';
import { DevilMayCry, ForbiddenWest, NoMansSky, batima, ghost, good, tsushima } from "@/static/index"
import AutoPlay from "embla-carousel-autoplay"
import { CarouselImage } from "@/components/shared/CarouselImage";
import { Game } from "@/components/games";
import { HomeSection } from "@/components/shared/homeSection";

//data Handler For now
interface games{
    image: string
    name: string
    price: number
}
let gamesObject: games[]
gamesObject = [
    {
        image: DevilMayCry,
        name: "Devil May Cry 5",
        price: 199.99
    },
    {
        image: ForbiddenWest,
        name: "Horizon Forbidden West",
        price: 209.99
    },
    {
        image: NoMansSky,
        name: "No Man's Sky",
        price: 89.99
    },
    {
        image: batima,
        name: "Batman Arkan Knight",
        price: 39.99
    },
    {
        image: tsushima,
        name: "Ghost Of Tsushima",
        price: 109.99
    },
    {
        image: good,
        name: "Good Of war 3",
        price: 59.99
    },
    {
        image: ghost,
        name: "Ghostwire",
        price: 67.92
    }
]

const iconSize = 44
export const Home: React.FC = () => {
    return(
        <div className="w-screen min-h-screen flex items-center flex-col bg-gradient-to-r 
        from-[#330057] to-[#941DE8]">
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
                    {gamesObject.map((gameItem: games, index: number) => {
                            return(
                                <Game.Component 
                                src={gameItem.image} 
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
                    {gamesObject.map((gameItem: games, index: number) => {
                            return(
                                <Game.Component 
                                src={gameItem.image} 
                                price={gameItem.price} 
                                title={gameItem.name} 
                                key={index}
                                />
                            )
                        })}
                    </Game.Wrapper>
                </HomeSection>

            </main>
        </div>
    )
}