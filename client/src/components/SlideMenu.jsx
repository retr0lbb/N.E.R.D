import { IoMdClose, IoMdHome, IoIosChatboxes } from "react-icons/io";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaFolder } from "react-icons/fa";
import { MdLibraryMusic, MdGroup  } from "react-icons/md";
import { useState } from "react";

export default function SlideMenu(){
    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(!isClicked)
    }


    return(
        <div className={`h-screen fixed top-0 left-0 w-80 bg-purple-500  z-10 flex flex-col py-10 translate-x-[${isClicked? "-200%": "0"}] transition-all`}>

            <div className="text-text_color text-6xl flex
            w-52
            items-center justify-start px-10 cursor-pointer hover:scale-105 transition-all">
                <IoMdClose onClick={handleClick} />
            </div>
            <ul className="h-full flex
            justify-evenly flex-col p-10">
                <li className="group transition-all gap-4 justify-start"><div className="text-6xl"><IoMdHome /></div> Home</li>
                <li className="group transition-all gap-4 justify-start"><div className="text-6xl"><FaFolder /></div> Jogos</li>
                <li className="group transition-all gap-4 justify-start"><div className="text-6xl"><MdLibraryMusic /></div> Musicas</li>
                <li className="group transition-all gap-4 justify-start"><div className="text-6xl"><MdGroup /></div> Amigos</li>
                <li className="group transition-all gap-4 justify-start"><div className="text-6xl"><IoIosChatboxes /></div> Comunidades</li>
                <li className="group transition-all gap-4 justify-start"><div className="text-6xl"><HiMiniWrenchScrewdriver /></div> Configurações</li>
            </ul>
        </div>
    )
}