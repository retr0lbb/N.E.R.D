import React from "react";
import { Box } from "@mui/system";
import PrimarySearchAppBar from "../shared/components/appBar";
import Teste from "./teste carousel/teste";
import { Container } from "../shared/components/Container/Container";



export default function Home() {
  return (
      <Box sx={{
        height: '150vh',
        width: '100vw',
        background: 'linear-gradient(to right, #330057, #2A018C, #941DE8)',
      }}>
        <PrimarySearchAppBar />
        <Container>
          <Teste/>
        </Container>
     
      </Box> 
  );
}