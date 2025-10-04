import React from "react"
import {BrowserRouter as Roteador, Routes, Route} from "react-router-dom"
import { Header } from "@/components/shared/Header"
import { GameDetails, Home, Login, Overview, Profile, SignUp, Library, Friends } from "@/pages"
import { Config } from "@/pages/tabs/Config"
export const LoginRouter: React.FC = () => {
    
    return(
        <Roteador>
            <Header />
            <Routes>
                <Route path="/" element={<Overview />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<SignUp />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/details/:id" element={<GameDetails />}/>
                <Route path="/profile/:id" element={<Profile />}/>
                <Route path="/lib" element={<Library />}/> 
                <Route path="/friends" element={<Friends />}/>
                <Route path="/config" element={<Config />}/>
            </Routes>
        </Roteador>
    )
}