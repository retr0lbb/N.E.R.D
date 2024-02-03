import React from "react"
import {BrowserRouter as Roteador, Routes, Route} from "react-router-dom"
import { Overview } from "../pages/Overview"
import { Login } from "../pages/Login"

export const LoginRouter: React.FC = () => {
    return(
        <Roteador>
            <Routes>
                <Route path="/" element={<Overview />}/>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Roteador>
    )
}