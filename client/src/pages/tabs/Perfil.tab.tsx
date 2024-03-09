import React from "react"

import ProfileTabComponent, {NormalInput, SquareInput, SwitchInput} from "@/components/composition-components/ConfigPages"


export const ProfileTab: React.FC = () => {
    return(
        <ProfileTabComponent.Root value="perfil">
            <ProfileTabComponent.Header>
            <h1 className="text-3xl font-semibold text-zinc-200">Perfil e Aparencia</h1>
                <p className="text-zinc-500">Personalize como que as pessoas que usam a plataforma te vêem e como você ve a plataforma</p>
            </ProfileTabComponent.Header>
            <ProfileTabComponent.Content>

                <ProfileTabComponent.Item 
                    label="Foto de perfil" 
                    description="Essa sera sua foto publica de perfil, escolha com sabedoria">
                    <SquareInput />
                </ProfileTabComponent.Item>

                <ProfileTabComponent.Item label="Tema de Cores" 
                    description="Personalize a NERD para que ela fique com a sua cara">
                    <SquareInput />
                </ProfileTabComponent.Item>

                <ProfileTabComponent.Item 
                    label="Biografia de Perfil" 
                    description="Escreva uma pequena frase ou link que fale sobre você">
                        <NormalInput isDisable value="@9912"/>
                </ProfileTabComponent.Item>

                <ProfileTabComponent.Item 
                    label="Permitir Pedidos de Amizade?" 
                    description="ativa as notificações de pedidos de amizade. Oi, quer ser meu amigo?">
                        <SwitchInput color="secondary" className=""/>
                </ProfileTabComponent.Item>

                <ProfileTabComponent.Item 
                    label="É Desenvolvedor?" 
                    description="Ativa a opção 'Publicar Jogo' no perfil. Com 
                    grandes poderes vem grandes responsabilidades">
                        <SwitchInput color="secondary" className=""/>
                </ProfileTabComponent.Item>

            </ProfileTabComponent.Content> 
        </ProfileTabComponent.Root>
    )
}