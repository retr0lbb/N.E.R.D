import { icons } from "lucide-react"
import React, {InputHTMLAttributes} from "react"
import {twMerge} from "tailwind-merge"

interface InputCompProps extends InputHTMLAttributes<HTMLInputElement>{
    Icon?: any
}

export const InputComp: React.FC<InputCompProps> = ({Icon,...rest}) => {
    return(
        <div className="w-full flex items-center relative">
            <input 
                className={twMerge("p-5 pl-12 bg-black/40 shadow-xl w-full rounded-md text-slate-50 text-sm outline-none", rest.className)}
                {...rest}
            />
            <div className="ml-3 absolute left-0 z-10 text-slate-50">
                <Icon />
            </div>
        </div>
    )
}