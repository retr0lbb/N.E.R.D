import React from 'react'
import { Box } from '@mui/system'

export default function Layout({ children }) {
  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        border: 'none',
        background: 'linear-gradient(to right, #330057, #2A018C, #941DE8)',
    }}>
        {children} 
    </Box>
  )
}
