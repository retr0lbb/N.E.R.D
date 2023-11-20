import React from 'react'
import { Box } from '@mui/system'

export default function Mask({ children }) {
  return (
    <Box sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        background: `linear-gradient(117deg, rgba(118, 87, 183, 0.79) 0%, rgba(63, 5, 158, 0.79) 50%, rgba(46, 0, 255, 0.79) 100%)`,
        
    }}>
        {children} 
    </Box>
  )
}
