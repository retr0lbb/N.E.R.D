import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Paperclip, Image, FileText, FileVideo } from "lucide-react"
import { Message } from "@/components/shared/Chat";
import { Friend } from "@/components/shared/Friend";
import {  
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface MessageProps{
    message: string;
    image?: string
}


const MemoizedMessage = React.memo(({ message, img, index}: {message: string, img: string, index: number}) => {
    return(
        <Message fromYou={index%2 !== 0}>
            {message}
            {img && <img src={img} alt="Message Image" />}
        </Message>
    )
})


export const Friends: React.FC = () => {
    const [message, setMessage] = useState<MessageProps[]>([{message: "Olha o jogo que eu comprei ", image: "http://localhost:5173/static/fw.webp"}]);
    const [text, setText] = useState("");

    const scrollAreaRef = useRef<HTMLDivElement>(null)

    function handleMessageSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(text.trim() == ""){
            return -1
        }
        setText("")
        setMessage([...message, {message: text}])
    }

    useEffect(() => {
        // Função para rolar para baixo sempre que as mensagens mudarem
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [message]); // Rolar sempre que as mensagens mudarem
    
    return(
        <main className="w-screen mt-[10vh] min-h-[90vh] flex">
            <aside className="min-h-full flex flex-col gap-1 py-4 w-80 bg-zinc-950">
                <Friend name="MarioGames"  lastMessage="Olha o jogo que eu comprei 📷" isChatSelected={true}/>
                <Friend name="Geraldo Mata20" lastMessage="Bora jogar valorant que eu vou de jett"/>
                <Friend name="IlIlIl_Goz-draken_IlIl" lastMessage="X1?"/>
                <Friend name="ゲイ毛皮ポルノ"  lastMessage="I dare you to translate my name back"/>

            </aside>
            <section className="relative w-full flex flex-col items-center min-h-full bg-zinc-900 px-40">
                <div ref={scrollAreaRef} className=" scroll-smooth flex-1 max-h-[80vh] w-full py-10 px-32 overflow-y-auto">
                    
                   {message.map((item: MessageProps, index) => (
                    <MemoizedMessage key={index} index={index} img={item.image || ""} message={item.message} />
                   ))}
                    
                </div>
                <form onSubmit={handleMessageSubmit} 
                    className="w-full absolute bottom-0
                    px-64 flex items-center gap-2 py-8 text-zinc-200">
                        
                        <Input type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value) } 
                        placeholder="Send Your Message" 
                        className="bg-zinc-800  border-none py-7 px-4 text-xl" />
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                             <Button size="icon">
                                <Paperclip />
                             </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-zinc-700 border-none text-zinc-400">
                                <DropdownMenuItem className="cursor-pointer bg-zinc-700"><Image className="mr-2"/> Imagen </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer bg-zinc-700"><FileText className="mr-2"/> Arquivo </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer bg-zinc-700"><FileVideo className="mr-2"/> Gif </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="icon" type="submit" className="rounded-full">
                            <Send/>
                        </Button>
                    </form>
            </section>
        </main>
    )
}