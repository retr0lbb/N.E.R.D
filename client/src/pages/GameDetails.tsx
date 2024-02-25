import React, { useState } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { AspectRatio } from "@/components/ui/aspect-ratio"
import ds1 from "@/static/ds1.jpg"
import ds2 from "@/static/ds2.jpg"
import ds3 from "@/static/ds4.webp"
import { Separator } from "@/components/ui/separator"


export const GameDetails: React.FC = () => {
    return(
        <div className="w-screen bg-zinc-900 mt-[10vh]">
            <div className="w-full flex ">
                <div className=" w-[60%]">
                    <Carousel className="relative" opts={{
                        loop: true,
                        align: "center"
                    }}>
                        <CarouselContent>
                            <CarouselItem>
                                <AspectRatio ratio={16 / 9}>
                                     <img src={ds1} alt="Image" className="rounded-md object-cover" />
                                </AspectRatio>
                            </CarouselItem>
                            <CarouselItem>
                                <AspectRatio ratio={16 / 9}>
                                     <img src={ds2} alt="Image" className="rounded-md object-cover" />
                                </AspectRatio>
                            </CarouselItem>
                            <CarouselItem>
                                <AspectRatio ratio={16 / 9}>
                                     <img src={ds3} alt="Image" className="rounded-md object-cover" />
                                </AspectRatio>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="w-[40%] flex flex-col p-4 px-6 gap-4 bg-gradient-to-l from-black/90 to-zinc-950/50">
                    <h1 className="text-6xl font-bold shadow-md text-zinc-200">Dark Souls 3</h1>
                    <p className="text-purple-500/60"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum ab nobis, in ea iste, 
                        vero, vitae a quidem vel recusandae laboriosam doloremque mollitia dolor possimus tempora 
                        sequi ducimus maiores!
                    </p>
                </div>
            </div>
            <section className="mt-10">
                <div className="w-full grid place-items-center py-5 px-80">
                    <h1 className="text-zinc-200 text-3xl">
                        Informações Adicionais:
                    </h1>
                    <Accordion className="w-full text-2xl" type="multiple">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-zinc-200">Requisitos do Sistema:</AccordionTrigger>
                            <AccordionContent>
                                <div className="w-full text-zinc-400 flex items-center justify-around text-xl">
                                    <div>
                                        <h1>Minimos:</h1>
                                        <p>Sistema Operacional: Windows 10</p>
                                        <p>Processador: Intel Core i5 ou equivalente</p>
                                        <p>Memoria: 6GB de RAM, 64GB Armazenamento </p>
                                        <p>Placa de Vídeo: NVIDIA GeForce GTX 1060</p>
                                    </div>
                                    <div>
                                        <h1>Recomendados:</h1>
                                        <p>Sistema Operacional: Windows 10</p>
                                        <p>Processador: Intel Core i7 ou equivalente</p>
                                        <p>Memoria: 8GB de RAM, 64GB Armazenamento </p>
                                        <p>Placa de Vídeo: NVIDIA GeForce RTX 2060</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-zinc-200">Dados Relevantes:</AccordionTrigger>
                            <AccordionContent>
                                <div className="w-full text-zinc-400 flex items-center flex-col gap-5 justify-around text-xl">
                                    <div>
                                        <h1>Data de lançamento:</h1>
                                        <p>10 de setembro de 2016</p>
                                    </div>

                                    <div>
                                        <h1>Desenvolvedora</h1>
                                        <p>From Software</p>
                                    </div>

                                    <div>
                                        <h1>Conquistas:</h1>
                                        <p>21</p>
                                    </div>

                                    <div>
                                        <h1>Idiomas Disponiveis:</h1>
                                        <p>Inglês, Espanhol, Português</p>
                                    </div>

                                    <div>
                                        <h1>Tags</h1>
                                        <p>Ação, Rpg, Aventura, Souls-like, Action-rpg</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    )
}