import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { Message } from "@/components/shared/Chat";
import { Friend } from "@/components/shared/Friend";




export const Friends: React.FC = () => {
    const [chatSelected, setChatSelected] = useState("")    

    
    return(
        <main className="w-screen mt-[10vh] min-h-[90vh] flex">
            <aside className="min-h-full flex flex-col gap-1 py-4 w-80 bg-zinc-950">
                <Friend name="MarioGames"  lastMessage="Olha o jogo que eu comprei 📷" isChatSelected={true}/>
                <Friend name="Geraldo Mata20" lastMessage="Bora jogar valorant que eu vou de jett"/>
                <Friend name="IlIlIl_Goz-draken_IlIl" lastMessage="X1?"/>
                <Friend name="ゲイ毛皮ポルノ"  lastMessage="I dare you to translate my name back"/>

            </aside>
            <section className="w-full grid place-items-center min-h-full bg-zinc-900 px-40">
                <div className="relative h-full w-full bg-zinc-900 py-10 px-32">
                    <Message>
                        Bora jogar seu pé rapado homi 🗿🍷
                    </Message>
                    <Message fromYou>
                        Bora!.
                    </Message>
                    <Message fromYou>
                        Só vou terminar de instalar
                    </Message>
                    <Message>
                        Olha o jogo que eu comprei
                        <img src="http://localhost:5173/static/fw.webp" alt="" />
                    </Message>

                    <div className="absolute bottom-0 right-0 left-0 w-full flex gap-2 bg-zinc-600 p-4">
                        <Input type="text" placeholder="Send Your Message" className="bg-zinc-800 text-zinc-200 border-none" />
                        <Button className="gap-4">Send <Send/></Button>
                    </div>
                </div>
            </section>
        </main>
    )
}