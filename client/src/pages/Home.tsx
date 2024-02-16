import { Header } from "@/components/Header"
import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { CalendarHeart } from 'lucide-react';
import { DevilMayCry, ForbiddenWest, NoMansSky, batima, ghost, good, tsushima } from "@/static/index"
import AutoPlay from "embla-carousel-autoplay"
import { CarouselImage } from "@/components/shared/CarouselImage";
import { Game } from "@/components/games";



const repeteco = [DevilMayCry, ForbiddenWest, NoMansSky, batima, ghost, good, tsushima]
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
    }
]

export const Home: React.FC = () => {
    return(
        <div className="w-screen min-h-screen flex items-center flex-col bg-gradient-to-r 
        from-[#330057] to-[#941DE8]">
            <div className="w-full flex p-4">
                <h1 className="text-4xl w-auto flex items-center justify-center gap-2 text-purple-300">
                    <div className="">
                        <CalendarHeart />
                    </div> 
                    Novidades Da Semana
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
                <div className="w-full flex items-center justify-center">
                    <h1 className="text-5xl font-bold mt-5 text-purple-300">
                        Mais Votados
                    </h1>
                </div>
                <div className="w-full">
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
                </div>
            </main>
        </div>
    )
}