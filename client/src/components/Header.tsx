import React, { useState } from "react"
import { Avatar, Input } from "@nextui-org/react"
import { X, Menu, ShoppingCart, Search } from "lucide-react"
import { Menu as AsideMenu } from "@/components/SideMenuList/index"
import { MenuCloseButton } from "./microComponents/MenuCloseButton"




export const Header: React.FC = () => {
    const [isMenuClicked, setMenuClicked] = useState(false)
    return(
        <header className="w-screen top-0 h-[10vh] fixed z-30 bg-gradient-to-b from-[#38265f] to-[#191d48] transition-all">
            <div className="w-full h-full flex items-center justify-between px-10 gap-4">
                
                <div className="flex items-center justify-center gap-10 mx-5 ">
                    <div onClick={() => {
                        setMenuClicked(!isMenuClicked)
                    }} className=" text-zinc-300 hover:scale-110 cursor-pointer transition-all">
                        <MenuCloseButton />
                        
                        
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
            <div className={`bg-red-800 transition-all w-96 ${isMenuClicked? "translate-x-[0]" : "translate-x-[-200%]"}`}>
                <AsideMenu.Wrapper>
                <li className="bg-violet-600 cursor-pointer w-full h-full">Aqui vc navega</li>
                    <li className="bg-violet-600 cursor-pointer w-full h-full">Fever means ist hot</li>
                    <li className="bg-violet-600 cursor-pointer w-full h-full">Baby four Pops makes a chain</li>
                    <li className="bg-violet-600 cursor-pointer w-full h-full">Things just fall together</li>
                    <li className="bg-violet-600 cursor-pointer w-full h-full">When they'r dropping like the rain</li>
                </AsideMenu.Wrapper>
            </div>
        </header>
    )
}