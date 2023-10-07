import React from 'react'
import { Box } from '@mui/system'
import bg from '../assets/img/bg.jpg'

export default function LayoutBg({ children }) {
  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        background: `url(${bg})`
    }}>
        {children} 
    </Box>
  )
}
