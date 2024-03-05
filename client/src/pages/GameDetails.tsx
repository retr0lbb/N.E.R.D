import React from "react"
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
import { ForbiddenWest, NoMansSky, good } from "@/static"
import Recomendations from "@/components/composition-components/AlsoLike/index"
import { BuyButtons } from "@/components/shared/BuyButtons"
import { Cpu, Gamepad } from "lucide-react"
import { Chip } from "@nextui-org/react"
import NewPriceLabel from "@/components/composition-components/PriceLabel"


export const GameDetails: React.FC = () => {
    const chipTagsList = ["rpg", "souls-like", "action-rpg", "medieval", "hardcore", "fantasy"]
    return(
        <div className="w-screen bg-zinc-900 mt-[10vh] min-h-[90vh]">
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
                <div className="w-[40%] flex flex-col p-4 px-6 gap-2 bg-gradient-to-l from-black/90 to-zinc-950/50">
                    <div className="flex flex-col gap-4 mb-3">
                        <h1 className="text-6xl font-bold shadow-md text-zinc-200">Dark Souls 3</h1>
                        <p className="text-zinc-500">
                            Dark Souls 3 é um RPG de ação implacável, imerso em um mundo sombrio e decadente. 
                            Os jogadores enfrentam desafios mortais, exploram ambientes intricados e enfrentam chefes 
                            épicos em uma busca desesperada por redenção e poder.
                       </p>

                     <NewPriceLabel.Root>
                        <NewPriceLabel.Promotion size="lg" price={199.99} newPricePromotion={78.98} />
                     </NewPriceLabel.Root>
                    </div>
                    
                        <BuyButtons />

                        <Recomendations.root>
                            <Recomendations.Title className="text-zinc-500">
                                Você também pode gostar de: 
                            </Recomendations.Title>
                            <Recomendations.Content>

                                <Recomendations.Item name="Horizon Forbidden West" imageSrc={ForbiddenWest}>
                                    <NewPriceLabel.Root>
                                       <NewPriceLabel.Promotion simplePromotion size="md" price={109.99} newPricePromotion={68.92} />
                                    </NewPriceLabel.Root>
                                </Recomendations.Item>

                                <Recomendations.Item name="No Man's Sky" imageSrc={NoMansSky}>
                                    <NewPriceLabel.Root>
                                        <NewPriceLabel.Price size="md"  color="default">
                                            R$ 199.99
                                        </NewPriceLabel.Price>
                                    </NewPriceLabel.Root>
                                </Recomendations.Item>

                                <Recomendations.Item name="God Of War 3 Remaster" imageSrc={good}>
                                    <NewPriceLabel.Root>
                                        <NewPriceLabel.Price size="md" color="default">
                                            R$ 199.99
                                        </NewPriceLabel.Price>
                                    </NewPriceLabel.Root>
                                </Recomendations.Item>

                            </Recomendations.Content>
                        </Recomendations.root>
                </div>
            </div>
            <section className="mt-10">
                <div className="w-full grid place-items-center py-5 px-80">
                    <h1 className="text-zinc-200 text-3xl">
                        Informações Adicionais:
                    </h1>
                    <Accordion className="w-full text-2xl" type="multiple">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-zinc-200 text-left flex items-start"><div className="flex items-center gap-4"><Cpu /> Requisitos do sistema</div></AccordionTrigger>
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
                            <AccordionTrigger className="text-zinc-200"><div className="flex items-center gap-4"><Gamepad />Informações Adicionais</div></AccordionTrigger>
                            <AccordionContent>
                                <div className="w-full text-zinc-400 flex items-start flex-col gap-5 justify-around text-xl">
                                    <div>
                                        <h1 className="text-zinc-200">Data de lançamento:</h1>
                                        <p>10 de setembro de 2016</p>
                                    </div>

                                    <div>
                                        <h1 className="text-zinc-200">Desenvolvedora</h1>
                                        <p>From Software</p>
                                    </div>

                                    <div>
                                        <h1 className="text-zinc-200">Conquistas:</h1>
                                        <p>21</p>
                                    </div>

                                    <div>
                                        <h1 className="text-zinc-200">Idiomas Disponiveis:</h1>
                                        <p>Inglês, Espanhol, Português</p>
                                    </div>

                                    <div>
                                        <h1 className="text-zinc-200">Tags:</h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            {chipTagsList.map((tag, index)=>{
                                                return(
                                                    <Chip key={index} className="text-zinc-400 cursor-pointer" variant="dot" color={tag=="hardcore"? "danger": "secondary"}>
                                                        { tag }
                                                    </Chip>
                                                )
                                            })}
                                        </div>
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