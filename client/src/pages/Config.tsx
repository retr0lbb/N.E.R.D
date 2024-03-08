import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabConfigPage from "@/components/composition-components/ConfigPages"
import { NormalInput, SquareInput, SwitchInput } from "@/components/composition-components/ConfigPages"

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
                <TabConfigPage.Root value="perfil">
                    <TabConfigPage.Header>
                        <h1>Memez</h1>
                    </TabConfigPage.Header>
                    <TabConfigPage.Content>
                        <TabConfigPage.Item label="Foto de perfil" description="Essa sera sua foto publica de perfil, escolha com sabedoria"><SquareInput /></TabConfigPage.Item>
                        <TabConfigPage.Item label="Tema de Cores" description="Personalize a NERD para que ela fique com a sua cara"><SquareInput /></TabConfigPage.Item>
                        <TabConfigPage.Item label="Biografia de Perfil" description="Escreva uma pequena frase ou link que fale sobre você"><NormalInput isDisable value="@9912"/></TabConfigPage.Item>
                        <TabConfigPage.Item label="Permitir Pedidos de Amizade?" description="ativa as notificações de pedidos de amizade. Oi, quer ser meu amigo?"><SwitchInput color="secondary" className=""/></TabConfigPage.Item>
                        <TabConfigPage.Item label="É Desenvolvedor?" description="Ativa a opção 'Publicar Jogo' no perfil. Com grandes poderes vem grandes responsabilidades"><SwitchInput color="secondary" className=""/></TabConfigPage.Item>
                    </TabConfigPage.Content> 
                </TabConfigPage.Root>


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
                        <TabConfigPage.Item label="Permitir Conteudo Adulto" description="Alterar Email"><NormalInput value="MaluGGEz@gmail.com" isDisable/></TabConfigPage.Item>
                        <TabConfigPage.Item label="Permitir Conteudo Adulto" description="Jogos com a tag '+18' serão habilitadas. You'r Naught 😈"><SwitchInput color="secondary"/></TabConfigPage.Item>
                        
                    </TabConfigPage.Content> 
                </TabConfigPage.Root>
                <TabsContent value="pagamento">Hey i'm a furry</TabsContent>
                <TabsContent value="compras">You bought a fursuit your weirdo</TabsContent>
                <TabsContent value="carteira">You Have 1119 dollar UwU</TabsContent>

            </Tabs>
        </main>
    )
}