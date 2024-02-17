import React from "react"
import { LoginRouter } from "./Router/loginRouter"
import {NextUIProvider} from "@nextui-org/react";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
    <NextUIProvider>
      {/*<Header />*/}
      <LoginRouter/>
    </NextUIProvider>
    </>
  )
}
