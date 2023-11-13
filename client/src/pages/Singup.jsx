import react from "react"
import { useState, useRef, useEffect } from "react"
import {BsFillTerminalFill} from "react-icons/bs"
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
    const inputRef = useRef()


    useEffect(()=>{
        inputRef.current.focus()
    }, [])

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
        5: {
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

    
    
    return(
        <styled.terminalBody onClick={e =>{inputRef.current.focus()}}>
            <styled.Wrapper>
                <styled.navBarTerminal>
                    <styled.interiorNavBartTerminal>
                        <BsFillTerminalFill color="black" scale={50} size={50}/>
                <styled.interiorNavBartTerminalminText>Registo N.E.R.D</styled.interiorNavBartTerminalminText>
                </styled.interiorNavBartTerminal>
            <styled.buttonWrapper><styled.buttonExit onClick={()=>{window.location.href = "*"}}>X</styled.buttonExit></styled.buttonWrapper>
            
        </styled.navBarTerminal>
            <styled.Span>
                <styled.AsciiWrapper>
                    <styled.Ascii cor={changeAsciiColor("white")}>
                        {asciiArt}
                    </styled.Ascii>
                </styled.AsciiWrapper>
                <styled.PText>
                    {text[`${step}`].main || ""}<styled.HightLight cor={step === 18 ? "#761DF2": "#EE05F2"}>{text[`${step}`].light || ""}</styled.HightLight>
                </styled.PText>
            </styled.Span>
            <styled.TerminalInput
                ref={inputRef}
                value={inputValue} 
                onKeyDown={(e) => console.log(e)} 
                onChange={(event) => {setInputValue(event.target.value)}}
                type={step === 1? "email": "text"}
                >
                    
                </styled.TerminalInput>
        </styled.Wrapper>
        </styled.terminalBody>
   
       
    )
}