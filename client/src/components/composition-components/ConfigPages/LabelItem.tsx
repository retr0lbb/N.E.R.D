import { GeneralProps } from "./interface";
import React from "react";

import { twMerge } from "tailwind-merge";
interface LabelItemProps extends GeneralProps {
    label: string
    description?: string
    className?: string
}

export const LabelItem: React.FC<LabelItemProps> = ({children, label, description, className = ""}) => {
    return(
        <div className={twMerge("w-full flex items-center justify-start px-16 gap-14 text-zinc-200",className)}>
            <div>
                <h1 className="text-xl font-bold">{label}</h1>
                <p className="text-zinc-500 text-sm max-w-96">{description}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}