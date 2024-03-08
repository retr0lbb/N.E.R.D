import React from "react";
import { Switch, SwitchProps } from "@nextui-org/react" 


interface SwitchInputProps extends SwitchProps{
    className?: string
}

export const SwitchInput: React.FC<SwitchInputProps> = ({className = "", ...rest}) =>{
    return(
        <Switch className={className} {...rest}></Switch>
    )
}