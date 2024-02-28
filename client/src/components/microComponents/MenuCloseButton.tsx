import React from "react";

interface MenuCloseButtonProps{
    onClick: ()=> void;
    isActive: boolean
}
export const MenuCloseButton: React.FC<MenuCloseButtonProps> = ({isActive, onClick}) => {
    return(
        <div className="flex cursor-pointer hover:scale-105 relative items-center justify-around flex-col w-10 h-10 " onClick={onClick}>
            <div className={`w-full h-2   bg-slate-50 ${isActive? "animate-close-top": ""} transition-all`}/>
            <div className={`w-full h-2   bg-slate-50 ${isActive? "scale-0" : ""} transition-all`} />
            <div className={`w-full h-2   bg-slate-50 ${isActive? "animate-close-bottom": ""} transition-all`} />
        </div>
    )
}