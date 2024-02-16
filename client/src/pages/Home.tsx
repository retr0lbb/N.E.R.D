import { Header } from "@/components/Header"
import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {DevilMayCry, ForbiddenWest, NoMansSky} from "@/static/index"
import AutoPlay from "embla-carousel-autoplay"
import { CarouselImage } from "@/components/shared/CarouselImage";

export const Home: React.FC = () => {
    return(
        <div className="w-screen min-h-screen flex items-center flex-col bg-gradient-to-r 
        from-[#330057] to-[#941DE8]">
            <Header />
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
                            <CarouselItem className="flex items-center justify-center basis-4/6 overflow-hidden"><CarouselImage srcImage={DevilMayCry}   hasPromotion   gameTitle="Devil May Cry 5"        price={199.99} PromotionValue={97.81}/></CarouselItem>
                            <CarouselItem className="flex items-center justify-center basis-4/6 overflow-hidden"><CarouselImage srcImage={ForbiddenWest} hasPromotion   gameTitle="Horizon Forbidden West" price={209.90} PromotionValue={57.89}/></CarouselItem>
                            <CarouselItem className="flex items-center justify-center basis-4/6 overflow-hidden"><CarouselImage srcImage={NoMansSky}     gameTitle="No Man's sky"                 price={89.99}/></CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>

                <div className="w-full bg-fuchsia-800">
                    aSD
                </div>
            </main>
        </div>
    )
}