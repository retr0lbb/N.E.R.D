import React from 'react'
import { Box } from '@mui/system'

export default function Layout({ children }) {
  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        background: '#fff'
    }}>
        {children} 
    </Box>
  )
}
