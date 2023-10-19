import React from "react";
import {
  AppBar,
  Avatar,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { MoreHoriz, SearchOutlined, VideogameAsset } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Layout>
      <Box>
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
            <VideogameAsset fontSize="large" />
            <Button
              sx={{ marginLeft: "20px", borderRadius: "20px" }}
              variant="contained"
              color="secondary"
            >
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Comumnity
              </Link>
            </Button>
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
      <Container sx={{ marginBottom: 5, marginTop: 15 }}>
        <ButtonGroup
          variant="contained"
          color="secondary"
          sx={{
            margin: '100vm',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "none",
          }}
        >
          <Button size="large" sx={{ width: 250, height: 50, borderRadius: 10 }}>
            action
          </Button>
          <Button size="large" sx={{ width: 250, height: 50, borderRadius: 10 }}>
            commedy
          </Button>
          <Button size="large" sx={{ width: 250, height: 50, borderRadius: 10 }}>
            anime
          </Button>
          <Button size="large" sx={{ width: 250, height: 50, borderRadius: 10 }}>
            drama
          </Button>
          <Button size="large" sx={{ width: 250, height: 50, borderRadius: 10 }}>
            Horror
          </Button>
        </ButtonGroup>
      </Container>
      <Container sx={{ marginBottom: 5 }}>
        <Grid
          container
          rowSpacing={2.5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              1
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              2
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              3
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              4
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              5
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              6
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              7
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              8
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ background: "aliceblue", height: 175, borderRadius: 2 }}>
              9
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}