import React from "react";
import { Avatar, AvatarProps } from "@nextui-org/react";

interface FriendProps extends AvatarProps {
    name: string;
    lastMessage: string;
    isChatSelected?: boolean;
}

export const Friend: React.FC<FriendProps> = ({ isChatSelected, lastMessage, name, ...avatar }) => {
    return (
        <>
        {isChatSelected? (
        <div className="w-full h-20 flex items-center px-4 gap-3 bg-purple-500 shadow-xl shadow-purple-950">
            <Avatar {...avatar} />
            <div className="overflow-hidden pr-4">
                <h1 className="text-white font-bold">{name}</h1>
                <p className="text-xs text-zinc-200 max-w-32 overflow-hidden flex-nowrap whitespace-nowrap">
                    {lastMessage}
                </p>
            </div>
        </div>
        ) : (
        <div className="w-full h-20 flex items-center px-4 gap-3 bg-zinc-800">
            <Avatar {...avatar} />
            <div className="overflow-hidden pr-4">
                <h1 className="text-white font-bold">{name}</h1>
                <p className="text-xs text-zinc-500 max-w-32 overflow-hidden flex-nowrap whitespace-nowrap">
                    {lastMessage}
                </p>
            </div>
        </div>
        )}
        </>
    );
};
