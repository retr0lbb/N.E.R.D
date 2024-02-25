import { icons } from "lucide-react"
import React, {InputHTMLAttributes} from "react"
import {twMerge} from "tailwind-merge"

interface InputCompProps extends InputHTMLAttributes<HTMLInputElement>{
    Icon?: any
    IconSize?: number
    lastIcon?: any 
}

export const InputComp: React.FC<InputCompProps> = ({ lastIcon ,className ,Icon,...rest}) => {
    const inputStyle = twMerge("p-5 pl-12 bg-black/40 shadow-xl w-full rounded-md text-slate-50 text-sm outline-none", className)
    
    return(
        <div className="w-full flex items-center relative">
            <input 
                className={inputStyle}
                {...rest}
            />
            <div className="ml-3 absolute left-0 z-10 text-slate-50">
                {Icon}
            </div>
            {lastIcon? (
                <div className="cursor-pointer mr-4 absolute right-0 z-10 text-slate-50">
                    {lastIcon}
                </div>
            ) : ""}
        </div>
    )
}