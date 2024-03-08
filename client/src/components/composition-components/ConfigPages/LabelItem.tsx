import { Switch } from "@nextui-org/react";
import { GeneralProps } from "./interface";
import React from "react";

interface LabelItemProps extends GeneralProps {
    label: string
    description?: string
}


export function SquareInput(){
    return(
        <div className="w-12 h-12 bg-black cursor-pointer">
        </div>
    )
}


interface NormalInputProps{
    isDisable: boolean;
    value?: string;
}
export function NormalInput(props: NormalInputProps){
    return (
        <input value={props.value} disabled={props.isDisable} className="outline-none bg-transparent border-b-1 border-zinc-500 text-xl text-zinc-300 p-1" />
    )
}


export function SwitchInput(props: {className:string}){
    return(
        <Switch color="default" className={props.className}></Switch>
    )
}




export const LabelItem: React.FC<LabelItemProps> = ({children, label, description}) => {
    return(
        <div className="w-full flex items-center justify-start px-16 gap-14 text-zinc-200">
            <div>
                <h1 className="text-xl font-bold">{label}</h1>
                <p className="text-zinc-500 text-sm max-w-96">{description}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}