import React from "react"
import "../../animations/closing.css"

export const MenuCloseButton: React.FC = () => {
    return(
        <div className="barWrapper ">
            <div  className="bar bar1"/>
            <div  className="bar bar2"/>
            <div  className="bar bar3"/>
        </div>
    )
}