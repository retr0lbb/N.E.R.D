import React, { useContext, useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

//import dotenv from "dotenv"
//dotenv.config()

import mario from "../shared/assets/img/mario.webp"
import red from "../shared/assets/img/red.jpg"
import NerdLogo from "../shared/assets/img/NerdLogo.png"

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

import { Layout, Slide } from '../shared/components'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async () => {
    if (!email || !pass) {
      console.log("Insira os campos corretamente");
      alert("Insira os campos corretamente");
      setEmail("");
      setPass("");
      return;
    }
    const secondHttp = "http://localhost:3000";
    //const primeHttp = process.env.HTTPURL;
    await axios.post("https://3000-retr0lbb-nerd-vtbe03zy0uy.ws-us105.gitpod.io/users/login", { email, pass }).then(result => {
      setEmail("");
      setPass("");
      window.location.href = "/home";
    }).catch(error => {
      if (error) {
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
          <Carousel
            width={750}
            autoPlay
            autoFocus
            infiniteLoop
            interval={3000}
            transitionTime={1000}
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
                    height: '100vh',
                    overflow: 'hidden',
                    textAlign: "center",
                    pt: 3.75,
                    pd: 3.75,
                    pl: 2,
                    pr: 2,
                    background: 'linear-gradient(180deg, #48317A 18.99%, #131636 100%)',
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
                      <Box>
                        <img src={NerdLogo} style={{ width: '200px', height: '200px', }} />
                      </Box>
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
                      onChange={e => {
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
                      onChange={(e) => {
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
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}>
                    <Button
                      sx={{
                        width: 100,
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
                    <Button sx={{
                      width: 100,
                      mt: 2.5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "primary.light",
                    }}
                      variant="contained"
                      href="/"
                    >

                      Voltar
                    </Button>
                  </Box>

                </CardContent>
              </Card>
            </Container>
          </form>
        </Box>
      </Box>
    </Layout>
  );
}
