import React from "react";
import { Avatar, AvatarProps } from "@nextui-org/react";

interface MessageProps extends AvatarProps {
    children: React.ReactNode;
    fromYou?: boolean;
}

export const Message: React.FC<MessageProps> = ({ fromYou, children, ...avatar }) => {
    const containerClassName = fromYou ? "flex-row-reverse" : "flex";
    const backgroundColor = fromYou ? "bg-purple-700" : "bg-zinc-700";
    const avatarMargin = fromYou ? "ml-4" : "mr-4";
    const borderRadius = fromYou ? "rounded-l-3xl rounded-ee-3xl" : "rounded-r-3xl rounded-es-3xl";

    return (
        <div className={`flex ${containerClassName} gap-4`}>
            <Avatar {...avatar} className={avatarMargin} />
            <div className={`mt-5 gap-2 flex flex-col max-w-80 overflow-hidden ${backgroundColor} p-4 ${borderRadius} text-zinc-200`}>
                {children}
            </div>
        </div>
    );
};
