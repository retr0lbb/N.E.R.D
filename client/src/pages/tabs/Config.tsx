import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabConfigPage from "@/components/composition-components/ConfigPages"
import { NormalInput, SwitchInput, CheckBoxInput, CheckBoxInputItem } from "@/components/composition-components/ConfigPages"
import {ProfileTab} from "./Perfil.tab"

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

                <TabConfigPage.Root value="preferencias">
                    <TabConfigPage.Header>
                        <h1>Preferencias de conteudo</h1>
                    </TabConfigPage.Header>
                    <TabConfigPage.Content>
                        <TabConfigPage.Item label="Permitir Conteudo Adulto" description="Jogos com a tag '+18' serão habilitadas. You'r Naught 😈"><SwitchInput color="secondary"/></TabConfigPage.Item>
                        <TabConfigPage.Item label="Receber Notificações" description="Habilita notificações de mensagens e ofertas. Com certeza não é sua crush"><SwitchInput color="secondary" className=""/></TabConfigPage.Item>
                        <TabConfigPage.Item label="Avisos de Atualização" description="Se desativado as atualizações ocorrem em 2° plano. NERD 200% Concluido"><SwitchInput color="secondary" className=""/></TabConfigPage.Item>
                    </TabConfigPage.Content> 
                </TabConfigPage.Root>


                <TabConfigPage.Root value="email">
                    <TabConfigPage.Header>
                        <h1>Preferencias de Login e email</h1>
                    </TabConfigPage.Header>
                    <TabConfigPage.Content>
                        <TabConfigPage.Item label="Email Cadastrado" description="Alterar Email"><NormalInput value="MaluGGEz@gmail.com" isDisable/></TabConfigPage.Item>
                        <TabConfigPage.Item label="Enviar promoções para email" description="Envia notificações de promoção por email. Seu proprio olho de Sauron 👀"><SwitchInput /></TabConfigPage.Item>
                        <TabConfigPage.Item className="flex-col items-start gap-3" label="Notificar Por Email Quando: " description="Personalize o que você gostaria de receber por email. Não somos hipsters">
                            <CheckBoxInput>
                                <CheckBoxInputItem label="Citações feitas por @" />
                                <CheckBoxInputItem label="Like Em Publicações" />
                                <CheckBoxInputItem label="Pedidos de amizade" />
                                <CheckBoxInputItem label="Ao receber mensagens" />
                                <CheckBoxInputItem label="Ao comprarem o seu jogo" />
                                <CheckBoxInputItem label="Posts de seguidores" />
                            </CheckBoxInput>
                        </TabConfigPage.Item>
                        
                    </TabConfigPage.Content> 
                </TabConfigPage.Root>

                <TabsContent value="pagamento">Hey i'm a furry</TabsContent>
                <TabsContent value="compras">You bought a fursuit your weirdo</TabsContent>
                <TabsContent value="carteira">You Have 1119 dollar UwU</TabsContent>

            </Tabs>
        </main>
    )
}