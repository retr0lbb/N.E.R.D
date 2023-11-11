import React from "react";
import {AppBar} from "@mui/material";
import { Box } from "@mui/system";
import Layout from "../shared/components/Layout";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PrimarySearchAppBar from "../shared/components/appBar";


export default function Home() {
  return (
    <Layout>
      <Box sx={{height:'150vh', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        
          <AppBar>
            <PrimarySearchAppBar/>
          </AppBar>
       
      </Box>
    </Layout>
  );
}