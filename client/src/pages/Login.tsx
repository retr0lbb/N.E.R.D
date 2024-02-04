import React from "react"
import NerdLogo from "../static/NerdLogo.png"
import { Button, Input } from "@nextui-org/react"
import { Mail, Lock } from "lucide-react"
import { InputComp } from "../components/Input"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { ImageCarrose } from "@/components/ImageCarrose"

export const Login: React.FC = () => {
    return(
        <div className="w-screen h-screen flex">
            <div className="h-full w-4/6 grid place-content-center">
            <Carousel 
                opts={{
                    align: "center",
                    active: true,
                    loop: true,
                    

                }}
                className="text-8xl w-full h-full"
            >
                <CarouselContent className="w-full h-full">
                    <CarouselItem className="w-full h-full basis-full object-fill" ><ImageCarrose /></CarouselItem>
                    <CarouselItem className="w-full h-full basis-full" >B</CarouselItem>
                    <CarouselItem className="w-full h-full basis-full" >C</CarouselItem>
                </CarouselContent>
            </Carousel>
            </div>

            <div className="h-full w-2/6 bg-gradient-to-b from-[#11001c] to-[#190028] flex flex-col items-center gap-10">
                <img className="w-96 h-96" src={NerdLogo} alt="Logo da empresa nerd que é focada em jogos digitais logo é uma logo roxa com o emoji de nerd cara redonda com oculos grande e dentes grandes" />

                <div className="w-full grid place-items-center">
                    <form action="" onSubmit={(e) => e.preventDefault()} className="w-2/4 flex flex-col gap-10 text-xl">
                        <InputComp Icon={Mail} type="email" placeholder="Email..." />
                        <InputComp Icon={Lock} type="password" placeholder="Senha..."/>
                    </form>
                </div>

                <div className="w-full flex items-center justify-center p-10">
                    <Button variant="solid" color="secondary" className="text-2xl px-28 py-8">Logar</Button>
                </div>
            </div>
        </div>
    )
}