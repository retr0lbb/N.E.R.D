import React, { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"



const PriceComponent = tv({
    base: "relative flex items-center justify-center gap-2",
    variants: {
        size: {
            sm: "text-xs",
            md: "text-sm",
            lg: "font-semibold text-xl"
        },
        color:{
            default: "text-zinc-300"
        }
    },
    defaultVariants: {
        size: "lg",
        color: "default"
    }
})

interface PriceProps extends VariantProps<typeof PriceComponent>{
    children: React.ReactNode
}
export const Price: React.FC<PriceProps> = ({ children, color, size }) => {
    return(
        <div className={PriceComponent({color, size})}>
            <p>
                { children }
            </p>
        </div>
    )
}


//styled: relative flex items-center justify-center gap-2 text-zinc-300 font-semibold text-xl