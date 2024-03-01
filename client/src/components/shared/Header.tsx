import React, { useState } from "react"
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import { Home, Library, ListMusic, Users, Megaphone, PocketKnife, ChevronDown, Search, ShoppingBag, X, User as UserIcon, Circle} from "lucide-react"
import {Menu as AsideMenu} from "@/components/composition-components/SideMenuList/index"
import { MenuCloseButton } from "../microComponents/MenuCloseButton"
import { Cart } from "../microComponents/Cart"
import { useNavigate } from "react-router-dom"
import { ForbiddenWest } from "@/static"
import User from "@/components/composition-components/UserCard"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import GameItemsOnCart from "@/components/composition-components/AlsoLike/index"
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

                    <Sheet>
                        <SheetTrigger>
                            <Cart />
                        </SheetTrigger>
                        <SheetContent className="bg-zinc-950 border-none">
                            <SheetHeader>
                                <SheetTitle className="text-3xl text-zinc-200">Carrinho de compras</SheetTitle>
                                <SheetDescription className="text-zinc-400">
                                    Todos os jogos salvos em Adicionar ao carrinho ficaram salvos aqui
                                </SheetDescription>
                            </SheetHeader>
                            <div className="w-full h-full flex flex-col items-center">
                                <GameItemsOnCart.root>
                                    <GameItemsOnCart.Content>
                                        <GameItemsOnCart.Item name="Horizon Forbidden West" 
                                        hover={false} 
                                        imageSrc={ForbiddenWest} 
                                        size="md"
                                        endContent={<div className="h-full grid place-items-center text-red-800 p-2"><X/></div>}>

                                        </GameItemsOnCart.Item>
                                    </GameItemsOnCart.Content>
                                </GameItemsOnCart.root>
                                <button className="text-zinc-200">Entrar</button>
                            </div>
                        </SheetContent>
                    </Sheet>
                    
                    <div className="flex items-center bg-fuchsia-200 shadow-2xl shadow-black px-2 rounded-full justify-center">
                        <input type="text" className="outline-none text-xl rounded-full bg-transparent p-3" />
                        <div className="bg-purple-600 rounded-full cursor-pointer hover:scale-105 p-2">
                            <Search size={28} className="scale-x-[-1] text-white font-bold" />
                        </div>
                    </div>

                    <div className="h-16 rounded-md w-1 bg-purple-200" ></div>

                    <User.Root>
                        <User.Trigger UserLink="@9912" href="#" avatarImgSrc="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
                        <User.Menu>
                           <DropdownItem key={"profile Button"} onClick={() => navigator("/profile/1")} startContent={<UserIcon />}>Perfil</DropdownItem>
                           <DropdownItem key={"online Button"} startContent={<Circle color="green" />} >Status: Online</DropdownItem>
                        </User.Menu>
                    </User.Root>
                    
                    </div>
                </div>


            {/* Asside Componente area */}
            <AsideMenu.Main isMenuClicked={isMenuClicked}>
                <AsideMenu.Content>
                    <AsideMenu.Item onClick={()=> {navigator("/home", {preventScrollReset: true}); setMenuClicked(false)}} className="flex items-center pl-10 gap-2"><Home /> Home </AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> {navigator("/home", {preventScrollReset: true}); setMenuClicked(false)}} className="flex items-center pl-10 gap-2"><Library /> Biblioteca</AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> {navigator("/home", {preventScrollReset: true}); setMenuClicked(false)}} className="flex items-center pl-10 gap-2"><ListMusic /> Minhas Musicas</AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> {navigator("/home", {preventScrollReset: true}); setMenuClicked(false)}} className="flex items-center pl-10 gap-2"><Users /> Meus Amigos</AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> {navigator("/home", {preventScrollReset: true}); setMenuClicked(false)}} className="flex items-center pl-10 gap-2"><Megaphone /> Comunidades</AsideMenu.Item>
                    <AsideMenu.Item onClick={()=> {navigator("/home", {preventScrollReset: true}); setMenuClicked(false)}} className="flex items-center pl-10 gap-2"><PocketKnife/> Configurações</AsideMenu.Item>
                </AsideMenu.Content>
            </AsideMenu.Main>
        </header>
    )
}