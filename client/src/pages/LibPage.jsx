import styled from "styled-components";
import { useEffect } from "react";
import PrimarySearchAppBar from "../app/shared/components/appBar";
import MicroGames from "../app/shared/components/MicroGamesLibModelPageExample";
import axios from "axios";

const BuscarLibDeUsuario = async(token)=>{

}


export default function LibPage(){
    useEffect(()=>{
        axios.get("")
    }, [])
    return(
        <MainWrapper>
            <PrimarySearchAppBar />
            <BodyFlex>
            <SideGamesMenu>sideBAr</SideGamesMenu>

            <LibMainDiv>
                <MicroGames name="gta" />
                <MicroGames />
                <MicroGames />
            </LibMainDiv>

            </BodyFlex>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
`
const LibMainDiv = styled.div`
    width: 75%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Cria duas colunas de largura igual */
    gap: 10px; /* Adiciona espaçamento entre os itens */
`
const SideGamesMenu = styled.div`
    width: 25%;
    height: 100%;
`
const BodyFlex = styled.div`
    width: 100%;
    height: 90vh;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
`