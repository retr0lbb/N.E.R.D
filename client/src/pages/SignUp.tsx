import React, { useState } from "react";
import { Button, useNavbar } from "@nextui-org/react";
import { BlockOfWritting } from "@/components/shared/BlockOfWritting";
import { asciiImage } from "@/lib/asciiHandler";
import "@/animations/typewritting.css";
import { InputComp } from "@/components/Input";
import { Eye, User2, Mail, Pencil, Lock, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
    const [isInit, setIsInit] = useState(false)
    const [steps, setSteps] = useState(0)
    const [userName, setUserName] = useState("")
    const [email, SetEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [editable, setEditable] = useState(false)
    const navigator = useNavigate()


    function generateSwitch(step: number){
    
    function isValidEmail(email: string) {
        const emailRegex = /@gmail\.com$|@hotmail\.com$/i; // Expressão regular para verificar se termina com @gmail ou @hotmail
        return emailRegex.test(email);
    }
        
        switch (step) {
            case 0:
                return(
                    <BlockOfWritting key={step} text="Por favor Insira o seu " HasLightText lightText="Email">
                        <InputComp value={email} Icon={<Mail color="violet" />} type="Email" placeholder="Email..." onChange={(e) => {
                            SetEmail(e.target.value)
                        }}  className="text-xl"
                        onKeyDown={(e) => {
                            if(e.key !== "Enter") return;
                            if(email === ""){
                                return alert("insira o seu email corretamente");
                            }
                            if(!isValidEmail(email)){
                                return alert("Insira um email valido");
                            }
                            setSteps(prev=> prev + 1)
                        }}
                        />
                    </BlockOfWritting>
                )

            case 1:
                const handlePassKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
                    if(e.key !== "Enter") return;
                    if(pass === "" || confirmPass === ""){
                        alert("insira os campos corretamente")
                        return;
                    }
                    if(pass == confirmPass){
                        setSteps(prev => prev + 1)
                        return;
                    }
                    setPass("")
                    setConfirmPass("")
                    alert("as senhas não batem")
                }
                return(
                    <BlockOfWritting key={step} text="Por Favor insira a sua " HasLightText lightText="Senha">
                        <InputComp value={pass} required type="password" placeholder="Senha..." onChange={(e) => {
                            setPass(e.target.value)
                        }} className="text-xl"
                        onKeyDown={handlePassKeyDown} 
                        lastIcon={<Eye/>}
                        />
                        
                        <InputComp value={confirmPass} required type="password" placeholder="Confirme sua senha..." onChange={(e) => {
                             setConfirmPass(e.target.value)
                        }}  className="text-xl"
                        onKeyDown={handlePassKeyDown}
                        lastIcon={<Eye/>}
                        />
                    </BlockOfWritting>
                )

            case 2:
                return(
                    <BlockOfWritting key={step} text="Por favor Insira o seu " HasLightText lightText="Nome de Usuario">
                        <InputComp type="Email" placeholder="UserName..." onChange={(e) => {
                            setUserName(e.target.value)
                        }}  className="text-xl"
                        onKeyDown={(e)=>{
                            if(e.key !== "Enter") return;
                            if(userName === ""){
                                alert("insira um Nome de usuario valido corretamente")
                                return;
                            }
                            setSteps(prev=> prev + 1)
                        }}
                        Icon={<User2  color="violet"/>}
                        />
                    </BlockOfWritting>
                )

            case 3: 
                return(
                    <Card>
                        <CardHeader className="flex items-center justify-center">
                            <CardTitle>Seja bem vindo</CardTitle>
                            <User2 size={64} className="rounded-full border-5 border-black"/>
                            <CardDescription>
                                Verifique se suas informações estão corretas
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center flex-col gap-5">
                            <div>
                                <label htmlFor="username">Nome de Usuario</label>
                                <Input 
                                startContent={<User2 />} 
                                endContent={<Pencil color={`${editable? "gray" : "black"}`} className="cursor-pointer z-30" onClick={() => setEditable(!editable)} />} 
                                type="text" id="username" 
                                name="username" 
                                className="text-xl" 
                                value={userName} 
                                onChange={(e) => {setUserName(e.target.value)}} 
                                disabled={!editable} />
                            </div>

                            <div>
                                <label htmlFor="email">Email cadastrado</label>
                                <Input 
                                startContent={<Mail />} 
                                endContent={<Pencil color={`${editable? "gray" : "black"}`} className="cursor-pointer z-30" onClick={() => setEditable(!editable)} />} 
                                type="email" id="email" 
                                name="email" 
                                className="text-xl" 
                                value={email} 
                                onChange={(e) => {SetEmail(e.target.value)}} 
                                disabled={!editable} />
                            </div>

                            <div>
                                <label htmlFor="email">senha cadastrada</label>
                                <Input 
                                startContent={<Lock />} 
                                endContent={<Pencil color={`${editable? "gray" : "black"}`} className="cursor-pointer z-30" onClick={() => setEditable(!editable)} />} 
                                type="passwors" id="email" 
                                name="email" className="text-xl" 
                                value={"*".repeat(pass.length)} 
                                onChange={(e) => {setPass(e.target.value)}} 
                                disabled={!editable} />
                            </div>
                           
                           <div className="w-full flex items-center justify-around">
                            <Button color="secondary" onClick={() => {
                                const userData = {
                                    name: userName,
                                    email: email,
                                    pass: pass
                                }
                                console.log(userData)
                                alert("Usuario cadastrado com sucesso indo para a home")
                                window.location.href = "/home"
                            }}>YES</Button>
                            <Button color="danger" onClick={()=> {setSteps(0); setIsInit(false)}}>NO</Button>
                           </div>
                        </CardContent>
                    </Card>
                )
            default:
                break;
        }
    }



    return(
    <>
        <div className="relative w-screen z-50 overflow-hidden grid place-content-center h-screen bg-[#14091e]">

            <div className="blur-sm w-full grid place-items-center h-full absolute top-0 left-0 right-0 text-[#4b2f67]">
                <pre className="w-full grid place-items-center select-none">
                    {asciiImage}
                </pre>
            </div>

            

            <div className="absolute flex items-center justify-center inset-0 w-full h-full bg-black/10">
                
            {isInit=== false? (
                <BlockOfWritting text="Bem Vindo a melhor plataforma de jogos digitais a" HasLightText lightText="NERD">
                    
                    <div className="flex gap-5">
                    
                    <Button 
                    onClick={() => navigator("/")} 
                    variant="shadow" color="danger" 
                    className="p-4 text-xl" size="lg" isIconOnly><ArrowLeft size={48} /></Button>

                    <Button 
                    onClick={() => setIsInit(true)} 
                    variant="ghost" color="secondary" 
                    className="p-4" size="lg">Iniciar Cadastro</Button>
                    
                    
                    </div>
                    
                </BlockOfWritting>
            ): (generateSwitch(steps))}
            </div>
        </div>
        </>
    )
}