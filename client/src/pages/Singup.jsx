import {useState} from "react"
import {Wrapper,TerminalInput, TextHolder} from "./styles"


export default function Singup(){
  const banner = [
    "                           \n%%%%%%%%%%%%%%%%%%%                         ",<br></br>,
    "                       \n@@@@@%                %%%%%%                    ",<br></br>,
    "                    \n@@@@%                        %%%%                  ",<br></br>,
    "                  \n@@@@                             %%%%                ",<br></br>,
    "                \n@@@@                                  %%%              ",<br></br>,
    "               \n@@@                                     %%%             ",<br></br>,
    "            \n@@@@@@@@@@@@@@@@@@@@@@     @%%%%%%%%%%%%%%%%%%%%%          ",<br></br>,
    "           \n@@@   @@@@@@@@@@@@@@@%@@@@@%%%%%%%%%%%%%%%%%%   %%%         ",<br></br>,
    "            \n@@@ @@@     @@@@   @@@ @@%@@@%   %%%%     %%%  %%%         ",<br></br>,
    "           \n@@@@@@@     @@@@@@   @@     @@@  %%%%%%     %%%%%%%         ",<br></br>,
    "           \n@@ @@@@    @@@  @@  @@%@@@@@@@%  %%  %%%    %%%% %%%        ",<br></br>,
    "          \n@@@ @@@@@    @@ @@@  @@@@@ %@@@@  %@@ %%%    %%%%  %%        ",<br></br>,
    "          \n@@  @@@@@     @@@@   @@@@   @@@@   @@%%     %%%%%  %%        ",<br></br>,
    "          \n@@   @@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@%%%%%%%%%  %%        ",<br></br>,
    "          \n@@    @@@@@@@@@@@@@@@@@@     @@@@@@%%%%%%%%%%%%%   %%        ",<br></br>,
    "          \n@@                                                 %%        ",<br></br>,
    "          \n@@@                                                %%        ",<br></br>,
    "      \n@@        @@@@@@@     @@@@@@@@@@@    @@@@@@@@@@@     %%%%%%%%%   ",<br></br>,
    "    \n@@@@@@@     @@@@@@@   @@@@@@@@@@@@@  @@@@@@@@@@@@@%    %%%%%%%%%%  ",<br></br>,
    "   \n@@@@@@@@@    @@@@@@@ @@@@@@@@@@@@@@@            @@@@%   %%%%%%%%%%%%",<br></br>,
    "    \n@@@@@@@@@@  @@@@@@@                            @@@@@  %@      %%%%%",<br></br>,
    "   \n@@ @@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@     @@@@@@@@@@@@  @@      %%%%%",<br></br>,
    "   \n@@@@ @@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@     @@@@@@@@@@@           %%%%%",<br></br>,
    "   \n@@@@@  @@@@@@@@@@@@@ @@@@@@@@@@@@@@@     @@@@@@@       @@%     %%%%%",<br></br>,
    "   \n@@@@@@@  @@@@@@@@@@@ @@@@@                 @@@@@@@            @@@%%%",<br></br>,
    "   \n@@@@@@@    @@@@@@@@   @@@@@@@@@@@@@@        @@@@@@@     @@@@@@@@@@@@",<br></br>,
    "   \n@@@@@@@      @@@@       @@@@@@@@@@@@          @@@@@@@   @@@@@@@@%%  ",<br></br>,
    "   \n@@@@@@@       @@         @@@@@@@@@@@            @@@@@@@ @@@@@@@@    ",<br></br>,
  ]

    
    const [terminalInput, setTerminalInput] = useState("");
    const [commandHistory, setCommandHistory] = useState([banner]);

    const nerdImage = ""

    const handleCommand = (command) => {
        switch (command) {
          case "clear":
            setCommandHistory([]);
            break;
          case "help":
            setCommandHistory([...commandHistory, "Lista de comandos disponíveis: clear \n, help"]);
            break;
          default:
            setCommandHistory([...commandHistory, "Comando desconhecido"]);
            break;
        }
      };
    const handleEventKeyDown = (e)=>{
        if(e.key ==="Enter"){

            const inputCommand = terminalInput.trim()
            setTerminalInput("");

            if(inputCommand){
                handleCommand(inputCommand)
            }
        }
    };
    return(
    <Wrapper>
        <TextHolder>
        {commandHistory.map((command, index) => (
          <div key={index}>{command}, <br></br></div>
        ))}
        </TextHolder>
        <TerminalInput
        type="text"
        value={terminalInput}
        onChange={ e => {
            setTerminalInput(e.target.value)
        }}
        onKeyDown={handleEventKeyDown}
        />
      </Wrapper>
    )
}