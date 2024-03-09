import React from "react"

import CardShip from "@/static/CardChip.png"
import Visa from "@/static/Visa.png"

export const Card: React.FC = () => {
    return(
        <div className="flex flex-col py-6 px-8 gap-4 
                        bg-gradient-to-bl from-blue-800 to-blue-700 text-zinc-200 rounded-xl">
            <div className="flex items-center justify-between">
                <img className="h-12" src={CardShip} alt="" /> 
                <img className="h-12" src={Visa} alt="" />
            </div>

            <div className="flex w-full items-center gap-10 text-3xl my-4 font-bold">
                <span className="w-full flex items-center justify-evenly">* * * *</span>
                <span className="w-full flex items-center justify-evenly">* * * 8</span>
                <span className="w-full flex items-center justify-evenly">* * 4 *</span>
                <span className="w-full flex items-center justify-evenly">4 2 4 2</span>
            </div>

            <div className="flex items-center justify-between mt-2 mb-6">
                <div>
                    <p className="text-xs font-bold text-zinc-300">CVC</p>
                    <span className="text-2xl">2 4 2 4</span>
                </div>
                    
                <div>
                    <p className="text-xs font-bold text-zinc-300">Vencimento</p>
                    <span className="text-2xl">01/24</span>
                </div>
            </div>

            <div className="w-full text-3xl font-mono">
                HENRIQUE BARBOSA SAMPAIO
            </div>
        </div>
    )
}