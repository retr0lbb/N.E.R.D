import React, { useState } from "react";
import {XSquare} from "lucide-react"
import NERDLOGO from "@/static/NerdLogo.png"

export const SignUp: React.FC = () => {
    const [isHover, setIsHover] = useState(false)
    return(
        <div className="w-screen border-8 border-slate-50 h-screen flex flex-col items-center  bg-slate-950">
            <div className="p-2 w-full bg-slate-50 grid place-items-center">
                <header className="px-8 w-full h-full justify-between flex items-center">
                    <div className="flex items-center gap-5">
                        <img className="w-24 h-24" src={NERDLOGO} alt="Image da logo nerd com" />
                        <h1 className="text-5xl text-left font-medium">N.E.R.D</h1>
                    </div>
                    
                    <XSquare onMouseOver={() => {
                        setIsHover(true)
                    }} onMouseOut={() => {
                        setIsHover(false)
                    }} className="cursor-pointer 
                    hover:bg-red-600 hover:rounded-md 
                    hover:scale-125 transition-all" 
                    size={64} 
                    color={`${isHover? "white" : "red"}`}/>
                </header>
            </div> 
            <div className="flex-1 w-full p-4">
                <input className="w-full font-mono p-2 border-none bg-transparent select-none outline-none text-slate-50" />
            </div>
        </div>
    )
}