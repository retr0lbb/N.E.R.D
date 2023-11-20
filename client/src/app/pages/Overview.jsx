import React from 'react'
import { LayoutBg, Mask } from '../shared/components'
import { Box, Button } from '@mui/material'

import NerdLogo from "../shared/assets/img/NerdLogo.png"

export default function Overview() {
  return (
    <LayoutBg>
      <Mask>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '40vw',
          height: '60vh',
        }}> 
          <img src={NerdLogo} width={300} className="logo" />
          <Button
            sx={{
              color: 'primary.light',
              height: 50,
              width: 275,
              borderRadius: 2
            }}
            variant='contained'
            href='/home'
            
          >
            Acessar o NERD
          </Button>
        </Box>
      </Mask>
    </LayoutBg>
  )
}
