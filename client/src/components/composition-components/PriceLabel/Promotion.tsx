import React from "react"
import { tv } from "tailwind-variants"

const calcPercentValue = (numM: number, numF: number): number => {
    if(numF === 0 || numM === 0){
        return -1
    }
    let percentage = (numF/numM) * 100
    return(100 - percentage)
}

const PromotionColorVariant =tv({
    base: "text-purple-500",
    variants: {
        color: {   
            green: "text-lime-500",
            blue: "text-blue-500"
        }
    }
})

const PromotionVariant = tv({
    base: "flex gap-3 text-xl",
    variants:{
        size: {
            sm: "text-xs gap-1",
            md: "text-sm gap-2 font-semibold",
            lg: "text-xl gap-3 font-bold"
        }
    },
    defaultVariants: {
        size: "lg"
    }
})

interface PromotionProps{
    price: number,
    newPricePromotion: number
    size?: "sm" | "md" | "lg"
    simplePromotion?: boolean
    textColor?: "green" | "blue"
}

export const Promotion: React.FC<PromotionProps> = ({ price, newPricePromotion, size, simplePromotion, textColor}) => {
    return(
        <div className={PromotionVariant({size})}>
            <div className={PromotionColorVariant({color: textColor ,className: "flex items-center justify-center gap-2"})}>
                    <div className="relative">
                        <p className="text-zinc-600">
                            R$ {price}
                        </p>
                        <span className={`absolute bg-${textColor} h-0.5 w-full top-1/2 rotate-12 z-0`}></span>
                    </div>
                <p >
                    R$ {newPricePromotion}
                </p>
            </div>
            {simplePromotion? ("") : 
            (<div>
                <p className="bg-purple-500 px-1.5 py-1 text-zinc-950">
                    -{calcPercentValue(price, newPricePromotion).toFixed(2)}%
                </p>
            </div>)}
            
        </div>
    )
}