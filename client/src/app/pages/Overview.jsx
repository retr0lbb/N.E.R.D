import React from 'react'
import CardCover from '@mui/joy/CardCover';
import { Box, Button, Card } from '@mui/material'
import tcc from '../shared/assets/img/tcc.jpg'

import NerdLogo from "../shared/assets/img/NerdLogo.png"

export default function Overview() {
  return (
    <Card sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh'
    }}>
      <CardCover>
        <img
          src={tcc}
          style={{
            zIndex: -1,
            opacity: 'light',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(5px)'
          }}
        />
      </CardCover>
      <CardCover sx={{
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), linear-gradient(117deg, rgba(118, 87, 183, 0.90) 0%, rgba(63, 5, 158, 0.90) 50%, rgba(46, 0, 255, 0.90) 100%)',
        opacity: '0.6'
      }} />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '40vw',
        height: '60vh',
      }}>
        <img src={NerdLogo} width={350} className="logo" style={{zIndex: 1}} />
        <Button sx={{
          background: `linear-gradient(117deg, rgba(118, 87, 183, 0.79) 0%, rgba(63, 5, 158, 0.79) 50%, rgba(46, 0, 255, 0.79) 100%)`,
          height: 75,
          width: 300,
          borderRadius: 2
        }}
          variant='contained'
          href='/home'
        >
          Acessar o NERD
        </Button>
      </Box>
    </Card>
  )
}
