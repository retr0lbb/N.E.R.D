import React from "react"
import { TabsContent } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { GeneralProps } from "./interface"

interface RootProps extends GeneralProps{ 
    value: string;
}

export const Root: React.FC<RootProps> = ({value, children}) => {
    return(
        <TabsContent value={value}>
            <Card className="bg-zinc-800 border-none">
                {children}
            </Card>
        </TabsContent>
    )
}