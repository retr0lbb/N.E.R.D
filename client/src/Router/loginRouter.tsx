import React from "react"
import {BrowserRouter as Roteador, Routes, Route} from "react-router-dom"
import { Overview } from "../pages/Overview"
import { Login } from "../pages/Login"
import { SignUp } from "@/pages/SignUp"
import { Home } from "@/pages/Home"
import { GameDetails } from "@/pages/GameDetails"
import { Header } from "@/components/shared/Header"

export const LoginRouter: React.FC = () => {
    
    return(
        <Roteador>
            <Header />
            <Routes>
                <Route path="/" element={<Overview />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/details/:id" element={<GameDetails />} />
            </Routes>
        </Roteador>
    )
}