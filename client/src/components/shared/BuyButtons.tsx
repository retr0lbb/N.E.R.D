import React, { useState } from "react"
import { Button } from "../ui/button"
import { ShoppingBag, Heart} from "lucide-react"
export const BuyButtons: React.FC = () => {
    const [isSaved, setIsSaved] = useState(false)
    return(
        <div className="flex items-center gap-2">
            <Button className="bg-lime-500 text-xl hover:bg-lime-950/90">
                Comprar
            </Button>
            <Button>
                <ShoppingBag className="mr-2" /> Adicionar ao Carrinho
            </Button>
            <Button onClick={() => {
                setIsSaved(prev => !prev)
            }}>
                <Heart fill={isSaved? "red": ""} color={isSaved? "red": "white"} />
            </Button>
        </div>
    )
}