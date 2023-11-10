import react from "react"
import { useState, useRef } from "react"
import {styled} from "../components/index"
import axios from "axios"

export default function Singup(){
    
    const asciiArt = `                                                                                                                          
                                     .....                                      
                             .:-====-------====-:.                              
                         :-==-:.               .:-==-:                          
                      :==-.                         .-==:                       
                    -+-.                               .-+-                     
                  -+-                                     :+-                   
                :+=                                         -+:                 
             .-=++=================-:     .-=================++=-.              
             +-.  .----------------:==:::==:----------------:  .-+.             
             +=. :+:......:--:....=+ .:::. +=....:--:......:+: .=+              
            :+-+-:+.     -+::+-   -+       +-   -+::+-     .+::+-+:             
            += =+.+:    .+-  :+.  == :===- =+  .+-  :+.    :+.== -+             
           :+. -+.+=     ==. =+   +--+.  +-:+.  ==. =+     -+.+-  +-            
           =+  .+:=+      :==-   :+:=+   ==.+:   :==-      ==.+:  ==            
           +=   ==:-==============-:+:   :+::==============-.==   -+            
           +=    :==--------------+=.     .=+--------------==-    -+            
           =+       ..............            .............       ==            
           .:                                                     :.            
      .=-        :++++++      :=++++++++++    .===========.     ========:       
    .=++++-      :++++++    :=++++++++++++  .=+++++++++++++:    +++++++++=:     
   .++++++++-    :++++++   ---------------  ....       .++++    ------+++++=:   
     -++++++++-  :++++++                                ++++   ..      -++++=   
   =:  -++++++++--++++++  -+++++++++++++++     .========+++=   ::      .++++=   
   =++:  -++++++++++++++  -+++++++++++++++     :++++++++++=            .++++=   
   =++++:  -++++++++++++  -+++=-----------      =+++++-...     --      .++++=   
   =+++++=   -++++++++++  -+++:                  .=++++=.             :=++++=   
   =++++++     -+++++++-   :++++++++++++++         .=++++=.     +++++++++++-    
   =++++++       -+++-       :++++++++++++           .=++++=.   +++++++++-      
:-----:         :           :::::::::::             .:::::.  ::::::::   
    
`;

    const [step, setStep] = useState(1);
    const [hasError, setHasError] = useState(false)
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("")
    const [inputValue, setInputValue] = useState("");


    function generateAsterisks(length) {
        return '*'.repeat(length);
      }
    const text = {
        1: {
            main: "Por Favor insira o seu",
            light: "Email: "
        },
        2:{
            main: "Por Favor insira o seu",
            light: "Nome De Usuario: "
        },
        3: {
            main: "Por Favor insira sua",
            light: "Senha: "
        },
        4:{
            main: "Insira novamente a sua",
            light: "Senha"
        },
        18: {
            main: "Suas informações estão corretas? [S/N]",
            light: `${email}, ${userName}, ${generateAsterisks(pass.length)}`
        },
        200: {
            main: "Usuario cadastrado com ",
            light: "Exito!"
        }
    }
    const changeAsciiColor = (color, shadowColor) =>{
        let asciiColor;
        asciiColor = color
        if(step == 200){
            asciiColor = "green"
        }

        return asciiColor
    }
    const handleAxiosHTTP = async()=>{
        if(!userName || !email || !pass){
            return(alert("Faltam dados"));
        }
        try {axios.post("https://3000-retr0lbb-nerd-vtbe03zy0uy.ws-us105.gitpod.io/users", {email: email, name: userName, pass: pass}).then(response => {
            if(response.status==200){
                setInputValue("");
                setStep(200);
                setTimeout(() => {

                    window.location.href = "/home";
                  }, 1500);
            }
        }).catch((err)=>{
            if(err){
                console.log(err)
                alert("DEU ERRO")
            }
        })
            
        } catch (error) {
            console.log(error);
            alert("DEU ERRo")
        }
        
    }
    const handleKeyPressed = (event) =>{
        if(event.key === "Enter"){
            if(!inputValue){
                return alert("insira os dados corretamente") 
            }
            if(step === 5){
                if(pass != confirmPass){
                    alert("As senhas não batem");
                    setStep(3)
                    console.log(pass, " espaço", confirmPass)
                    setInputValue("")
                    return;
                }
                setStep(18)
            }
            setStep(step + 1)
            switch (step) {
                case 1:
                    setEmail(inputValue)
                    setInputValue("")
                    console.log(step)
                    break;
                case 2:
                    setUserName(inputValue)
                    setInputValue("")
                    console.log(step)
                    break
                case 3:
                    setPass(inputValue)
                    setInputValue("")
                    console.log(step)
                    break;
                case 4:
                    setConfirmPass(inputValue)
                    console.log(inputValue)
                    console.log(step)
                    setInputValue("")
                    setStep(5)
                    break;
            }
            if(step == 18){
                switch (inputValue.toLowerCase()) {
                    case "s":
                        try {
                            handleAxiosHTTP()

                        } catch (error) {
                            if(error){
                                alert(error)
                            }
                        }
                        break;
                    case "n":
                        alert("revertendo dados");
                        setStep(1);
                        setInputValue("");
                        break;
                    default:
                        alert("Digite um valor valido");
                        console.log(inputValue.toLowerCase());
                    break;
                }
            }
        }
    }
    
    return(
        <styled.Wrapper>
            <styled.Span>
                <styled.AsciiWrapper>
                    <styled.Ascii cor={hasError === true ? "red": changeAsciiColor("pink")}>
                        {asciiArt}
                    </styled.Ascii>
                </styled.AsciiWrapper>
                <styled.PText>
                    {text[`${step}`].main || ""}<styled.HightLight cor={step === 18 ? "#761DF2": "#EE05F2"}>{text[`${step}`].light || ""}</styled.HightLight>
                </styled.PText>
            </styled.Span>
            <styled.TerminalInput 
                value={inputValue} 
                onKeyDown={handleKeyPressed} 
                onChange={(event) => {setInputValue(event.target.value)}}
                type={step === 1? "email": "text"}
                >
                    
                </styled.TerminalInput>
        </styled.Wrapper>
    )
}