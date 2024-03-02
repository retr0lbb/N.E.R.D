import React from "react"
import { tv, VariantProps } from "tailwind-variants"

const filetTv = tv({
    base: "cursor-pointer transition-all flex h-16 w-full border-1 bg-black border-black overflow-hidden text-xl",
    variants: {
        hover: {
            true: "hover:scale-95"
        },
        size: {
            sm: "h-10 text-xs border-none",
            md: "h-14 text-sm border-1 border-black",
            lg: "h-16 text-xl"
        }
    },
    defaultVariants: {
        hover: true,
        size: "lg"
    }
})

interface GameFiletProps extends VariantProps<typeof filetTv>{
    imageSrc: string;
    name: string;
    children?: React.ReactNode,
    className?: string,
    endContent?: React.ReactElement
}

export const GameFilet: React.FC<GameFiletProps> = ({ imageSrc, name, children, className, endContent, size, hover }) => {
    return(
        <div className={filetTv({hover, size, className})}>

            <img className="w-auto h-auto " src={imageSrc} />
            <div className="text-zinc-200 w-full px-4">
                <h1 className="text-zinc-400">{name}</h1>
                {children}
            </div>

            {endContent}
        </div>
    )
}