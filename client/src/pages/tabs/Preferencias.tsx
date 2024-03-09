import React from "react"
import PreferencesConfigTab, {SwitchInput} from "@/components/composition-components/ConfigPages"

export const Preferencias: React.FC = () => {
    return(
        <PreferencesConfigTab.Root value="preferencias">
            <PreferencesConfigTab.Header>
                <h1>Preferencias de conteudo</h1>
            </PreferencesConfigTab.Header>
            <PreferencesConfigTab.Content>

                <PreferencesConfigTab.Item 
                    label="Permitir Conteudo Adulto" 
                    description="Jogos com a tag '+18' serão habilitadas. You'r Naught 😈">
                        <SwitchInput color="secondary"/>
                </PreferencesConfigTab.Item>

                <PreferencesConfigTab.Item 
                    label="Receber Notificações" 
                    description="Habilita notificações de mensagens e ofertas. 
                    Com certeza não é sua crush">
                        <SwitchInput color="secondary" className=""/>
                </PreferencesConfigTab.Item>

                <PreferencesConfigTab.Item 
                    label="Avisos de Atualização" 
                    description="Se desativado as atualizações ocorrem em 2° plano. 
                    NERD 200% Concluido">
                        <SwitchInput color="secondary" className=""/>
                    </PreferencesConfigTab.Item>
            </PreferencesConfigTab.Content> 
        </PreferencesConfigTab.Root>
    )
}