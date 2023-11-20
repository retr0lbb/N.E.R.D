import React from 'react'
import { Box } from '@mui/system'

export default function Layout({ children }) {
  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        border: 'none',
        background: 'linear-gradient(270deg, #941DE8 0.43%, #2A018C 50.58%, #330057 99.7%)'
    }}>
        {children} 
    </Box>
  )
}
