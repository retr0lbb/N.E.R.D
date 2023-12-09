import styled from "styled-components";
import { useEffect, useState } from "react";
import PrimarySearchAppBar from "../app/shared/components/appBar";
import MicroGames from "../app/shared/components/MicroGamesLibModelPageExample";
import axios from "axios";

const BuscarLibDeUsuario = async(token, userId)=>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    await axios.get(`http://localhost:3000/users/userFindId/${userId}`, config)
    .then((response) =>{
        console.log(response)
    })
}


export default function LibPage(){
    useEffect(()=>{
        const fetchData = async() =>{
            const token =  localStorage.getItem("Token")
            const userId =  localStorage.getItem("userId")
            await BuscarLibDeUsuario(token, userId)
        };
        fetchData();
    }, []);
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
    background-color: red;
`
const BodyFlex = styled.div`
    width: 100%;
    height: 90vh;
    padding: 50px;
    gap: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
`