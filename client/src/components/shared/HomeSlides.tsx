import React from "react"
import { twMerge } from "tailwind-merge"
import { PromotionLabel } from "./PromotionLabel"
import NewPromotionLabel from "@/components/composition-components/PriceLabel"



interface CarouselImageProps{
    srcImage: any
    className?: string
    gameTitle?: string
    price: number
    hasPromotion?: boolean
    promotionPercentage?: string
    PromotionValue?: number
}


export const CarouselImage: React.FC<CarouselImageProps> = ({srcImage, className, gameTitle, price, hasPromotion, promotionPercentage, PromotionValue = 1}) => {
    return(
        <div className="relative rounded-md group overflow-hidden bg-slate-50 cursor-pointer">
            <img className={twMerge("w-[1300px] h-auto aspect-video object-cover", className)} 
            src={srcImage} />
            <div className="absolute transition-all bottom-0 p-4 bg-black/60 
            left-0 right-0 h-32 translate-y-32 
            group-hover:translate-y-0 flex flex-col gap-2">
                <h1 className="text-zinc-200 text-4xl font-bold">
                    {gameTitle? gameTitle : ""}
                </h1>

                <div className="mt-1">
            <NewPromotionLabel.Root>
                {hasPromotion? 
                (<NewPromotionLabel.Promotion price={price} newPricePromotion={PromotionValue} ></NewPromotionLabel.Promotion>)
                            :
                (<NewPromotionLabel.Price>R$ {price}</NewPromotionLabel.Price>)
                
            }
            </NewPromotionLabel.Root>
            </div>
            </div>
        </div>
    )
}