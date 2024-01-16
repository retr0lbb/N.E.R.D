import React from "react";
import tcc from "../app/shared/assets/img/tcc.jpg";
import NerdLogo from "../app/shared/assets/img/NerdLogo.png";
import { useNavigate } from "react-router-dom";


export default function Overview() {
  const navigator = useNavigate()
  const handleDrag = (e) =>{
    e.preventDefault()
  }
  return (
    <>

    <img onDragStart={handleDrag} src={tcc} 
    className="
    bg-black
    absolute top-0 left-0
    border-0 object-cover
    w-screen h-screen blur-sm"
    alt="image from varius games showed up on vertical with a blur"/>

    {/** BGS */}
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary to-secondary opacity-40"/>
    <div className="absolute inset-0 bg-black opacity-35"></div>
    {/** Main */}


    <div className="absolute inset-0 flex justify-center items-center flex-col gap-10 ">
      <img src={NerdLogo}  alt="nerd logo with is as nerdemoji written nerd below" />
      <button onClick={() => navigator("/home")} className="
      pt-7 pb-7 pl-10 pr-10 
      bg-gradient-to-tl 
      from-secondary 
      to-primary rounded-lg 
      flex justify-center items-center 
      text-xl font-bold text-text_color hover:scale-110
      drop-shadow-md 
      hover:rounded-3xl 
      hover:bg-gradient-to-tl 
      hover:from-primary 
      hover:to-secondary transition-all
      ">
      
        ACESSAR O CATALOGO
      
      </button>
    </div>
    </>
  );
}
