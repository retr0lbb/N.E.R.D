import React, { useState } from "react"
import { User, Link } from "@nextui-org/react"
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import { Home, Library, ListMusic, Users, Megaphone, PocketKnife, ChevronDown, Search, ShoppingBag } from "lucide-react"
import {Menu as AsideMenu} from "@/components/composition-components/SideMenuList/index"
import { MenuCloseButton } from "../microComponents/MenuCloseButton"
import { Cart } from "../microComponents/Cart"
import { useNavigate } from "react-router-dom"

export const Header: React.FC = () => {
    const [isMenuClicked, setMenuClicked] = useState(false)
    const navigator = useNavigate()
    return(
        <header className="w-screen top-0 h-[10vh] fixed z-30 bg-gradient-to-br from-purple-800 to-purple-950 transition-all">
            <div className="w-full h-full flex items-center justify-between px-10 gap-4">
                <div className="flex items-center gap-10 justify-center">
                    <MenuCloseButton isActive={isMenuClicked} onClick={() => {
                        setMenuClicked(!isMenuClicked)
                    }} />
                </div>

                <div className="flex items-center justify-around gap-10">
                    <Cart />
                    
                    <div className="flex items-center bg-fuchsia-200 shadow-2xl shadow-black px-2 rounded-full justify-center">
                        <input type="text" className="outline-none text-xl rounded-full bg-transparent p-3" />
                        <div className="bg-purple-600 rounded-full cursor-pointer hover:scale-105 p-2">
                            <Search size={28} className="scale-x-[-1] text-white font-bold" />
                        </div>
                    </div>

                    <div className="h-16 rounded-md w-1 bg-purple-200" ></div>

                    <div className=" bg-purple-950 shadow-md shadow-black flex items-center rounded-full justify-center gap-5 px-4 py-2 text-zinc-200">
                        
                            
                    
                            
                            <Dropdown >
                            <DropdownTrigger>
                            <User className="text-zinc-200" name="Malu GGEZ"
                            description={
                                    (<Link size="md" href="https://github.com/retr0lbb">
                                        @2210
                                    </Link>)
                                }
                                avatarProps={{
                                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                }}
                                />
                               </DropdownTrigger>
                            <DropdownMenu aria-label="Static Action">
                                <DropdownItem key={"Profile Page"}>profile</DropdownItem>
                                <DropdownItem key={"offline"}>Go Offline</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <ChevronDown className="cursor-pointer hover:scale-105 text-zinc-500 hover:text-zinc-300" />
                    </div>
                </div>
            </div>


            {/* Asside Componente area */}
            <AsideMenu.Main isMenuClicked={isMenuClicked}>
                <AsideMenu.Content>
                    <AsideMenu.Item onClick={()=> navigator("/home", {preventScrollReset: true})} className="flex items-center pl-10 gap-2"><Home /> Home </AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> navigator("/home", {preventScrollReset: true})} className="flex items-center pl-10 gap-2"><Library /> Biblioteca</AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> navigator("/home", {preventScrollReset: true})} className="flex items-center pl-10 gap-2"><ListMusic /> Minhas Musicas</AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> navigator("/home", {preventScrollReset: true})} className="flex items-center pl-10 gap-2"><Users /> Meus Amigos</AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> navigator("/home", {preventScrollReset: true})} className="flex items-center pl-10 gap-2"><Megaphone /> Comunidades</AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> navigator("/home", {preventScrollReset: true})} className="flex items-center pl-10 gap-2"><PocketKnife/> Configurações</AsideMenu.Item>
                </AsideMenu.Content>
            </AsideMenu.Main>
        </header>
    )
}