import React, {useState, useReducer} from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {FaBars, FaShoppingCart } from "react-icons/fa"
import SlideMenu from "./SlideMenu";

export default function NavBarHeader(){
    return(
        <>
        <SlideMenu />
        <div className="
        fixed top-0
        left-0 h-24
        w-full bg-gradient-to-b 
        from-header_color_1 
        to-header_color_2
        flex justify-between
        items-center p-4
        gap-14
        px-10">

            <div className="flex justify-start items-center gap-12">
            <div className="
            text-5xl text-text_color 
            hover:scale-110 transition-all
            cursor-pointer">
                <FaBars  />
            </div>
                <div className="rounded-full bg-slate-600 
                                w-16 h-16 flex items-center 
                                justify-center overflow-hidden
                                flex-shrink-0
                                ">    
                    Sem Usuarios    
                </div>
            </div>
            

            <div className="relative">
                <input
                className="bg-none border-none 
                           p-1 rounded-xl w-full
                           focus:outline-none
                           py-2 pl-10 pr-4 " 
                type="text" 
                name="seo" 
                id="seo"
                placeholder="Pesquisar..." />

                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <FaMagnifyingGlass />
                </div>
            </div>

            <div className="flex justify-end items-center text-5xl text-white"><FaShoppingCart /></div>
        </div>
        </>
    )
}