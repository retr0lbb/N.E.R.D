import React from "react"
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
interface RootChildren{
    children: React.ReactNode[]
}
export const Root: React.FC<RootChildren> = ({children}) => {
    return(
        <div 
        className="bg-purple-950 shadow-md 
        shadow-black flex items-center 
        rounded-full justify-center gap-5 
        px-4 py-2 text-zinc-200">
            <Dropdown>
                {children}
            </Dropdown>
        </div>
    )
}