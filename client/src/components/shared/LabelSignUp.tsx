import React from "react"
import { InputComp } from "./Input"

interface LabelSignUpProps{
    label: string
    inputType: string
    highLightText?: string
    onChange: (e: any) => void
}


export const LabelSignUp: React.FC<LabelSignUpProps> = ({label, inputType, onChange}) => {

    const strArray = label.split("")
    return(
        <div className="w-full text-center text-3xl items-center p-1 flex flex-col gap-1">
            <label className="flex text-left text-slate-50 overflow-hidden" htmlFor="inputA">
                
                {strArray.map((item, _) => { 
                        return(
                            <pre className="">
                                {item}
                            </pre>
                        )
                    
                }) }

            </label>
            <div className="relative">
                <label className="absolute z-10 left-0 h-full flex items-center justify-center text-slate-800 pl-2 text-left" htmlFor="input1">://</label>
                <InputComp onChange={onChange} id="input1" className="text-slate-400 bg-transparent shadow-none text-2xl" type={inputType} />
            </div>
        </div>
    )
}