import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from '@mui/material'
import { authTheme } from './themes/authTheme'
import { AddRoutes } from './routes/Addroutes'


export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={authTheme}>
        <AddRoutes/>
      </ThemeProvider>
    </BrowserRouter>
  )
}
