import React from "react"
import { DropdownTrigger, User, Link} from "@nextui-org/react"

interface TriggerProps{
    UserLink: string;
    href: string;
    avatarImgSrc: string;
}
export const Trigger: React.FC<TriggerProps> = ({UserLink, href, avatarImgSrc}) => {
    return(
        <DropdownTrigger>
            <User className="text-zinc-200 pr-3" name="Malu GGEZ" 
            description={
                (<Link size="md" href={href}>
                    {UserLink}
                </Link>)
                }
                avatarProps={{
                    src: avatarImgSrc
                }}
                />
        </DropdownTrigger>
    )
}


//https://i.pravatar.cc/150?u=a04258114e29026702d