import React from "react"
import { DropdownMenu } from "@nextui-org/react"

interface MenuProps{
    children: any
}
export const Menu: React.FC<MenuProps> = ({children}) => {
    return(
        <DropdownMenu aria-label="Static Action">
            {children}
        </DropdownMenu>
    )
}