import React, { useState } from "react"
import { twMerge } from "tailwind-merge"

interface CarouselImageProps{
    srcImage: any
    className?: string
    gameTitle?: string
    price: number
    hasPromotion?: boolean
    promotionPercentage?: string
    PromotionValue?: number
}
const calcPercentValue = (numM: number, numF: number): number => {
    if(numF === 0 || numM === 0){
        return -1
    }
    let percentage = (numF/numM) * 100
    return(100 - percentage)
}
export const CarouselImage: React.FC<CarouselImageProps> = ({srcImage, className, gameTitle, price, hasPromotion, promotionPercentage, PromotionValue = 1}) => {
    
    return(
        <div className="relative group overflow-hidden bg-slate-50 cursor-pointer">
            <img className={twMerge("w-[1300px] h-auto aspect-video object-cover", className)} 
            src={srcImage} />
            <div className="absolute transition-all bottom-0 p-4 bg-black/60 
            left-0 right-0 h-[26%] translate-y-[200%] 
            group-hover:translate-y-0 flex flex-col gap-2">
                <h1 className="text-zinc-200 text-4xl font-bold">
                    {gameTitle? gameTitle : ""}
                </h1>
                <div className="relative flex items-center gap-4">
                    {hasPromotion? (
                    <>
                        <div className="relative flex items-center justify-center gap-2">
                        <p className="relative text-zinc-500 font-semibold text-xl">
                            {price? `R$ ${price}` : ""}
                        </p>
                        <p className="relative text-lime-600 font-semibold text-xl">
                            {PromotionValue}
                        </p>
                    </div>
                    <span className="absolute bg-lime-500 h-0.5 w-[5.5rem] rotate-12 top-1/2 left-0 z-0"></span>
                        <p className="bg-lime-500 px-2 py-1 font-extrabold">
                            -{calcPercentValue(price, PromotionValue).toFixed(2)}%
                        </p>
                    </>
                    ): (
                    <div className="relative flex items-center justify-center gap-2">
                        <p className="relative text-zinc-500 font-semibold text-xl">
                            {price? `R$ ${price}` : ""}
                        </p>
                    </div>
                        )}

                </div>
            </div>
        </div>
    )
}