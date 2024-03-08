import React from "react"
import {GeneralProps} from "./interface"
import { CardContent } from "@/components/ui/card"

interface ContentProps extends GeneralProps {}

export const Content: React.FC<ContentProps> = ({children}) => {
    return(
        <CardContent className="flex flex-col gap-8">
            {children}
        </CardContent>
    )
}