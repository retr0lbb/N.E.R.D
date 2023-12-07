import React, {useEffect} from "react";
import { Box } from "@mui/system";
import PrimarySearchAppBar from "../shared/components/appBar";
import Teste from "./teste carousel/teste";
import { Container } from "../shared/components/Container/Container";
import { Category } from "../shared/components/Category";
import axios from "axios";
import { dataDigitalBestSeller } from './teste carousel/data';
import AsNavFor from "./teste/teste2";


function filterCategory() {
  return dataDigitalBestSeller.filter(video => video.category)
}

function getAllGames(){
  axios.get("http://localhost:3000/games").then(response => {
    const gameArray = response.data.data
    console.log(gameArray[0])
  })
}

export default function Home() {
  return (
      <Box sx={{
        height: '',
        width: '100vw',
        background: 'linear-gradient(to right, #330057, #2A018C, #941DE8)',
      }}>
        <PrimarySearchAppBar />
      
        <Container>

              <AsNavFor/>

              <Teste category="Corrida"/>
          
            
              <Teste category="FPS"/>
        
       

              <Teste category="Terror"/>
        
        
        </Container>
     
      </Box> 
  );
}