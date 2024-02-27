import React from "react"
import { LoginRouter } from "./Router/loginRouter"
import {NextUIProvider} from "@nextui-org/react";
import { Header } from "./components/shared/Header";
import { useNavigate, BrowserRouter } from "react-router-dom"

export default function App() {


  return (
    <NextUIProvider>
      <div>
        <Header navigateTo={() => {}}/>
        <LoginRouter/>
      </div>
    </NextUIProvider>
  )
}
