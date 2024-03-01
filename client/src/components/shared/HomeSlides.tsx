import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import { PromotionLabel } from "./PromotionLabel"



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
            left-0 right-0 h-[26%] translate-y-[200%] 
            group-hover:translate-y-0 flex flex-col gap-2">
                <h1 className="text-zinc-200 text-4xl font-bold">
                    {gameTitle? gameTitle : ""}
                </h1>
            <PromotionLabel hasPromotion={hasPromotion} price={price} newPricePromotion={PromotionValue}/>
            </div>
        </div>
    )
}