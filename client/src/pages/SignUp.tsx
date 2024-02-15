import React, { useEffect, useRef, useState } from "react";
import { XSquare } from "lucide-react"
import { useNavigate } from "react-router-dom"
import NERDLOGO from "@/static/NerdLogo.png"
import { LabelSignUp } from "@/components/LabelSignUp";

export const SignUp: React.FC = () => {
    const [isHover, setIsHover] = useState(false)
    const [email, SetEmail] = useState("")
    const [pass, setPass] = useState("")
    const [userName, setUserName] = useState("")
    const navigator = useNavigate()

const mainImage = `                                                                 
                                                                 
                           .::::::::..                           
                     .:-=-::........::-=-:.                      
                  .-=-.                  .:--:                   
                :=-                          :=-                 
              :=:                              .=-               
            .=+:.............       .............==.             
          :+-::--------------=-..:=--------------:::=-           
          :+. -=::::::=-::::+..:::.+-..:-=-:....-= .=-           
          =-=--=    :=:-=   +.     +.  -=.=-    :+.+:+           
         :+ -=:+    =-  +. .+.==-=.=-  +. .+    ---= --          
         =- .+.+.   .=-=-  -=:+  ---=  :=-=:    =:=- .+          
         +:  +--=----------=:=-  .+:==---------==:+.  +.         
         +:   -=-----------==:    .-=-----------=-.   +.         
         =-                                          .+          
      .       .::::.     :::::::::    .::::::::     ::::::.      
    :+++:     =++++-   :=+++++++++  .=+++++++++=    +++++++=.    
   =+++++=:   =++++-  ------------  .........-++-   -----++++=.  
    :++++++=: =++++-  ............           -++=  ::     =+++:  
  :=: :=+++++=+++++- -++++++++++++    .+++++++++.         =+++:  
  :+++: :++++++++++- -+++=========     +++++---.   ..     =+++:  
  :+++++  :++++++++- -++-               :++++:      .    :++++:  
  :+++++    :+++++=.  :+++++++++++        -++++:    ++++++++=:   
  :+++++      :==.      :+++++++++          :+++=:  ++++++=:     
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
`
    return(
        <div className="w-screen border-8 
        border-slate-50 h-screen flex flex-col items-center
        bg-slate-950">
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
                    }} 
                    onClick={() => {
                        navigator("/")
                    }}
                    className="cursor-pointer 
                    hover:bg-red-600 hover:rounded-md 
                    hover:scale-105 transition-all" 
                    size={64} 
                    color={`${isHover? "white" : "red"}`}/>
                </header>
            </div> 
            <div onClick={() => {

            }} className="flex-1 items-center justify-between flex w-full">
                <div className="w-full grid place-items-center h-full">
                    <pre className="text-slate-50 shadow-xl font-black text-center">
                        {mainImage}
                    </pre>     
                </div>
                <div className="w-full h-full">
                    <LabelSignUp onChange={(e) => {SetEmail(e.target.value); console.log(email)} } label="Por favor Insira o seu" highLightText="Email" inputType="email" />
                </div>
            </div>
        </div>
    )
}