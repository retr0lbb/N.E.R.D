import React from "react";
import {AppBar} from "@mui/material";
import { Box } from "@mui/system";
import Layout from "../shared/components/Layout";
import PrimarySearchAppBar from "../shared/components/appBar";
import Teste from "./teste carousel/teste";



export default function Home() {
  return (
      <Box sx={{
        height: '150vh',
        display: 'flex',
        flexDirection: 'column', // Ensure children are stacked vertically
        alignItems: 'center',
        background: 'linear-gradient(to right, #330057, #2A018C, #941DE8)',
      }}>
        <AppBar>
          <PrimarySearchAppBar />
        </AppBar>
       
          <Teste />
      
      </Box> 
  );
}