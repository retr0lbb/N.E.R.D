import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Pencil } from "lucide-react"

export const Config: React.FC = () => {
    return(
        <main className="mt-[10vh] min-h-[90vh] w-screen grid place-items-center bg-zinc-900 p-32">
            <Tabs defaultValue="perfil" className="w-full h-full">
                <TabsList >
                    <TabsTrigger value="perfil">Perfil</TabsTrigger>
                    <TabsTrigger value="dispositivos">Dispositivos</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="pagamento">Métodos de pagamento</TabsTrigger>
                    <TabsTrigger value="compras">Ultimas Compras</TabsTrigger>
                    <TabsTrigger value="carteira">Carteira</TabsTrigger>
                </TabsList>
                <TabsContent value="perfil" className="bg-red-500">
                    <Card className="border-none">
                        <CardHeader className="p-0 relative w-full">
                            <img className="max-h-36 w-full object-cover backdrop-filter" src="http://localhost:5173/static/ds1.jpg" alt="" />
                            <Pencil className="absolute top-0 right-5 cursor-pointer hover:text-zinc-200 hover:scale-105 text-zinc-500" />
                        </CardHeader>
                        <CardContent className="flex flex-col">
                            <div className="flex items-center justify-around mt-4">
                                <div>
                                    <h1 className="font-bold text-zinc-950">Foto de Perfil: </h1>
                                    <p className="text-xs max-w-96 text-zinc-400">Essa foto sera sua foto de perfil publica pessoas podem te indentificar a pertir dessa foto</p>
                                </div>

                                <img src="http://localhost:5173/static/ds1.jpg" className="w-16 h-16 object-center object-cover" alt="" />
                            </div>

                            <div>
                            <h1 className="font-bold">Tema de cores</h1>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="dispositivos">Hey Ima device maam</TabsContent>
                <TabsContent value="email">Emailer mais main</TabsContent>
                <TabsContent value="pagamento">Hey i'm a furry</TabsContent>
                <TabsContent value="compras">You bought a fursuit your weirdo</TabsContent>
                <TabsContent value="carteira">You Have 1119 dollar UwU</TabsContent>

            </Tabs>
        </main>
    )
}