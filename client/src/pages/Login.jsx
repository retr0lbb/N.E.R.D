import React, {useContext, useState, useEffect} from "react";
import axios from "axios"
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom"
//import dotenv from "dotenv"
//dotenv.config()

import mario from "../assets/img/mario.webp"
import red from "../assets/img/red.jpg"
import nerdLogo from "../assets/img/nerdLogo.png"

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { Layout, Slide } from '../components'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../global.css";

export default function Login() {
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    // Verifica se há um usuário no localStorage ao carregar o componente
    const userFromStorage = localStorage.getItem("user");

    if (userFromStorage) {
      // Se existir, redireciona para a página home
      history("/home");
    }
  }, [])

  const handleSubmit = async() =>{
    if(!email || !pass){
      console.log("Insira os campos corretamente");
        setEmail("");
        setPass("");
      return;
    }
    const secondHttp = "localhost:3000";
    const prymaryHttp = "3000-retr0lbb-nerd-vtbe03zy0uy.ws-us105.gitpod.io";
    //const primeHttp = process.env.HTTPURL;
    await axios.post(`http://${secondHttp}/users/login`, {email, pass}).then(result => {
      setEmail(""); 
      setPass("");
        localStorage.setItem("user", JSON.stringify(result.data.data))
      history("/home")
    }).catch(error => {
      if(error){
        alert(error)
        setEmail("");
        setPass("");
      }
    })
    
  }


  return (
    <Layout>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <form>
            <Container
              sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card sx={{ width: "90%", minHeight: "80%" }}>
                <CardContent
                  sx={{
                    borderRadius: 2,
                    textAlign: "center",
                    pt: 3.75,
                    pd: 3.75,
                    pl: 2,
                    pr: 2,
                    background: "rgba(225, 225, 225, 0.133)",
                    border: "1px solid ",
                    backdropFilter: "blur(3px)",
                    boxShadow: "0 0 6px 0 rgba(29, 29, 29, 0.203)",
                  }}
                >
                  <Box mb={10}>
                    <Container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography mb={1} variant="h3" pt={3} >
                        <img src={nerdLogo} width={150} className="logo" />
                      </Typography>
                    </Container>
                  </Box>
                  <Box color={"white"}>
                    <TextField
                    value={email}
                      fullWidth
                      InputLabelProps={{ required: false }}
                      variant="standard"
                      label="Email"
                      type={"email"}
                      onChange={ e => {
                        setEmail(e.target.value)
                        console.log("Email " + email)
                      }}
                      sx={{ mt: 2.5, mb: 2.5 }}
                      required
                    />

                    <TextField
                    value={pass}
                      fullWidth
                      variant="standard"
                      label="Pass"
                      type={"password"}
                      InputLabelProps={{ required: false }}
                      onChange={ (e) => {
                        setPass(e.target.value)
                        console.log(e.target.value)
                      }}
                      sx={{
                        mt: 2.5,
                        mb: 2.5,
                        color: "secondary.light",
                      }}
                      required
                    />
                  </Box>
                  <Button
                    sx={{
                      mt: 2.5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "primary.light",
                    }}
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    Entrar
                  </Button>
                  <Typography mt={2.5}>
                  <p>
                    Não possui uma conta?
                  </p>
                    <a href="cadastro0">
                      Clique aqui
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </form>
        </Box>
        <Box>
          <Carousel
            width={750}
            autoPlay
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
          >
            <Slide src={red} />
            <Slide src={mario} />
            <Slide src={red} />
            <Slide src={mario} />
            <Slide src={red} />
          </Carousel>
        </Box>
      </Box>
    </Layout>
  );
}
