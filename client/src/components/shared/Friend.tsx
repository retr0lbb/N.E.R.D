import React from "react";
import { Avatar, AvatarProps } from "@nextui-org/react";
import { tv } from "tailwind-variants"

interface FriendProps extends AvatarProps {
    name: string;
    lastMessage: string;
    isChatSelected?: boolean;
}
const mainWrapper = tv({
    base: "w-full h-20 flex items-center px-4 gap-3 bg-zinc-800",
    variants: {
        selected: {
           true: "bg-purple-500 shadow-xl shadow-purple-950"
        }
    }
})

const textMessage = tv({
    base: "max-w-32 overflow-hidden flex-nowrap whitespace-nowrap text-xs text-zinc-500",
    variants: {
        selected: {
            true: "text-xs text-zinc-200"
        }
    }
})

export const Friend: React.FC<FriendProps> = ({ isChatSelected = false, lastMessage, name, ...avatar }) => {

    return (
        <div className={mainWrapper({selected: isChatSelected})}>
            <Avatar {...avatar} />
            <div className="overflow-hidden pr-4">
                <h1 className="text-white font-bold">{name}</h1>
                <p className={textMessage({selected: isChatSelected})}>
                    {lastMessage}
                </p>
            </div>
        </div>
    );
};
