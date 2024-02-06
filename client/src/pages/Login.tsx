import React from "react"
import NerdLogo from "../static/NerdLogo.png"
import { Button } from "@nextui-org/react"
import { Mail, Lock } from "lucide-react"
import { InputComp } from "../components/Input"
import { ImageCarrose } from "@/components/ImageCarrose"
import fw from "@/static/fw.webp"
import mo from "@/static/mario.webp"
import dm from "@/static/nm.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import AutoPlay from "embla-carousel-autoplay"
  


export const Login: React.FC = () => {



    return(
        <div className="w-screen h-screen flex">
            <div className="h-full w-full flex items-center relative justify-center">
                <div className="absolute inset-0 w-full h-full z-20"></div>
            <Carousel
            plugins={[
                AutoPlay({
                    delay: 5000,
                })
            ]}
            opts={{
                active: true,
                loop: true,
            }} 
            className="w-full h-full flex items-center justify-center bg-zinc-950">
                <CarouselContent>
                    <CarouselItem className="w-full h-screen"><ImageCarrose title="Horizon Forbidden West" price="259,00" src={fw} /></CarouselItem>
                    <CarouselItem className="w-full h-screen"><ImageCarrose title="Super Mario Odyssey" price="350,00" src={mo}/></CarouselItem>
                    <CarouselItem className="w-full h-screen"><ImageCarrose title="No Man's Sky" price="199,99" src={dm}/></CarouselItem>
                </CarouselContent>
            </Carousel>
            </div>

            <div className="h-full w-2/6 bg-gradient-to-b from-[#11001c] to-[#190028] flex flex-col items-center justify-center px-4 gap-8">
                <img className="w-96 h-96" src={NerdLogo} alt="Logo da empresa nerd que é focada em jogos digitais logo é uma logo roxa com o emoji de nerd cara redonda com oculos grande e dentes grandes" />

                <div className="w-full grid place-items-center">
                    <form action="" onSubmit={(e) => {e.preventDefault()}} className="w-full flex flex-col gap-4 text-xl px-8">
                        <InputComp className="py-8 pl-14 text-xl" Icon={<Mail color="#cbd5e1" size={32} />} type="email" placeholder="Email..." />
                        <InputComp className="py-8 pl-14 text-xl" Icon={<Lock color="#cbd5e1" size={32}/>} type="password" placeholder="Senha..."/>
                        <Button type="submit" variant="solid" color="secondary" className="text-2xl px-28 py-8 mt-2">Logar</Button>
                    </form>
                </div>

                
            </div>
        </div>
    )
}