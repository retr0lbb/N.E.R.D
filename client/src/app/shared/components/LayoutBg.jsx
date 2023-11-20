import React from 'react'
import { Box } from '@mui/system'
import tcc from '../assets/img/tcc.jpg'

export default function LayoutBg({ children }) {
  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
        flexShrink: 0,
        background: `url(${tcc}),lightgray 50% / cover no-repeat`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }}>
        {children} 
    </Box>
  )
}
