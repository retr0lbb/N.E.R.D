import React from "react";
import { ShoppingBag } from "lucide-react";
export const Cart: React.FC = () => {
    return(
        <div className="relative text-purple-100 cursor-pointer hover:scale-105">
                        <ShoppingBag size={48}/>
                        <div className="absolute top-0 
                        right-0 bg-red-500 rounded-full 
                        w-4 h-4 flex items-center justify-center p-3
                        text-white font-bold
                        ">
                            1
                        </div>
                    </div>
    )
}