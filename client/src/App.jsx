import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home'
import SingUp from './pages/Singup'
import TemplatePage from "./components/shared/template/templatePage"
import './global.css'
import { ThemeProvider } from '@mui/material'
import { authTheme } from './themes/authTheme'


export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={authTheme}>
        <Routes>
          <Route element={<Login />} path="/" exact />
          <Route element={<Home />} path="home" />
          <Route element={<SingUp />} path='cadastro0' />
          <Route element={<TemplatePage />} path='profile'/>
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
