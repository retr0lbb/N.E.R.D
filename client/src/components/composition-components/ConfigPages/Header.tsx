import React from "react"
import { GeneralProps } from "./interface"
import { CardHeader } from "@/components/ui/card"

interface HeaderProps extends GeneralProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return(
        <CardHeader>
            { children }
        </CardHeader>
    )
}