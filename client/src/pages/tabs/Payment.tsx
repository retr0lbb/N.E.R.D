import React from "react"
import PaymentConfigTab, {SwitchInput, NormalInput, CheckBoxInput, CheckBoxInputItem} from "@/components/composition-components/ConfigPages"
import { RiVisaLine } from "react-icons/ri";
import {CreditCard, CircleFadingPlus} from "lucide-react"
import { FaCcAmex } from "react-icons/fa6";
import { CardLabel } from "@/components/microComponents/CardLabel";

export const Payment: React.FC = () => {
    return(
        <PaymentConfigTab.Root value="pagamento">
            <PaymentConfigTab.Content>

                <h1 className="text-zinc-200 text-xl font-bold">Cartões Cadastrados: </h1>
                <CardLabel CardNumber={4242424242424242} 
                    Icon={FaCcAmex}  
                    CardOwner="henrique Barbosa Sampaio"/>
                <CardLabel 
                    CardNumber={1234123412341234} 
                    Icon={RiVisaLine}  
                    CardOwner="Jhoe Doe"/>
                <div className="flex shadow-lg items-center hover:border-purple-500 gap-3 cursor-pointer transition-all justify-center rounded-full px-6 py-4 border-4 border-dashed border-zinc-500 text-2xl font-bold text-zinc-300">
                    <CreditCard />
                    <p>Adicionar Novo Cartão</p>
                </div>
            </PaymentConfigTab.Content> 
        </PaymentConfigTab.Root>
    )
}