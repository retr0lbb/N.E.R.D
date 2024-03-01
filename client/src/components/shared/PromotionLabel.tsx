import React from "react"


interface PromotionLabelProps{
    hasPromotion?: boolean;
    price: number;
    newPricePromotion: number;
    isSimplePromotion?: boolean;
}

const calcPercentValue = (numM: number, numF: number): number => {
    if(numF === 0 || numM === 0){
        return -1
    }
    let percentage = (numF/numM) * 100
    return(100 - percentage)
}


export const PromotionLabel: React.FC<PromotionLabelProps> = ({ hasPromotion = false, newPricePromotion, price, isSimplePromotion}) => {
    return(
        <div className="relative flex items-center gap-4">
            {hasPromotion? (
            <div className="flex gap-3">
                <div className="relative flex items-center justify-center gap-2">
                    <p className="relative text-zinc-600 font-semibold text-xl">
                        {price? `R$ ${price}` : ""}
                    </p>
                    <p className="relative text-lime-600 font-semibold text-xl">
                        R$ {newPricePromotion}
                    </p>
                </div>
                <div>
                    <span className="absolute bg-lime-500 h-0.5 w-[5.5rem] rotate-12 top-1/2 left-0 z-0"></span>
                    <p className="bg-lime-500 px-2 py-1 font-extrabold">
                        -{calcPercentValue(price, newPricePromotion).toFixed(2)}%
                    </p>
                </div>
                
                </div>): (
                <div className="relative flex items-center justify-center gap-2">
                    <p className="relative text-zinc-300 font-semibold text-xl">
                        {price? `R$ ${price}` : ""}
                    </p>
                </div>
            )}
        </div>
    )
}