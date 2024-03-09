import React from "react"
import EmailConfigTab, {SwitchInput, NormalInput, CheckBoxInput, CheckBoxInputItem} from "@/components/composition-components/ConfigPages"


export const Email: React.FC = () => {
    return(
        <EmailConfigTab.Root value="email">
                    <EmailConfigTab.Header>
                        <h1>Preferencias de Login e email</h1>
                    </EmailConfigTab.Header>
                    <EmailConfigTab.Content>

                        <EmailConfigTab.Item 
                            label="Email Cadastrado" 
                            description="Alterar Email">
                                <NormalInput value="MaluGGEz@gmail.com" isDisable/>
                        </EmailConfigTab.Item>

                        <EmailConfigTab.Item 
                            label="Enviar promoções para email" 
                            description="Envia notificações de promoção por email.
                             Seu proprio olho de Sauron 👀">
                                <SwitchInput />
                        </EmailConfigTab.Item>
                        
                        <EmailConfigTab.Item 
                            className="flex-col items-start gap-3" 
                            label="Notificar Por Email Quando: " 
                            description="Personalize o que você gostaria de receber por email. 
                            Não somos hipsters">

                            <CheckBoxInput>
                                <CheckBoxInputItem label="Citações feitas por @" />
                                <CheckBoxInputItem label="Like Em Publicações" />
                                <CheckBoxInputItem label="Pedidos de amizade" />
                                <CheckBoxInputItem label="Ao receber mensagens" />
                                <CheckBoxInputItem label="Ao comprarem o seu jogo" />
                                <CheckBoxInputItem label="Posts de seguidores" />
                            </CheckBoxInput>
                        </EmailConfigTab.Item>
                        
                    </EmailConfigTab.Content> 
                </EmailConfigTab.Root>
    )
}