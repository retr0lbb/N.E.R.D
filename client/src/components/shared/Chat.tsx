import React from "react"
import { Avatar, AvatarProps } from "@nextui-org/react" 

interface MessageProps extends AvatarProps{
    children: React.ReactNode
    fromYou?: boolean
}

export const Message: React.FC<MessageProps> = ({ fromYou ,children, ...avatar}) => {
    return(
        <>
        {fromYou? (
            <div className="flex flex-row-reverse gap-4">
                <Avatar {...avatar} />
                <div className="mt-5 gap-2 flex flex-col max-w-80 bg-purple-700 p-4 rounded-l-3xl rounded-ee-3xl text-zinc-200">
                    {children}
                </div>
            </div>
        ) : (
            <div className="flex gap-4">
                <Avatar {...avatar} />
                <div className="mt-5 gap-2 flex flex-col max-w-80 bg-zinc-700 p-4 rounded-r-3xl rounded-es-3xl text-zinc-300">
                    {children}
                </div>
            </div>
        )}
        
        </>
    )
}