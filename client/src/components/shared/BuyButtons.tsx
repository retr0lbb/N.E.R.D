import React, { useState } from "react"
import { Button } from "../ui/button"
import { ShoppingBag, Heart} from "lucide-react"
export const BuyButtons: React.FC = () => {
    const [isSaved, setIsSaved] = useState(false)
    return(
        <div className="flex items-center gap-2">
            <Button className="bg-purple-500 text-xl hover:bg-purple-950/90">
                Comprar
            </Button>
            <Button className="hover:text-zinc-500 hover:scale-95 transition-all">
                <ShoppingBag className="mr-2" /> Adicionar ao Carrinho
            </Button>
            <Button onClick={() => {
                setIsSaved(prev => !prev)
            }}>
                <Heart fill={isSaved? "violet": ""} color={isSaved? "violet": "white"} />
            </Button>
        </div>
    )
}