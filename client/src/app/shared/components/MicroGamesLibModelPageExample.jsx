import styled from "styled-components"

export default function MicroGames({name, src, gameFiles}){
    const handleDowload = () =>{
        if(gameFiles && gameFiles.src){
            const gambinoString = gameFiles.src
            const cleanString = gambinoString.replace(/^(\.\.\/)+/, '')
            
            const fileUrl = `https://3000-retr0lbb-nerd-9poa79tp0d0.ws-us107.gitpod.io/${cleanString}`
            console.log(fileUrl)


            const link = document.createElement("a")

            link.href = fileUrl;
            link.download = gameFiles.name

            document.body.appendChild(link);

            // Aciona o clique no link
            link.click();
      
            // Remove o link do corpo do documento
            document.body.removeChild(link);
        }
    }

    return(
        <GameWrapper onClick={()=>{(handleDowload())}}><GameImageCover src={src}/></GameWrapper>
    )
}

const GameWrapper = styled.div`
    width: 95%;
    height: 75%;
    border-radius: 20px;
    border: 1px solid black;
    cursor: pointer;
    overflow: auto;
`
const GameImageCover = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    `