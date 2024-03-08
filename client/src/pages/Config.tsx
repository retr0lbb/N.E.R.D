import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabConfigPage from "@/components/composition-components/ConfigPages"
import {NormalInput, SquareInput, SwitchInput} from "@/components/composition-components/ConfigPages/LabelItem"

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
                <TabConfigPage.Root value="perfil">
                    <TabConfigPage.Header>
                        <h1>Memez</h1>
                    </TabConfigPage.Header>
                    <TabConfigPage.Content>
                        <TabConfigPage.Item label="Nome Do Usuario"><NormalInput isDisable value="Malu GGEZ"/></TabConfigPage.Item>
                        <TabConfigPage.Item label="Tema de Cores"><SquareInput /></TabConfigPage.Item>
                        <TabConfigPage.Item label="Biografia de Perfil"><NormalInput isDisable value="@9912"/></TabConfigPage.Item>
                        <TabConfigPage.Item label="Permitir Pedidos de Amizade? "><SwitchInput className=""/></TabConfigPage.Item>
                    </TabConfigPage.Content>
                </TabConfigPage.Root>

                <TabsContent value="dispositivos">Hey Ima device maam</TabsContent>
                <TabsContent value="email">Emailer mais main</TabsContent>
                <TabsContent value="pagamento">Hey i'm a furry</TabsContent>
                <TabsContent value="compras">You bought a fursuit your weirdo</TabsContent>
                <TabsContent value="carteira">You Have 1119 dollar UwU</TabsContent>

            </Tabs>
        </main>
    )
}