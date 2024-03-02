import games from "./games.json"
import React from "react"
export interface Game{
    name: string,
    desc: string,
    price: number,
    src?: string | null 
}
const gamesData: Game[] = games;
export const gameDatasContext = React.createContext(gamesData)