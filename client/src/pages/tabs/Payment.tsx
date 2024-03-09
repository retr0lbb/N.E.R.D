import React from "react"
import PaymentConfigTab, {SwitchInput, NormalInput, CheckBoxInput, CheckBoxInputItem} from "@/components/composition-components/ConfigPages"
import { RiVisaLine } from "react-icons/ri";
import { FaCcAmex } from "react-icons/fa6";
import { CardLabel } from "@/components/microComponents/CardLabel";

export const Payment: React.FC = () => {
    return(
        <PaymentConfigTab.Root value="pagamento">
            <PaymentConfigTab.Header>
                <h1>Preferencias de Login e email</h1>
            </PaymentConfigTab.Header>
            <PaymentConfigTab.Content>
                <h1 className="text-zinc-200">Cartões Cadastrados</h1>

                <CardLabel CardNumber="9999" Icon={FaCcAmex}  CardOwner="henrique Barbosa Sampaio"/>
            </PaymentConfigTab.Content> 
        </PaymentConfigTab.Root>
    )
}