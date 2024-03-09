import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabConfigPage from "@/components/composition-components/ConfigPages"
import { NormalInput, SwitchInput, CheckBoxInput, CheckBoxInputItem } from "@/components/composition-components/ConfigPages"
import {ProfileTab} from "./Perfil.tab"
import { Preferencias } from "./Preferencias"
import { Email } from "./Email"
import { Payment } from "./Payment"

export const Config: React.FC = () => {
    return(
        <main className="mt-[10vh] min-h-[90vh] w-screen grid place-items-center bg-zinc-900 p-32">
            <Tabs defaultValue="perfil" className="h-full">
                <TabsList >
                    <TabsTrigger value="perfil">Perfil</TabsTrigger>
                    <TabsTrigger value="preferencias">Preferencias de Conteudo</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="pagamento">Métodos de pagamento</TabsTrigger>
                    <TabsTrigger value="compras">Ultimas Compras</TabsTrigger>
                    <TabsTrigger value="carteira">Carteira</TabsTrigger>
                </TabsList>

                <ProfileTab></ProfileTab>
                <Preferencias></Preferencias>
                <Email></Email>
                <Payment></Payment>

                <TabsContent value="pagamento">Hey i'm a furry</TabsContent>
                <TabsContent value="compras">You bought a fursuit your weirdo</TabsContent>
                <TabsContent value="carteira">You Have 1119 dollar UwU</TabsContent>

            </Tabs>
        </main>
    )
}