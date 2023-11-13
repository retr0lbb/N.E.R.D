import React from "react";
import {AppBar} from "@mui/material";
import { Box } from "@mui/system";
import Layout from "../shared/components/Layout";
import PrimarySearchAppBar from "../shared/components/appBar";



export default function Home() {
  return (
    <Layout>
      <Box sx={{
        height:'150vh', 
        display:'flex', 
        justifyContent:'space-around',
        alignItems:'center',
        background: 'linear-gradient(to right, #330057, #2A018C, #941DE8 )',
         
         
      }}>
        
          <AppBar>
            <PrimarySearchAppBar/>
          </AppBar>
         

          
      </Box>
    </Layout>
  );
}