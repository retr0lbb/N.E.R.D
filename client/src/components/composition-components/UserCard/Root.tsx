import React from "react"
import {  Dropdown } from "@nextui-org/react";
interface RootChildren{
    children: React.ReactNode[]
}
export const Root: React.FC<RootChildren> = ({children}) => {
    return(
        <div 
        className="
        flex items-center justify-center gap-5 
        h-full px-4 py-2 text-zinc-200">
            <Dropdown>
                {children}
            </Dropdown>
        </div>
    )
}