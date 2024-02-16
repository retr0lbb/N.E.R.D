import React from "react"
import { Avatar, Input } from "@nextui-org/react"
import { Menu, ShoppingCart, Search } from "lucide-react"




export const Header: React.FC = () => {
    return(
        <header className="w-screen h-24 bg-gradient-to-b from-[#38265f] to-[#191d48] transition-all">
            <div className="w-full h-full flex items-center justify-between px-10 gap-4">
                
                <div className="flex items-center justify-center gap-10 mx-5 ">
                    <div className=" text-zinc-300 hover:scale-110 cursor-pointer transition-all">
                        <Menu size={58} /> 
                    </div>
                    <div className="cursor-pointer flex text-zinc-950 gap-1 flex-col items-center justify-center hover:scale-85 transition-all">
                        <Avatar isBordered color="default" size="lg"></Avatar>
                    </div>
                </div>
                
                <div className="flex w-2/4">
                    <Input startContent={<Search />} variant="flat" radius="full" className="text-zinc-300 border-zinc-300" />
                </div>

                <div className=" text-zinc-300 hover:scale-110 cursor-pointer p-2 transition-all ">
                    <ShoppingCart size={58}/>
                </div>
            </div>
        </header>
    )
}