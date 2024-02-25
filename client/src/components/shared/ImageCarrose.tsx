import React from "react"


interface ImageCarroseProps{
    title: string,
    price: string,
    src: string
}

export const ImageCarrose: React.FC<ImageCarroseProps> = ({title, price, src}) => {
    return(
        <div className="w-full h-full relative">
            <div className="text-slate-50 
                absolute bottom-0 left-0 w-full
                bg-black/70 p-16 pb-24
                bg-gradient-to-t from-black/80 to-transparent
                z-10 text-2xl font-bold
                flex flex-col
                gap-5 rouded 
                backdrop-blur-sm
                ">
                
                <div className="w-full h-full absolute inset-0 blur-lg bg-black/10"></div>
                
                <h1 className="text-6xl">{title}</h1>
                <p className="text-large text-zinc-400">R$: {price}</p>
            </div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-zinc-950/50 to-slate-900/20"></div>
            <img src={src} className="w-full h-full bg-slate-800 object-cover" alt="Imagem teste para o negocio aqui" />  
        </div>
    )
}