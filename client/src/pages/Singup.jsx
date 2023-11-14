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

    const handleEnter = ()=>{
        if(step == 1){
            if(!inputValue){
                alert("insira dados validos");
                return;
            }
            setUserName(inputValue);
            setStep(2);
            setInputValue("")
            inputRef.current.focus()
        }
        if(step === 2){
            if(!inputValue){
                alert("insira dados validos");
                return;
            }
            setEmail(inputValue);
            setStep(3);
            setInputValue("");
            console.log("nome de usuario", userName);
            console.log("Email: ", email);
            inputRef.current.focus();
        }
        if(step === 3){
            if(!inputValue){
                alert("insira dados validos");
                return;
            }
            setPass(inputValue);
            setStep(4);
            setInputValue("");
        }
        if(step === 4){
            if(!inputValue){
                alert("insira dados validos");
                return;
            }
            let confirmPass;
            confirmPass = inputValue;
            if(confirmPass != pass){
                alert(confirmPass + " As senhas não batem "+ pass);
                setInputValue("");
                setStep(3);
                return;
            }
            setStep(5)
            setInputValue("");
        }
        if(step === 5){
            if(!inputValue){
                alert("insira dados validos");
                return;
            }

            switch (inputValue.toLocaleLowerCase()) {
                case "s":
                    alert("passou");
                    setInputValue("");
                    handleAxiosHTTP();
                    break;
                case "n":
                    alert("retornando dados");
                    setStep(1);
                    setInputValue("")
                    break;
                default:
                    alert("commando não reconhecido");
                    console.log(inputValue.toLocaleLowerCase())
                    setInputValue("")
                    break;
            }
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
                {step === 1 && `Insira o seu Nome de usuario`}
                {step === 2 && "Insira o seu email"}
                {step === 3 && "Insira sua senha"}
                {step === 4 && "Confirme sua senha"}
                {step === 5 && `Os dados estão corretos?[S/N]: ${userName}, ${email}, ${generateAsterisks(pass.length)}`}
                </styled.PText>
            </styled.Span>
            <styled.TerminalInput
                ref={inputRef}
                value={inputValue} 
                onKeyDown={(e) => 
                {
                    if(e.key === "Enter"){
                        handleEnter();
                    }
                }} 
                onChange={(event) => {setInputValue(event.target.value)}}
                >
                    
                </styled.TerminalInput>
        </styled.Wrapper>
        </styled.terminalBody>
   
       
    )
}