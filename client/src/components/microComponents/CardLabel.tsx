import React from "react"
import { IconBaseProps } from "react-icons/lib";


interface CardLabelProps{
    CardNumber: string,
    Icon: any,
    CardOwner: string
}
export const CardLabel: React.FC<CardLabelProps> = ({Icon, CardNumber, CardOwner}) => {
    return(
        <div className="flex shadow-lg items-center justify-between bg-zinc-700 px-6 py-2">
            <div className="flex items-center justify-center gap-4">
                <Icon size={48} className="text-zinc-300"/>

                <div>
                    <div className="flex gap-2 text-zinc-400">
                        <span>****</span>
                        <span>****</span>
                        <span>****</span>
                        <span>4242</span>
                    </div>
                    <div className="text-xs text-zinc-400">
                        {CardOwner.toLocaleUpperCase()}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-around gap-1 cursor-pointer group p-3">
                <div className="rounded-full group-hover:bg-zinc-500 bg-zinc-600 h-1.5 w-1.5" />
                <div className="rounded-full group-hover:bg-zinc-500 bg-zinc-600 h-1.5 w-1.5" />
                <div className="rounded-full group-hover:bg-zinc-500 bg-zinc-600 h-1.5 w-1.5" />
            </div>
        </div>
    )
}