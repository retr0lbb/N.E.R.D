import { Checkbox } from "@nextui-org/react";
import React from "react"



interface CheckBoxInputItemProps{
    label: string
}

export const CheckBoxInputItem: React.FC<CheckBoxInputItemProps> = ({label}) => {
    return(
        <div className="flex">
            <Checkbox></Checkbox>
            <p>{label}</p>
        </div>
    )
}


interface CheckBoxInputProps{
    children: React.ReactNode;
}
export const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ children }) => {
    return(
        <div className="flex flex-col justify-center gap-2">
            {children}
        </div>
    )
}