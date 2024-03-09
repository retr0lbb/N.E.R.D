import React from "react";
import { tv } from "tailwind-variants";


interface CardLabelProps{
    CardNumber: number,
    Icon: any,
    CardOwner: string,
    blank?: boolean;
}
export const CardLabel: React.FC<CardLabelProps> = ({Icon, CardNumber, CardOwner}) => {
    function separateInFour(cardNumber:String){
        const string = cardNumber.trim()
        let Array: string[] = [];
        let currentStringSeparation = "";

        for(let i=0; i<string.length; i++){
            currentStringSeparation += string[i]
            if(currentStringSeparation.length == 4){
                Array.push(currentStringSeparation)
                currentStringSeparation = "";
            }
        }

        return Array
    }
    
    return(
        <div className="flex shadow-lg items-center justify-between bg-zinc-700 px-6 py-2">
            <div className="flex items-center justify-center gap-4">
                <Icon size={48} className="text-zinc-300"/>
                <div>
                    <div className="flex gap-2 text-zinc-400 text-xl">
                        {separateInFour(String(CardNumber)).map((element, index)=> {
                            return(
                                <span key={index}>
                                    {index == 3? element: "*".repeat(element.length)}
                                </span>
                            )
                        })}
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