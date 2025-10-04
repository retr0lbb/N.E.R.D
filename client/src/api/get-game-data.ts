import { api } from "./api"


interface GetGameDataParams{
    offersOnly: boolean,
    offerRage: number,
    range: number,
    order: "desc" | "asc"
}

interface GameData {
    name: string
    description: string
    price: number
    discountInfo: number
    imgs: {
        thumbnailUrl: string
        caroseulUrls: string[]
    }
}

export async function getGamesData(): Promise<GameData[]>{

    const request = await api.get("/games")
    const games = request.data as GameData[]

    return games
}