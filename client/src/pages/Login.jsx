import React from 'react'
import { Avatar, Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import Layout from '../components/Layout'
import "../global.css"

export default function Login() {
  return (
    
    <Layout>
      <form>
        <Container sx={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Card sx={{ width: "50%", minHeight: "80%" }}>
              <Grid>
                <CardContent sx={{
                  borderRadius: '10px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  zIndex: '999',
                  textAlign: 'center',
                  padding: '30px 16px',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(225, 225, 225, 0.133)',
                  border: '1px solid #fff',
                  backdropFilter: 'blur(3px)',
                  boxShadow: '0 0 6px 0 rgba(29, 29, 29, 0.203)',
                }}>
                  <Box mb={10}>
                    <Container sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}>

                      <Typography mb={1} variant='h3' sx={{color: 'white'}}>
                        Login
                      </Typography>
                      <Avatar sx={{ background: '#cccccc' }}></Avatar>
                    </Container>
                  </Box>
                  <Box color={'white'}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ required: false }}
                      variant='standard'
                      label='Email'
                      type={'email'}
                      sx={{ marginTop: 2.5, marginBottom: 2.5}}
                      required
                      />

                    <TextField
                      fullWidth
                      variant='standard'
                      label='Pass'
                      type={'password'}
                      InputLabelProps={{ required: false }}
                      sx={{ marginTop: 2.5, marginBottom: 2.5, color: 'secondary.light'}}
                      required
                      />
                  </Box>
                  <Button 
                    sx={{
                      marginTop: 2.5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: 'primary.light'
                    }}
                    variant='contained'
                    >
                    Entrar
                  </Button>
                  <Typography mt={2.5} sx={{}}>
                      Não possui uma conta? Clique aqui
                      
                  </Typography>
                </CardContent>
              </Grid>
            </Card>
          </Grid>

        </Container>
      </form>
    </Layout>
  )
}
