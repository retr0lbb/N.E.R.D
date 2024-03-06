import React from "react";
import { Avatar, AvatarProps } from "@nextui-org/react";
import { tv } from "tailwind-variants"

// Booiler Flask
interface MessageProps extends AvatarProps {
    children: React.ReactNode;
    fromYou?: boolean;
    
}

//All Variants

const mainWrapper = tv({
    base: "flex gap-4",
    variants: {
        selected: {
            true: "flex-row-reverse"
        }
    }
})

const AvatarMargin = tv({
    base: "mr-4",
    variants: {
        selected: {
            true: "ml-4"
        }
    }
})

const messageBox = tv({
    base: "mt-5 gap-2 flex flex-col max-w-80 overflow-hidden p-4 text-zinc-200 bg-zinc-700",
    variants: {
        selected: {
            true: "bg-purple-700 rounded-l-3xl rounded-ee-3xl",
            false: "rounded-r-3xl rounded-es-3xl"
        }
    }
})

 const MessageComponent: React.FC<MessageProps> = ({ fromYou = false, children, ...avatar }) => {
    console.log("componente reRender at:", children )
    return (
        <div className={mainWrapper({selected: fromYou})}>
            <Avatar {...avatar} className={AvatarMargin({selected: fromYou})} />
            <div className={messageBox({selected: fromYou})}>
                {children}
            </div>
        </div>
    );
};

const Message = React.memo(MessageComponent)

export { Message }