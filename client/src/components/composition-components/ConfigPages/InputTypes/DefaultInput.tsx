import React from "react";

interface NormalInputProps{
    isDisable: boolean;
    value?: string;
}
export function NormalInput(props: NormalInputProps){
    return (
        <input value={props.value} disabled={props.isDisable} className="outline-none bg-transparent border-b-1 border-zinc-500 text-xl text-zinc-300 p-1" />
    )
}
