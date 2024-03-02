import React from "react"
import tcc from "@/static/tcc.jpg"
import { Button, ButtonGroup } from "@nextui-org/react"
import NerdLogo from "@/static/NerdLogo.png"
import { LogIn as LogInIcon, User2 } from "lucide-react"
import { useNavigate } from "react-router-dom"



export const Overview: React.FC = () => {
  const navigator = useNavigate()
  return(
    <div className=" w-screen absoute z-50 inset-0 h-screen flex flex-col bg-purple-500">
      <img src={tcc} 
      alt="" 
      onDragStart={(e) => {e.preventDefault()}} 
      className="absolute z-30 w-full h-full object-fill inset-0 blur-sm"/>
      <div className="absolute z-40 inset-0 w-full h-full bg-gradient-to-r from-purple-900 to-blue-900 opacity-50"></div>
      <div className="absolute z-[41] inset-0 w-full h-full bg-black/40"></div>


      <div className="w-full z-50 h-full flex flex-col justify-center items-center">
        <img src={NerdLogo} alt="Botão para entrar no catalogo da nossa loja virtual nerd"/>
        <ButtonGroup>
          <Button 
          onClick={() => navigator("/home")}
          color="secondary"
          variant="solid" 
          className="text-xl text-slate-50 
          font-semibold px-12 py-8
          ">

            Acessar o catalogo
          
          </Button>
        </ButtonGroup>
      </div>


      <div className="absolute top-0 right-0 p-10 flex items-center justify-center gap-5 text-xl z-50">
          <Button onClick={() => navigator("/login")} color="secondary" radius="lg" variant="ghost" className="p-7 text-slate-50" startContent={<User2 />}>Entrar</Button>
          <Button onClick={() => navigator("/cadastro")} color="secondary" radius="lg" variant="ghost" className="p-7 text-slate-50" startContent={<LogInIcon />}>Registrar</Button>
      </div>

    </div>
  )
} 