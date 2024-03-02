import json from "../../data/games.json"
import React, {useState} from "react"

interface GameInterface{
    name: string,
    desc: string,
    price: number
}

export default function UseData(){
    const [data, setData] = useState<GameInterface[]>([])
    setData(json)


    return {data}
}
