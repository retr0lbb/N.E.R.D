import React from 'react'
import { Box } from '@mui/system'
import bg from '../assets/img/bg.jpg'

export default function Layout({ children }) {
  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        background: '#001C30'
    }}>
        {children} 
    </Box>
  )
}
