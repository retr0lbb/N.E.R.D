import React, { useState } from "react"
import { Avatar, Input, User } from "@nextui-org/react"
import { ShoppingCart, Search, Home, Library, ListMusic, Users, Megaphone, PocketKnife, LogOut } from "lucide-react"
import {Menu as AsideMenu} from "@/components/SideMenuList/index"
import { MenuCloseButton } from "./microComponents/MenuCloseButton"
import paulhaco from "@/static/palhaco.jpg"




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

                <div className=" text-zinc-300 hover:scale-110 cursor-pointer p-2 transition-all ">
                    <ShoppingCart size={58}/>
                </div>
            </div>
            <AsideMenu.Main isMenuClicked={isMenuClicked}>
                <AsideMenu.Header >
                    <User
                        className="text-zinc-200 w-full flex justify-start h-12"
                        name= "Paulhaço"
                        description = "I 💗 Palhaxota 2022"
                        avatarProps={{
                            src: paulhaco
                          }}
                          isFocusable
                    />
                    <LogOut size={32} className="cursor-pointer" color="white" />
                </AsideMenu.Header>
                <AsideMenu.Content>
                    <AsideMenu.Item navigateTo="/home"  className="flex items-center pl-10 gap-2"><Home /> Home</AsideMenu.Item>
                    <AsideMenu.Item navigateTo="/login" className="flex items-center pl-10 gap-2"><Library /> Biblioteca</AsideMenu.Item>
                    <AsideMenu.Item className="flex items-center pl-10 gap-2"><ListMusic /> Minhas Musicas</AsideMenu.Item>
                    <AsideMenu.Item className="flex items-center pl-10 gap-2"><Users /> Meus Amigos</AsideMenu.Item>
                    <AsideMenu.Item className="flex items-center pl-10 gap-2"><Megaphone /> Comunidades</AsideMenu.Item>
                    <AsideMenu.Item className="flex items-center pl-10 gap-2"><PocketKnife/> Configurações</AsideMenu.Item>
                </AsideMenu.Content>
            </AsideMenu.Main>
        </header>
    )
}