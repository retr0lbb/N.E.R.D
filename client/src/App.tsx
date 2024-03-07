import React from "react"
import { LoginRouter } from "./Router/loginRouter"
import {NextUIProvider} from "@nextui-org/react";
//testGit modify


export default function App() {


  return (
    <NextUIProvider>
        <LoginRouter/>
    </NextUIProvider>
  )
}
