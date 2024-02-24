import React from "react"
import {BrowserRouter as Roteador, Routes, Route} from "react-router-dom"
import { Overview } from "../pages/Overview"
import { Login } from "../pages/Login"
import { SignUp } from "@/pages/SignUp"
import { Home } from "@/pages/Home"
import { GameDetails } from "@/pages/GameDetails"

export const LoginRouter: React.FC = () => {
    return(
        <Roteador>
            <Routes>
                <Route path="/" element={<Overview />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/details" element={<GameDetails />} />
            </Routes>
        </Roteador>
    )
}