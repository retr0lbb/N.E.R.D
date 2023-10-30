import React from "react";
import {AppBar,Avatar,IconButton,Toolbar,} from "@mui/material";
import { MoreHoriz, SearchOutlined, } from "@mui/icons-material";
import { Box } from "@mui/system";
import Layout from "../shared/components/Layout";
import { Search } from "../shared/components/search";
import { SearchIconWrapper } from "../shared/components/search.icon";
import { StyledInputBase } from "../shared/components/inputbase";

//teste começa aq
import SwipeableTemporaryDrawer from "../shared/components/sidebar";
//termina teste aq

export default function Home() {
  return (
    <Layout>
      <Box sx={{height:'150vh'}}>
        <AppBar sx={{ background: "#008b8b" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MoreHoriz fontSize="large" />
            </IconButton>
            <SwipeableTemporaryDrawer/>

            <Search sx={{ flexGrow: 1 }}>
              <SearchIconWrapper>
                <SearchOutlined />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Avatar sx={{ background: "#9c27b0" }}>F</Avatar>
          </Toolbar>
        </AppBar>

         
      </Box>
    </Layout>
  );
}