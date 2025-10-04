import React from "react"
import { LoginRouter } from "./Router/router"
import {NextUIProvider} from "@nextui-org/react";


export default function App() {

  return (
    <NextUIProvider>
      <LoginRouter/>
    </NextUIProvider>
  )
}
